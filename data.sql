
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Investment Opportunity: Land',
            'Generated property description for testing purposes.',
            'land',
            'sale',
            'active',
            11653745,
            NULL,
            NULL,
            NULL,
            70,
            ST_SetSRID(ST_MakePoint(98.91903045728344, 18.740571403137174), 4326),
            'Chiang Mai, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Spacious Land for Family',
            'Generated property description for testing purposes.',
            'land',
            'rent',
            'active',
            141513,
            NULL,
            NULL,
            NULL,
            304,
            ST_SetSRID(ST_MakePoint(102.86167083825171, 16.49608265032099), 4326),
            'Khon Kaen, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Spacious House for Family',
            'Generated property description for testing purposes.',
            'house',
            'sale',
            'active',
            6395111,
            3,
            3,
            248,
            176,
            ST_SetSRID(ST_MakePoint(98.20362909219897, 7.873995115719708), 4326),
            'Phuket, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Newly Built Commercial',
            'Generated property description for testing purposes.',
            'commercial',
            'sale',
            'active',
            45293158,
            NULL,
            NULL,
            118,
            244,
            ST_SetSRID(ST_MakePoint(100.07842720446808, 9.570110968840977), 4326),
            'Surat Thani, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Classic Style Land',
            'Generated property description for testing purposes.',
            'land',
            'sale',
            'active',
            36748496,
            NULL,
            NULL,
            NULL,
            61,
            ST_SetSRID(ST_MakePoint(99.013565178888, 18.778541724666127), 4326),
            'Chiang Mai, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Investment Opportunity: Villa',
            'Generated property description for testing purposes.',
            'villa',
            'sale',
            'active',
            42927858,
            5,
            1,
            66,
            83,
            ST_SetSRID(ST_MakePoint(100.4403148463434, 13.865512325714757), 4326),
            'Bangkok, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Cozy House near City Center',
            'Generated property description for testing purposes.',
            'house',
            'rent',
            'active',
            32679,
            2,
            2,
            458,
            161,
            ST_SetSRID(ST_MakePoint(102.05137358090035, 14.900504866609666), 4326),
            'Nakhon Ratchasima, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Newly Built House',
            'Generated property description for testing purposes.',
            'house',
            'rent',
            'active',
            127946,
            4,
            4,
            244,
            68,
            ST_SetSRID(ST_MakePoint(102.84897894633221, 16.400188595743025), 4326),
            'Khon Kaen, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Premium House Location',
            'Generated property description for testing purposes.',
            'house',
            'sale',
            'active',
            48655118,
            3,
            2,
            350,
            399,
            ST_SetSRID(ST_MakePoint(102.87712390042043, 16.432858851805868), 4326),
            'Khon Kaen, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Modern Villa in Bangkok',
            'Generated property description for testing purposes.',
            'villa',
            'sale',
            'active',
            34822145,
            1,
            3,
            74,
            67,
            ST_SetSRID(ST_MakePoint(100.44245072016356, 13.691839136985147), 4326),
            'Bangkok, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Exclusive House with View',
            'Generated property description for testing purposes.',
            'house',
            'sale',
            'active',
            6266055,
            3,
            4,
            484,
            385,
            ST_SetSRID(ST_MakePoint(99.9601293843282, 12.638484515789372), 4326),
            'Prachuap Khiri Khan, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Classic Style Condo',
            'Generated property description for testing purposes.',
            'condo',
            'sale',
            'active',
            35313793,
            1,
            4,
            300,
            NULL,
            ST_SetSRID(ST_MakePoint(99.90885040405576, 9.620337884361565), 4326),
            'Surat Thani, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Premium Condo Location',
            'Generated property description for testing purposes.',
            'condo',
            'rent',
            'active',
            16607,
            1,
            1,
            446,
            NULL,
            ST_SetSRID(ST_MakePoint(102.88426324052391, 16.499969698265026), 4326),
            'Khon Kaen, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Premium Villa Location',
            'Generated property description for testing purposes.',
            'villa',
            'sale',
            'active',
            32650583,
            1,
            1,
            58,
            249,
            ST_SetSRID(ST_MakePoint(100.9556358899195, 12.957718823503361), 4326),
            'Chonburi, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Investment Opportunity: Land',
            'Generated property description for testing purposes.',
            'land',
            'sale',
            'active',
            25833792,
            NULL,
            NULL,
            NULL,
            151,
            ST_SetSRID(ST_MakePoint(102.89391472022592, 16.440391705503007), 4326),
            'Khon Kaen, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Newly Built Penthouse',
            'Generated property description for testing purposes.',
            'penthouse',
            'sale',
            'active',
            23405417,
            4,
            1,
            313,
            207,
            ST_SetSRID(ST_MakePoint(99.93206292958094, 12.537880992024517), 4326),
            'Prachuap Khiri Khan, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Spacious Villa for Family',
            'Generated property description for testing purposes.',
            'villa',
            'sale',
            'active',
            15275888,
            2,
            2,
            103,
            155,
            ST_SetSRID(ST_MakePoint(102.11180694072243, 14.984428982036775), 4326),
            'Nakhon Ratchasima, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Classic Style Land',
            'Generated property description for testing purposes.',
            'land',
            'rent',
            'active',
            110081,
            NULL,
            NULL,
            NULL,
            303,
            ST_SetSRID(ST_MakePoint(98.9712225339819, 18.82419275562079), 4326),
            'Chiang Mai, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Spacious Villa for Family',
            'Generated property description for testing purposes.',
            'villa',
            'sale',
            'active',
            47048779,
            5,
            2,
            287,
            229,
            ST_SetSRID(ST_MakePoint(99.91454878395945, 12.538042789293419), 4326),
            'Prachuap Khiri Khan, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Investment Opportunity: House',
            'Generated property description for testing purposes.',
            'house',
            'sale',
            'active',
            20202551,
            3,
            1,
            265,
            279,
            ST_SetSRID(ST_MakePoint(100.51655285692252, 13.730156561553239), 4326),
            'Bangkok, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Exclusive House with View',
            'Generated property description for testing purposes.',
            'house',
            'sale',
            'active',
            24983073,
            4,
            2,
            424,
            184,
            ST_SetSRID(ST_MakePoint(98.3586031568656, 7.822088635361829), 4326),
            'Phuket, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Premium House Location',
            'Generated property description for testing purposes.',
            'house',
            'sale',
            'active',
            11234592,
            5,
            4,
            495,
            203,
            ST_SetSRID(ST_MakePoint(100.83301126474849, 13.005859036313476), 4326),
            'Chonburi, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Premium House Location',
            'Generated property description for testing purposes.',
            'house',
            'rent',
            'active',
            145806,
            2,
            3,
            398,
            300,
            ST_SetSRID(ST_MakePoint(100.90020043033059, 12.976869798500742), 4326),
            'Chonburi, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Investment Opportunity: Condo',
            'Generated property description for testing purposes.',
            'condo',
            'rent',
            'active',
            30695,
            3,
            2,
            274,
            NULL,
            ST_SetSRID(ST_MakePoint(102.03147018823537, 15.047736318826994), 4326),
            'Nakhon Ratchasima, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Modern Commercial in Krabi',
            'Generated property description for testing purposes.',
            'commercial',
            'sale',
            'active',
            2939933,
            NULL,
            NULL,
            273,
            221,
            ST_SetSRID(ST_MakePoint(98.85920598885052, 8.087785521462104), 4326),
            'Krabi, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Classic Style Condo',
            'Generated property description for testing purposes.',
            'condo',
            'rent',
            'active',
            87372,
            4,
            3,
            339,
            NULL,
            ST_SetSRID(ST_MakePoint(100.59425252800104, 13.695880635884798), 4326),
            'Bangkok, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Luxury Condo with Pool',
            'Generated property description for testing purposes.',
            'condo',
            'sale',
            'active',
            19083156,
            5,
            4,
            352,
            NULL,
            ST_SetSRID(ST_MakePoint(99.01070763707447, 18.789832592785125), 4326),
            'Chiang Mai, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Luxury Commercial with Pool',
            'Generated property description for testing purposes.',
            'commercial',
            'rent',
            'active',
            49388,
            NULL,
            NULL,
            98,
            157,
            ST_SetSRID(ST_MakePoint(99.90019988600821, 12.521780444151783), 4326),
            'Prachuap Khiri Khan, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Affordable Commercial',
            'Generated property description for testing purposes.',
            'commercial',
            'rent',
            'active',
            141955,
            NULL,
            NULL,
            47,
            101,
            ST_SetSRID(ST_MakePoint(98.84553420907449, 8.16766831364098), 4326),
            'Krabi, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Classic Style Villa',
            'Generated property description for testing purposes.',
            'villa',
            'sale',
            'active',
            11495500,
            1,
            3,
            434,
            125,
            ST_SetSRID(ST_MakePoint(100.85238540558292, 12.830259788413905), 4326),
            'Chonburi, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Cozy Condo near City Center',
            'Generated property description for testing purposes.',
            'condo',
            'rent',
            'active',
            48388,
            2,
            3,
            87,
            NULL,
            ST_SetSRID(ST_MakePoint(100.00923842805537, 9.619257973724894), 4326),
            'Surat Thani, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Exclusive Villa with View',
            'Generated property description for testing purposes.',
            'villa',
            'rent',
            'active',
            27756,
            1,
            1,
            367,
            338,
            ST_SetSRID(ST_MakePoint(100.01001547140491, 9.452839000630153), 4326),
            'Surat Thani, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Cozy Villa near City Center',
            'Generated property description for testing purposes.',
            'villa',
            'sale',
            'active',
            42629093,
            1,
            2,
            120,
            293,
            ST_SetSRID(ST_MakePoint(102.84864953812752, 16.43719422989562), 4326),
            'Khon Kaen, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Affordable Condo',
            'Generated property description for testing purposes.',
            'condo',
            'rent',
            'active',
            97667,
            3,
            3,
            286,
            NULL,
            ST_SetSRID(ST_MakePoint(100.04948132092925, 9.437667747953865), 4326),
            'Surat Thani, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Newly Built Penthouse',
            'Generated property description for testing purposes.',
            'penthouse',
            'sale',
            'active',
            22949866,
            1,
            3,
            460,
            258,
            ST_SetSRID(ST_MakePoint(98.34834865079029, 7.958403368765875), 4326),
            'Phuket, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Spacious Land for Family',
            'Generated property description for testing purposes.',
            'land',
            'sale',
            'active',
            12866146,
            NULL,
            NULL,
            NULL,
            183,
            ST_SetSRID(ST_MakePoint(102.88698316193178, 16.499697482636318), 4326),
            'Khon Kaen, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Modern Penthouse in Phuket',
            'Generated property description for testing purposes.',
            'penthouse',
            'rent',
            'active',
            88921,
            4,
            4,
            395,
            113,
            ST_SetSRID(ST_MakePoint(98.31680383771373, 7.92895082034625), 4326),
            'Phuket, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Affordable Penthouse',
            'Generated property description for testing purposes.',
            'penthouse',
            'rent',
            'active',
            65956,
            2,
            3,
            172,
            220,
            ST_SetSRID(ST_MakePoint(98.84511303636482, 8.09832050825128), 4326),
            'Krabi, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Newly Built Commercial',
            'Generated property description for testing purposes.',
            'commercial',
            'sale',
            'active',
            46478117,
            NULL,
            NULL,
            338,
            213,
            ST_SetSRID(ST_MakePoint(99.92270668945052, 9.68155731657604), 4326),
            'Surat Thani, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Premium Land Location',
            'Generated property description for testing purposes.',
            'land',
            'rent',
            'active',
            75826,
            NULL,
            NULL,
            NULL,
            228,
            ST_SetSRID(ST_MakePoint(100.46802915857315, 13.837990030112348), 4326),
            'Bangkok, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Spacious Land for Family',
            'Generated property description for testing purposes.',
            'land',
            'sale',
            'active',
            2014594,
            NULL,
            NULL,
            NULL,
            392,
            ST_SetSRID(ST_MakePoint(100.89289363599237, 12.828621410378583), 4326),
            'Chonburi, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Investment Opportunity: Commercial',
            'Generated property description for testing purposes.',
            'commercial',
            'sale',
            'active',
            29778210,
            NULL,
            NULL,
            220,
            119,
            ST_SetSRID(ST_MakePoint(99.07638561074799, 18.71828450898093), 4326),
            'Chiang Mai, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Modern Villa in Chiang Mai',
            'Generated property description for testing purposes.',
            'villa',
            'rent',
            'active',
            55704,
            5,
            3,
            285,
            210,
            ST_SetSRID(ST_MakePoint(98.99571613992165, 18.786012254037704), 4326),
            'Chiang Mai, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Classic Style Condo',
            'Generated property description for testing purposes.',
            'condo',
            'rent',
            'active',
            46212,
            5,
            1,
            80,
            NULL,
            ST_SetSRID(ST_MakePoint(99.0064439295339, 18.856347983233096), 4326),
            'Chiang Mai, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Spacious Condo for Family',
            'Generated property description for testing purposes.',
            'condo',
            'rent',
            'active',
            35056,
            1,
            1,
            294,
            NULL,
            ST_SetSRID(ST_MakePoint(98.98701043330486, 18.878294818067218), 4326),
            'Chiang Mai, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Newly Built Villa',
            'Generated property description for testing purposes.',
            'villa',
            'sale',
            'active',
            16603966,
            5,
            4,
            135,
            326,
            ST_SetSRID(ST_MakePoint(102.89994890142154, 16.44294047371834), 4326),
            'Khon Kaen, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Spacious Villa for Family',
            'Generated property description for testing purposes.',
            'villa',
            'rent',
            'active',
            142096,
            4,
            2,
            338,
            132,
            ST_SetSRID(ST_MakePoint(100.50549049338821, 13.711282129280212), 4326),
            'Bangkok, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Classic Style Land',
            'Generated property description for testing purposes.',
            'land',
            'sale',
            'active',
            21845401,
            NULL,
            NULL,
            NULL,
            310,
            ST_SetSRID(ST_MakePoint(98.93284339828008, 8.043990965441703), 4326),
            'Krabi, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Cozy House near City Center',
            'Generated property description for testing purposes.',
            'house',
            'sale',
            'active',
            37472891,
            5,
            1,
            278,
            186,
            ST_SetSRID(ST_MakePoint(100.9909817617488, 12.881060913844346), 4326),
            'Chonburi, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Exclusive Penthouse with View',
            'Generated property description for testing purposes.',
            'penthouse',
            'rent',
            'active',
            142575,
            1,
            1,
            425,
            54,
            ST_SetSRID(ST_MakePoint(100.08075882958713, 9.669781119056683), 4326),
            'Surat Thani, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Affordable Land',
            'Generated property description for testing purposes.',
            'land',
            'rent',
            'active',
            114178,
            NULL,
            NULL,
            NULL,
            121,
            ST_SetSRID(ST_MakePoint(98.87213159245934, 8.150968064883754), 4326),
            'Krabi, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Investment Opportunity: Condo',
            'Generated property description for testing purposes.',
            'condo',
            'sale',
            'active',
            28573062,
            5,
            4,
            125,
            NULL,
            ST_SetSRID(ST_MakePoint(100.96386736748455, 12.80369284648693), 4326),
            'Chonburi, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Investment Opportunity: House',
            'Generated property description for testing purposes.',
            'house',
            'sale',
            'active',
            6405005,
            1,
            4,
            327,
            392,
            ST_SetSRID(ST_MakePoint(100.69861992262379, 13.893037980513586), 4326),
            'Bangkok, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Premium Condo Location',
            'Generated property description for testing purposes.',
            'condo',
            'sale',
            'active',
            15571872,
            2,
            3,
            193,
            NULL,
            ST_SetSRID(ST_MakePoint(100.84759461421596, 13.056100248095765), 4326),
            'Chonburi, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Modern Condo in Prachuap Khiri Khan',
            'Generated property description for testing purposes.',
            'condo',
            'sale',
            'active',
            31794263,
            4,
            1,
            44,
            NULL,
            ST_SetSRID(ST_MakePoint(99.93552381027119, 12.528020105173187), 4326),
            'Prachuap Khiri Khan, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Exclusive House with View',
            'Generated property description for testing purposes.',
            'house',
            'rent',
            'active',
            96737,
            5,
            1,
            453,
            137,
            ST_SetSRID(ST_MakePoint(98.21609219499625, 7.808811014811179), 4326),
            'Phuket, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Premium Land Location',
            'Generated property description for testing purposes.',
            'land',
            'sale',
            'active',
            43740058,
            NULL,
            NULL,
            NULL,
            52,
            ST_SetSRID(ST_MakePoint(100.66797174142377, 13.627852871143666), 4326),
            'Bangkok, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Affordable Villa',
            'Generated property description for testing purposes.',
            'villa',
            'rent',
            'active',
            28771,
            5,
            3,
            91,
            50,
            ST_SetSRID(ST_MakePoint(102.86202343912586, 16.424603425200946), 4326),
            'Khon Kaen, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Exclusive Land with View',
            'Generated property description for testing purposes.',
            'land',
            'sale',
            'active',
            9321398,
            NULL,
            NULL,
            NULL,
            386,
            ST_SetSRID(ST_MakePoint(102.15243700196571, 15.072964549850772), 4326),
            'Nakhon Ratchasima, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Affordable Villa',
            'Generated property description for testing purposes.',
            'villa',
            'rent',
            'active',
            44348,
            4,
            1,
            266,
            366,
            ST_SetSRID(ST_MakePoint(99.99697780170133, 12.612051301737706), 4326),
            'Prachuap Khiri Khan, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Spacious Condo for Family',
            'Generated property description for testing purposes.',
            'condo',
            'sale',
            'active',
            44292357,
            4,
            3,
            106,
            NULL,
            ST_SetSRID(ST_MakePoint(102.86726987724714, 16.472622012402166), 4326),
            'Khon Kaen, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Cozy Condo near City Center',
            'Generated property description for testing purposes.',
            'condo',
            'rent',
            'active',
            33477,
            1,
            2,
            65,
            NULL,
            ST_SetSRID(ST_MakePoint(100.48206413021421, 13.848254758437552), 4326),
            'Bangkok, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Spacious Villa for Family',
            'Generated property description for testing purposes.',
            'villa',
            'sale',
            'active',
            24063290,
            5,
            2,
            354,
            282,
            ST_SetSRID(ST_MakePoint(100.86161330809931, 12.821875751623393), 4326),
            'Chonburi, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Classic Style Commercial',
            'Generated property description for testing purposes.',
            'commercial',
            'sale',
            'active',
            30134782,
            NULL,
            NULL,
            413,
            221,
            ST_SetSRID(ST_MakePoint(102.85414608370957, 16.424620658240134), 4326),
            'Khon Kaen, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Spacious House for Family',
            'Generated property description for testing purposes.',
            'house',
            'rent',
            'active',
            27031,
            2,
            2,
            271,
            190,
            ST_SetSRID(ST_MakePoint(99.90823864171925, 12.603467038202975), 4326),
            'Prachuap Khiri Khan, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Spacious Penthouse for Family',
            'Generated property description for testing purposes.',
            'penthouse',
            'sale',
            'active',
            38739066,
            3,
            3,
            86,
            128,
            ST_SetSRID(ST_MakePoint(99.9618417932961, 12.579905197662825), 4326),
            'Prachuap Khiri Khan, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Classic Style Villa',
            'Generated property description for testing purposes.',
            'villa',
            'rent',
            'active',
            141195,
            1,
            4,
            439,
            290,
            ST_SetSRID(ST_MakePoint(98.38191653160426, 7.810104554019208), 4326),
            'Phuket, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Premium Commercial Location',
            'Generated property description for testing purposes.',
            'commercial',
            'rent',
            'active',
            39093,
            NULL,
            NULL,
            346,
            321,
            ST_SetSRID(ST_MakePoint(100.5599287419125, 13.844639845809011), 4326),
            'Bangkok, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Newly Built Villa',
            'Generated property description for testing purposes.',
            'villa',
            'sale',
            'active',
            42971718,
            5,
            2,
            145,
            264,
            ST_SetSRID(ST_MakePoint(99.06470364162566, 18.92128098528949), 4326),
            'Chiang Mai, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Exclusive Villa with View',
            'Generated property description for testing purposes.',
            'villa',
            'rent',
            'active',
            117454,
            3,
            3,
            74,
            338,
            ST_SetSRID(ST_MakePoint(99.0266339237739, 18.973763113150863), 4326),
            'Chiang Mai, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Investment Opportunity: Penthouse',
            'Generated property description for testing purposes.',
            'penthouse',
            'rent',
            'active',
            71893,
            3,
            1,
            423,
            181,
            ST_SetSRID(ST_MakePoint(98.24264520240625, 8.027913152717515), 4326),
            'Phuket, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Investment Opportunity: Villa',
            'Generated property description for testing purposes.',
            'villa',
            'rent',
            'active',
            31248,
            2,
            1,
            121,
            284,
            ST_SetSRID(ST_MakePoint(99.02783416196169, 18.805848430617807), 4326),
            'Chiang Mai, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Investment Opportunity: Commercial',
            'Generated property description for testing purposes.',
            'commercial',
            'rent',
            'active',
            98102,
            NULL,
            NULL,
            274,
            303,
            ST_SetSRID(ST_MakePoint(102.18341836900697, 15.043495651362178), 4326),
            'Nakhon Ratchasima, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Exclusive House with View',
            'Generated property description for testing purposes.',
            'house',
            'rent',
            'active',
            77308,
            4,
            3,
            97,
            318,
            ST_SetSRID(ST_MakePoint(102.02384804297941, 15.002777370183159), 4326),
            'Nakhon Ratchasima, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Luxury Land with Pool',
            'Generated property description for testing purposes.',
            'land',
            'sale',
            'active',
            9407320,
            NULL,
            NULL,
            NULL,
            175,
            ST_SetSRID(ST_MakePoint(98.20791312301685, 7.900138262590436), 4326),
            'Phuket, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Classic Style Commercial',
            'Generated property description for testing purposes.',
            'commercial',
            'rent',
            'active',
            22600,
            NULL,
            NULL,
            159,
            82,
            ST_SetSRID(ST_MakePoint(98.9439311717792, 18.865424350280136), 4326),
            'Chiang Mai, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Spacious Condo for Family',
            'Generated property description for testing purposes.',
            'condo',
            'sale',
            'active',
            7423139,
            1,
            1,
            479,
            NULL,
            ST_SetSRID(ST_MakePoint(102.81343435569835, 16.446939806249457), 4326),
            'Khon Kaen, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Cozy Commercial near City Center',
            'Generated property description for testing purposes.',
            'commercial',
            'sale',
            'active',
            45242510,
            NULL,
            NULL,
            116,
            296,
            ST_SetSRID(ST_MakePoint(102.10056809599958, 14.946716751762565), 4326),
            'Nakhon Ratchasima, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Investment Opportunity: Commercial',
            'Generated property description for testing purposes.',
            'commercial',
            'rent',
            'active',
            117509,
            NULL,
            NULL,
            319,
            330,
            ST_SetSRID(ST_MakePoint(98.98899568406469, 18.72890381456217), 4326),
            'Chiang Mai, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Modern Penthouse in Khon Kaen',
            'Generated property description for testing purposes.',
            'penthouse',
            'sale',
            'active',
            26876644,
            4,
            1,
            50,
            206,
            ST_SetSRID(ST_MakePoint(102.81141625577133, 16.463922396114004), 4326),
            'Khon Kaen, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Exclusive House with View',
            'Generated property description for testing purposes.',
            'house',
            'sale',
            'active',
            28742431,
            4,
            1,
            142,
            153,
            ST_SetSRID(ST_MakePoint(102.8302624265203, 16.426095895232613), 4326),
            'Khon Kaen, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Affordable Commercial',
            'Generated property description for testing purposes.',
            'commercial',
            'sale',
            'active',
            27977901,
            NULL,
            NULL,
            95,
            336,
            ST_SetSRID(ST_MakePoint(99.99568139190819, 9.502676265549805), 4326),
            'Surat Thani, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Luxury Land with Pool',
            'Generated property description for testing purposes.',
            'land',
            'rent',
            'active',
            48360,
            NULL,
            NULL,
            NULL,
            330,
            ST_SetSRID(ST_MakePoint(98.94155498037262, 8.022369481824025), 4326),
            'Krabi, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Cozy Land near City Center',
            'Generated property description for testing purposes.',
            'land',
            'rent',
            'active',
            27659,
            NULL,
            NULL,
            NULL,
            356,
            ST_SetSRID(ST_MakePoint(99.93532448959398, 12.537647896923378), 4326),
            'Prachuap Khiri Khan, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Classic Style Land',
            'Generated property description for testing purposes.',
            'land',
            'sale',
            'active',
            3310648,
            NULL,
            NULL,
            NULL,
            178,
            ST_SetSRID(ST_MakePoint(102.1839648742673, 15.090013536114576), 4326),
            'Nakhon Ratchasima, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Investment Opportunity: Commercial',
            'Generated property description for testing purposes.',
            'commercial',
            'rent',
            'active',
            124738,
            NULL,
            NULL,
            359,
            390,
            ST_SetSRID(ST_MakePoint(99.92078455615412, 12.562502228773008), 4326),
            'Prachuap Khiri Khan, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Modern Condo in Surat Thani',
            'Generated property description for testing purposes.',
            'condo',
            'rent',
            'active',
            124767,
            3,
            2,
            62,
            NULL,
            ST_SetSRID(ST_MakePoint(100.07816271825452, 9.442930325703383), 4326),
            'Surat Thani, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Modern Villa in Bangkok',
            'Generated property description for testing purposes.',
            'villa',
            'sale',
            'active',
            38954816,
            2,
            3,
            424,
            377,
            ST_SetSRID(ST_MakePoint(100.62679570256438, 13.833362191013773), 4326),
            'Bangkok, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Affordable Commercial',
            'Generated property description for testing purposes.',
            'commercial',
            'rent',
            'active',
            73023,
            NULL,
            NULL,
            378,
            154,
            ST_SetSRID(ST_MakePoint(100.42358852528083, 13.72841680562837), 4326),
            'Bangkok, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Affordable Condo',
            'Generated property description for testing purposes.',
            'condo',
            'sale',
            'active',
            35254770,
            4,
            4,
            438,
            NULL,
            ST_SetSRID(ST_MakePoint(102.81402901137926, 16.489059374329763), 4326),
            'Khon Kaen, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Newly Built Land',
            'Generated property description for testing purposes.',
            'land',
            'rent',
            'active',
            111346,
            NULL,
            NULL,
            NULL,
            360,
            ST_SetSRID(ST_MakePoint(102.88014195379725, 16.44008500679897), 4326),
            'Khon Kaen, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Premium Villa Location',
            'Generated property description for testing purposes.',
            'villa',
            'rent',
            'active',
            137386,
            3,
            1,
            391,
            244,
            ST_SetSRID(ST_MakePoint(99.03736017284328, 18.84967884335142), 4326),
            'Chiang Mai, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Cozy Villa near City Center',
            'Generated property description for testing purposes.',
            'villa',
            'rent',
            'active',
            67068,
            2,
            4,
            365,
            74,
            ST_SetSRID(ST_MakePoint(100.674965512872, 13.628276441579661), 4326),
            'Bangkok, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Investment Opportunity: Condo',
            'Generated property description for testing purposes.',
            'condo',
            'sale',
            'active',
            11276959,
            4,
            1,
            103,
            NULL,
            ST_SetSRID(ST_MakePoint(99.05383835839612, 18.921290989765303), 4326),
            'Chiang Mai, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Classic Style Commercial',
            'Generated property description for testing purposes.',
            'commercial',
            'sale',
            'active',
            9960037,
            NULL,
            NULL,
            76,
            246,
            ST_SetSRID(ST_MakePoint(98.3888826104084, 7.823548286594009), 4326),
            'Phuket, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Spacious Commercial for Family',
            'Generated property description for testing purposes.',
            'commercial',
            'rent',
            'active',
            123102,
            NULL,
            NULL,
            240,
            135,
            ST_SetSRID(ST_MakePoint(99.9307099999076, 12.581221710589809), 4326),
            'Prachuap Khiri Khan, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Luxury Penthouse with Pool',
            'Generated property description for testing purposes.',
            'penthouse',
            'sale',
            'active',
            13279504,
            5,
            3,
            355,
            325,
            ST_SetSRID(ST_MakePoint(100.42965407621601, 13.642530965355133), 4326),
            'Bangkok, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Luxury House with Pool',
            'Generated property description for testing purposes.',
            'house',
            'sale',
            'active',
            18227827,
            5,
            1,
            166,
            172,
            ST_SetSRID(ST_MakePoint(99.92515466370018, 9.422550372325865), 4326),
            'Surat Thani, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Modern Villa in Prachuap Khiri Khan',
            'Generated property description for testing purposes.',
            'villa',
            'sale',
            'active',
            12339652,
            3,
            1,
            138,
            397,
            ST_SetSRID(ST_MakePoint(99.90423417347046, 12.557448943625088), 4326),
            'Prachuap Khiri Khan, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
            true,
            0
        );
    END $$;
    
    DO $$
    DECLARE
        new_property_id uuid;
    BEGIN
        INSERT INTO "public"."properties" (
            "title", 
            "description", 
            "category", 
            "listing_type", 
            "status", 
            "price", 
            "bedrooms", 
            "bathrooms", 
            "floor_size", 
            "land_size", 
            "location", 
            "address_display"
        ) VALUES (
            'Modern House in Phuket',
            'Generated property description for testing purposes.',
            'house',
            'rent',
            'active',
            88362,
            4,
            2,
            484,
            311,
            ST_SetSRID(ST_MakePoint(98.24281044672588, 7.858339210962426), 4326),
            'Phuket, Thailand'
        ) RETURNING id INTO new_property_id;

        INSERT INTO "public"."property_images" (
            "property_id",
            "url",
            "is_thumbnail",
            "display_order"
        ) VALUES (
            new_property_id,
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            true,
            0
        );
    END $$;
    
