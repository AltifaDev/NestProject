import pg from 'pg';
const { Client } = pg;

const projectRef = 'zskakdqvjrkwkzzamlkg';
const regions = ['ap-south-1', 'ap-southeast-1'];
const passwords = ['Jenevara@001', 'Jenevara@009'];
const usernames = [`postgres.${projectRef}`, projectRef];
const ports = [6543, 5432];

async function testAll() {
    for (const region of regions) {
        const host = `aws-0-${region}.pooler.supabase.com`;
        for (const port of ports) {
            for (const username of usernames) {
                for (const password of passwords) {
                    const connectionString = `postgresql://${username}:${password}@${host}:${port}/postgres`;
                    console.log(`Testing: ${username}:***@${host}:${port}`);
                    const client = new Client({ connectionString, connectionTimeoutMillis: 5000 });
                    try {
                        await client.connect();
                        console.log('  SUCCESS!');
                        await client.end();
                        process.exit(0);
                    } catch (err) {
                        console.log(`  Error: ${err.message}`);
                    }
                }
            }
        }
    }
}

testAll();
