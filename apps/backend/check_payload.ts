import { getPayload } from "payload";
import configPromise from "./src/payload.config";

async function run() {
    const payload = await getPayload({ config: configPromise });
    const users = await payload.find({ collection: 'users', where: { email: { equals: 'agent@gmail.com' } } });

    if (users.docs.length === 0) {
        console.log("no user");
        return process.exit(1);
    }

    const user = users.docs[0] as any;
    const agentId = typeof user.agent === 'object' ? user.agent.id : user.agent;
    console.log("Agent ID:", agentId);

    // Payload find
    const props = await payload.find({
        collection: 'properties',
        where: {
            agent: { equals: agentId }
        }
    });

    console.log("Properties found:", props.docs.length);
    process.exit(0);
}
run();
