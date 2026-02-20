import { getPayload } from "payload";
import configPromise from "./src/payload.config";

async function run() {
    const payload = await getPayload({ config: configPromise });

    // 1. Get the agent
    const agentsResp = await payload.find({
        collection: 'agents',
        where: { email: { equals: 'agent@gmail.com' } }
    });

    if (agentsResp.docs.length === 0) {
        console.log("no agent found");
        process.exit(1);
    }
    const agentId = agentsResp.docs[0].id;

    // 2. Get the user
    const usersResp = await payload.find({
        collection: 'users',
        where: { email: { equals: 'agent@gmail.com' } }
    });

    if (usersResp.docs.length > 0) {
        const userId = usersResp.docs[0].id;
        console.log("Found user, linking to agent:", agentId);
        await payload.update({
            collection: 'users',
            id: userId,
            data: {
                role: 'agent',
                agent: agentId as any
            }
        });
    } else {
        console.log("User not found, creating user...");
        await payload.create({
            collection: 'users',
            data: {
                email: 'agent@gmail.com',
                password: 'password', // Resetting it so you can login
                role: 'agent',
                agent: agentId as any
            }
        });
    }

    console.log("User linked to agent successfully!");
    process.exit(0);
}

run();
