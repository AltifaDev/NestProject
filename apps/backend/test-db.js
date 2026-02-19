import pg from 'pg';
const { Client } = pg;

// Session mode pooler (port 5432) - required for Payload CMS persistent connections
const connectionString = 'postgresql://postgres.zskakdqvjrkwkzzamlkg:Jenevara%40001@aws-0-ap-south-1.pooler.supabase.com:5432/postgres';

async function test() {
    const client = new Client({
        connectionString,
        ssl: { rejectUnauthorized: false }
    });
    try {
        await client.connect();
        console.log('Connected successfully!');
        const result = await client.query('SELECT current_database(), current_user, version()');
        console.log('DB:', result.rows[0]);
        await client.end();
    } catch (err) {
        console.error('Connection error:', err.message);
    }
}

test();
