import { getPayload } from "payload";
import configPromise from "./src/payload.config";
import fs from 'fs';
import path from 'path';

async function run() {
    try {
        const payload = await getPayload({ config: configPromise });

        // Check if agent@gmail.com exists
        const agentsResp = await payload.find({
            collection: 'agents',
            where: {
                email: {
                    equals: 'agent@gmail.com',
                },
            },
        });

        let agentId;
        if (agentsResp.docs.length > 0) {
            agentId = agentsResp.docs[0].id;
            console.log("Agent agent@gmail.com already exists. ID:", agentId);
            // Force update to trigger sync to Supabase
            await payload.update({
                collection: 'agents',
                id: agentId,
                data: {
                    name: agentsResp.docs[0].name // simple rewrite
                }
            });
            console.log("Triggered sync for agent", agentId);
        } else {
            console.log("Creating agent@gmail.com...");
            const newAgent = await payload.create({
                collection: 'agents',
                data: {
                    name: 'Test Agent',
                    email: 'agent@gmail.com',
                    phone: '0812345678',
                    role: 'agent',
                    password: 'password'
                }
            });
            agentId = newAgent.id;
            console.log("Created agent, ID:", agentId);
        }

        // Delete existing properties to start fresh, just in case
        console.log("Deleting old unsynced properties...");
        await payload.delete({
            collection: 'properties',
            where: { agent: { equals: agentId } }
        });

        // We'll upload a single dummy image first and reuse it for all 10 properties as thumbnail
        const imageRes = await fetch('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80');
        const arrayBuffer = await imageRes.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Save locally to a temp file
        const tempFilePath = path.join(process.cwd(), 'temp-property.jpg');
        fs.writeFileSync(tempFilePath, buffer);

        console.log("Creating media item for thumbnail...");
        const mediaItem = await payload.create({
            collection: 'media',
            data: {
                alt: 'Beautiful Property'
            },
            file: {
                data: buffer,
                mimetype: 'image/jpeg',
                name: 'property-thumbnail.jpg',
                size: buffer.length
            } as any
        });

        console.log("Media item created:", mediaItem.id);

        // Create 10 properties for this agent
        const propertyTypes = ['condo', 'house', 'townhouse', 'villa', 'land', 'commercial', 'apartment'];
        const bkkLocations = ['Bangkok', 'Nonthaburi', 'Phuket', 'Chiang Mai', 'Pattaya', 'Hua Hin'];
        const bkkDistricts = ['Sukhumvit', 'Silom', 'Sathorn', 'Ari', 'Thong Lo'];

        for (let i = 0; i < 10; i++) {
            const type = propertyTypes[i % propertyTypes.length];
            const province = bkkLocations[i % bkkLocations.length];
            const district = bkkDistricts[i % bkkDistricts.length];
            const isRent = i % 2 === 0;

            // Ensure some houses, condos, etc.
            const actualType = (i === 0 || i === 2 || i === 4) ? 'condo' : (i === 1 || i === 3 || i === 5) ? 'house' : type;

            await payload.create({
                collection: 'properties',
                data: {
                    title: `Beautiful ${actualType.charAt(0).toUpperCase() + actualType.slice(1)} in ${district}, ${province}`,
                    description: `This is a stunning ${actualType} located in the heart of ${district}. Perfect for anyone looking for a comfortable living space with great amenities nearby. Features modern design, spacious rooms, and excellent natural light.`,
                    propertyType: actualType as any,
                    listingType: isRent ? 'rent' : 'sale',
                    price: isRent ? 15000 + (i * 2000) : 3000000 + (i * 500000),
                    status: 'active',
                    address: `${100 + i} ${district} Road`,
                    thumbnail: mediaItem.id as any,
                    location: {
                        lat: 13.75 + (i * 0.01),
                        lng: 100.50 + (i * 0.01),
                        province: province,
                        district: district,
                        sub_district: 'Sub',
                        postcode: '10110',
                    },
                    stats: {
                        bedrooms: (i % 3) + 1,
                        bathrooms: (i % 2) + 1,
                        livingArea: 30 + (i * 10),
                        landArea: actualType !== 'condo' ? 50 + (i * 10) : 0,
                        floors: actualType === 'house' ? 2 : 1,
                        parking: (i % 2) + 1,
                        yearBuilt: 2020 + (i % 5),
                    },
                    indoor_amenities: {
                        furniture: true,
                        air_con: true,
                        internet: true,
                    },
                    project_amenities: {
                        pool: true,
                        gym: true,
                        security: true,
                        cctv: true,
                    },
                    agent: agentId as any,
                }
            });
            console.log(`Created property ${i + 1}`);
        }

        console.log("Finished creating 10 properties.");
        // clean up temp file
        if (fs.existsSync(tempFilePath)) fs.unlinkSync(tempFilePath);

        process.exit(0);

    } catch (err) {
        console.error("Error running script:", err);
        process.exit(1);
    }
}

run();
