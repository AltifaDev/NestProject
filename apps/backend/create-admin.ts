import { getPayload } from "payload";
import configPromise from "./src/payload.config";

async function run() {
    const payload = await getPayload({ config: configPromise });

    console.log("Creating admin user...");

    try {
        const user = await payload.create({
            collection: "users",
            data: {
                email: "admin@test.com",
                password: "password123",
                role: "admin",
            },
        });
        console.log("Admin user created successfully:", user.email);
    } catch (err: any) {
        if (err.errors && err.errors[0]?.message?.includes('already exists')) {
            console.log("Admin user already exists.");
        } else {
            console.error("Error creating admin user:", err);
        }
    }

    process.exit(0);
}

run();
