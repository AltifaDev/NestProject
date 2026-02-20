import { getPayload } from "payload";
import configPromise from "./src/payload.config";

async function run() {
    const payload = await getPayload({ config: configPromise });

    console.log("Looking for agent...");
    // Find agent whose name contains 'test agent' (case insensitive)
    const agentsResp = await payload.find({
        collection: 'agents',
        where: {
            name: {
                contains: 'test agent',
            },
        },
    });

    if (agentsResp.docs.length === 0) {
        console.error("Agent 'test agent' not found!");
        process.exit(1);
    }

    const agent = agentsResp.docs[0];
    console.log(`Found agent: ${agent.name} (ID: ${agent.id})`);

    // 1. Create Profile Photo from Unsplash (A professional looking person)
    console.log("Creating professional profile photo...");
    const profileImageUrl = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80'; // Professional man
    const profileRes = await fetch(profileImageUrl);
    const profileBuffer = Buffer.from(await profileRes.arrayBuffer());

    const profileMedia = await payload.create({
        collection: 'media',
        data: { alt: `Profile photo of ${agent.name}` },
        file: {
            data: profileBuffer,
            mimetype: 'image/jpeg',
            name: 'agent-profile.jpg',
            size: profileBuffer.length,
        } as any,
    });

    // 2. Create Property Thumbnail from Unsplash (A beautiful house)
    console.log("Creating beautiful property photo...");
    const houseImageUrl = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80'; // Modern house
    const houseRes = await fetch(houseImageUrl);
    const houseBuffer = Buffer.from(await houseRes.arrayBuffer());

    const houseMedia = await payload.create({
        collection: 'media',
        data: { alt: 'Beautiful Luxury House' },
        file: {
            data: houseBuffer,
            mimetype: 'image/jpeg',
            name: 'property-luxury.jpg',
            size: houseBuffer.length,
        } as any,
    });

    // 3. Update Agent with new photo
    console.log("Updating agent...");
    await payload.update({
        collection: 'agents',
        id: agent.id,
        data: {
            photo: profileMedia.id as any,
        },
    });

    // 4. Update all properties belonging to this agent
    console.log("Updating properties...");
    const propsResp = await payload.find({
        collection: 'properties',
        where: {
            agent: {
                equals: agent.id,
            },
        },
    });

    console.log(`Updating ${propsResp.docs.length} properties...`);
    for (const prop of propsResp.docs) {
        await payload.update({
            collection: 'properties',
            id: prop.id,
            data: {
                thumbnail: houseMedia.id as any,
                // Also update images array if it exists and is empty
                images: (prop.images && (prop.images as any[]).length > 0)
                    ? prop.images
                    : [{ image: houseMedia.id as any }],
            },
        });
    }

    console.log("Success! Agent and properties updated with Unsplash images.");
    process.exit(0);
}

run().catch((err) => {
    console.error("Error:", err);
    process.exit(1);
});
