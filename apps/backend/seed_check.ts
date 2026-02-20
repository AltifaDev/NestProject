import { getPayload } from "payload";
import configPromise from "./src/payload.config";

async function run() {
    const payload = await getPayload({ config: configPromise });
    const users = await payload.find({ collection: 'users' });
    console.log("USERS:");
    users.docs.forEach((u: any) => console.log(u.email, u.role, u.agent));

    const properties = await payload.find({ collection: 'properties' });
    console.log("PROPERTIES agent relation:");
    properties.docs.forEach((p: any) => console.log(p.title, p.agent));
    process.exit(0);
}
run();
