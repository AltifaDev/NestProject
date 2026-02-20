import postgres from 'postgres'
import type { Media, Agent, Property, Lead } from '../payload-types'

// Use the existing DATABASE_URL which points to Supabase
const sql = postgres(process.env.DATABASE_URL!, {
    ssl: { rejectUnauthorized: false },
    prepare: false, // Critical for Supabase transaction pooler (port 6543)
    // Payload uses 'payload' schema, but we want to sync to 'public'
})

// Utility to sync Media
export async function syncMediaToSupabase(doc: Media, operation: 'upsert' | 'delete') {
    try {
        if (operation === 'delete') {
            await sql`DELETE FROM public.media WHERE id = ${doc.id}`
            console.log(`Sync: Deleted media ${doc.id}`)
            return
        }

        const payload = {
            id: doc.id,
            url: doc.url || '',
            filename: doc.filename || '',
            mime_type: doc.mimeType || '',
            filesize: doc.filesize || 0,
            width: doc.width || 0,
            height: doc.height || 0,
            updated_at: new Date().toISOString()
        }

        await sql`
            INSERT INTO public.media ${sql(payload)}
            ON CONFLICT (id) DO UPDATE SET
                url = EXCLUDED.url,
                filename = EXCLUDED.filename,
                mime_type = EXCLUDED.mime_type,
                filesize = EXCLUDED.filesize,
                width = EXCLUDED.width,
                height = EXCLUDED.height,
                updated_at = EXCLUDED.updated_at
        `
        console.log(`Sync: Upserted media ${doc.id}`)
    } catch (error) {
        console.error('Error syncing media to Supabase:', error)
    }
}

// Utility to sync Agent
export async function syncAgentToSupabase(doc: Agent, operation: 'upsert' | 'delete') {
    try {
        if (operation === 'delete') {
            await sql`DELETE FROM public.agents WHERE id = ${doc.id}`
            console.log(`Sync: Deleted agent ${doc.id}`)
            return
        }

        const payload = {
            id: doc.id,
            name: doc.name,
            role: typeof doc.role === 'string' ? doc.role : 'agent',
            phone: doc.phone || '',
            email: doc.email || '',
            line_id: doc.lineId || '',
            whatsapp: doc.whatsapp || '',
            facebook: doc.facebook || '',
            linkedin: doc.linkedin || '',
            instagram: doc.instagram || '',
            bio: doc.bio || '',
            full_bio: doc.fullBio || '',
            license_number: doc.licenseNumber || '',
            experience_years: doc.experienceYears || 0,
            languages: doc.languages || [],
            service_areas: doc.serviceAreas || [],
            office_address: doc.officeAddress || '',
            verified: doc.verified || false,
            photo_id: (typeof doc.photo === 'object' ? doc.photo?.id : doc.photo) ?? null,
            updated_at: new Date().toISOString()
        }

        await sql`
            INSERT INTO public.agents ${sql(payload)}
            ON CONFLICT (id) DO UPDATE SET
                name = EXCLUDED.name,
                role = EXCLUDED.role,
                phone = EXCLUDED.phone,
                email = EXCLUDED.email,
                line_id = EXCLUDED.line_id,
                whatsapp = EXCLUDED.whatsapp,
                facebook = EXCLUDED.facebook,
                linkedin = EXCLUDED.linkedin,
                instagram = EXCLUDED.instagram,
                bio = EXCLUDED.bio,
                full_bio = EXCLUDED.full_bio,
                license_number = EXCLUDED.license_number,
                experience_years = EXCLUDED.experience_years,
                languages = EXCLUDED.languages,
                service_areas = EXCLUDED.service_areas,
                office_address = EXCLUDED.office_address,
                verified = EXCLUDED.verified,
                photo_id = EXCLUDED.photo_id,
                updated_at = EXCLUDED.updated_at
        `
        console.log(`Sync: Upserted agent ${doc.id}`)
    } catch (error) {
        console.error('Error syncing agent to Supabase:', error)
    }
}

// Utility to sync Property
export async function syncPropertyToSupabase(doc: Property, operation: 'upsert' | 'delete') {
    try {
        if (operation === 'delete') {
            await sql`DELETE FROM public.properties WHERE id = ${doc.id}`
            console.log(`Sync: Deleted property ${doc.id}`)
            return
        }

        // 1. Prepare Main Property Data
        const stats = doc.stats || {}
        const location = doc.location || {}

        // Note: We use ST_SetSRID(ST_MakePoint(lng, lat), 4326)::geography for the location column
        // But since we are using JSON payload, we might need a raw query for the geography part

        const payload = {
            id: doc.id,
            title: doc.title,
            description: doc.description || '',
            address: doc.address || '',
            property_type: doc.propertyType,
            listing_type: doc.listingType,
            price: doc.price,
            bedrooms: stats.bedrooms || 0,
            bathrooms: stats.bathrooms || 0,
            living_area: stats.livingArea || 0,
            land_area: stats.landArea || 0,
            year_built: stats.yearBuilt || 2024,
            status: doc.status || 'active',
            featured: doc.featured || false,
            agent_id: (typeof doc.agent === 'object' ? doc.agent?.id : doc.agent) ?? null,
            thumbnail: (typeof doc.thumbnail === 'object' ? doc.thumbnail?.id : doc.thumbnail) ?? null,

            // JSONB fields
            amenities: JSON.stringify(doc.amenities || []),
            location: JSON.stringify(location),
            stats: JSON.stringify(stats),
            details: JSON.stringify(doc.details || {}),
            indoor_amenities: JSON.stringify(doc.indoor_amenities || {}),
            project_amenities: JSON.stringify(doc.project_amenities || {}),

            updated_at: new Date().toISOString()
        }

        // We use a raw query to handle the ST_MakePoint for the geography column if needed.
        // If 'location' column is JSONB it's fine, but in our schema it's geography.
        // Wait, looking at list_tables: "location" is "USER-DEFINED" / "geography".

        await sql.begin(async (tx: any) => {
            // Upsert Property
            await tx`
                INSERT INTO public.properties (
                    id, title, description, address, property_type, listing_type, price,
                    bedrooms, bathrooms, living_area, land_area, year_built, status, featured,
                    agent_id, thumbnail, amenities, stats, details, indoor_amenities, project_amenities,
                    updated_at
                ) VALUES (
                    ${payload.id}, ${payload.title}, ${payload.description}, ${payload.address}, 
                    ${payload.property_type}, ${payload.listing_type}, ${payload.price},
                    ${payload.bedrooms}, ${payload.bathrooms}, ${payload.living_area}, ${payload.land_area}, 
                    ${payload.year_built}, ${payload.status}, ${payload.featured},
                    ${payload.agent_id}, ${payload.thumbnail}, ${payload.amenities}, ${payload.stats}, 
                    ${payload.details}, ${payload.indoor_amenities}, ${payload.project_amenities},
                    ${payload.updated_at}
                )
                ON CONFLICT (id) DO UPDATE SET
                    title = EXCLUDED.title,
                    description = EXCLUDED.description,
                    address = EXCLUDED.address,
                    property_type = EXCLUDED.property_type,
                    listing_type = EXCLUDED.listing_type,
                    price = EXCLUDED.price,
                    bedrooms = EXCLUDED.bedrooms,
                    bathrooms = EXCLUDED.bathrooms,
                    living_area = EXCLUDED.living_area,
                    land_area = EXCLUDED.land_area,
                    year_built = EXCLUDED.year_built,
                    status = EXCLUDED.status,
                    featured = EXCLUDED.featured,
                    agent_id = EXCLUDED.agent_id,
                    thumbnail = EXCLUDED.thumbnail,
                    amenities = EXCLUDED.amenities,
                    stats = EXCLUDED.stats,
                    details = EXCLUDED.details,
                    indoor_amenities = EXCLUDED.indoor_amenities,
                    project_amenities = EXCLUDED.project_amenities,
                    updated_at = EXCLUDED.updated_at
            `

            // Update PostGIS geography location and individual lat/lng columns if present
            if (location.lat && location.lng) {
                await tx`
                    UPDATE public.properties 
                    SET 
                        location = ST_SetSRID(ST_MakePoint(${location.lng}, ${location.lat}), 4326)::geography,
                        lat = ${location.lat},
                        lng = ${location.lng}
                    WHERE id = ${doc.id}
                `
            }

            // Sync images (properties_images)
            await tx`DELETE FROM public.properties_images WHERE property_id = ${doc.id}`
            const images = doc.images || []
            if (images.length > 0) {
                const imageRows = images.map((img: any, index: number) => ({
                    property_id: doc.id,
                    image_id: typeof img.image === 'object' ? img.image?.id : img.image,
                    tag: img.tag || 'other',
                    caption: img.caption || '',
                    sort_order: index
                })).filter((row: any) => row.image_id)

                if (imageRows.length > 0) {
                    await tx`INSERT INTO public.properties_images ${sql(imageRows)}`
                }
            }

            // Sync nearby places (properties_nearby_places)
            await tx`DELETE FROM public.properties_nearby_places WHERE property_id = ${doc.id}`
            const nearby = doc.nearby_places || []
            if (nearby.length > 0) {
                const nearbyRows = nearby.map((place: any) => ({
                    property_id: doc.id,
                    name: place.name,
                    distance: place.distance || '',
                    category: place.category || 'other',
                    icon: place.icon || ''
                }))
                await tx`INSERT INTO public.properties_nearby_places ${sql(nearbyRows)}`
            }
        })

        console.log(`Sync: Updated property ${doc.id}`)
    } catch (error) {
        console.error('Error syncing property to Supabase:', error)
    }
}

// Utility to sync Lead
export async function syncLeadToSupabase(doc: any, operation: 'upsert' | 'delete') {
    try {
        if (operation === 'delete') {
            await sql`DELETE FROM public.leads WHERE id = ${doc.id}`
            console.log(`Sync: Deleted lead ${doc.id}`)
            return
        }

        const payload = {
            id: doc.id,
            name: doc.name,
            email: doc.email || '',
            phone: doc.phone || '',
            message: doc.message || '',
            status: doc.status || 'new',
            source: doc.source || 'website',
            property_id: (typeof doc.property === 'object' ? doc.property?.id : doc.property) ?? null,
            agent_id: (typeof doc.agent === 'object' ? doc.agent?.id : doc.agent) ?? null,
            updated_at: new Date().toISOString()
        }

        await sql`
            INSERT INTO public.leads ${sql(payload)}
            ON CONFLICT (id) DO UPDATE SET
                name = EXCLUDED.name,
                email = EXCLUDED.email,
                phone = EXCLUDED.phone,
                message = EXCLUDED.message,
                status = EXCLUDED.status,
                source = EXCLUDED.source,
                property_id = EXCLUDED.property_id,
                agent_id = EXCLUDED.agent_id,
                updated_at = EXCLUDED.updated_at
        `
        console.log(`Sync: Upserted lead ${doc.id}`)
    } catch (error) {
        console.error('Error syncing lead to Supabase:', error)
    }
}

