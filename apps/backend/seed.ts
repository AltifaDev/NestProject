import { getPayload } from "payload";
import configPromise from "./src/payload.config";

async function run() {
  const payload = await getPayload({ config: configPromise });
  const agents = await payload.find({
    collection: "agents",
    where: { email: { equals: "agent@gmail.com" } }
  });
  console.log(agents.docs);
  process.exit(0);
}
run();
