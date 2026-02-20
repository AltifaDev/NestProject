import fetch from 'node-fetch';

async function check() {
    console.log("Logging in as agent...");
    const loginRes = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ email: 'agent@gmail.com', password: 'password' })
    });
    const loginData = await loginRes.json();
    console.log("Login user:", loginData.user);
    if (!loginData.token) {
        console.error("Login failed", loginData);
        process.exit(1);
    }

    const { user, token } = loginData;
    const agentId = typeof user.agent === 'object' ? user.agent.id : user.agent;
    console.log("Agent ID:", agentId);

    if (!agentId) {
        console.log("User has no agent attached!");
        process.exit(1);
    }

    console.log(`Fetching properties for agent ${agentId}...`);
    const propsRes = await fetch(`http://localhost:3000/api/properties?where[agent][equals]=${agentId}&depth=2&limit=100`, {
        headers: { 'Authorization': `JWT ${token}` }
    });

    const propsData = await propsRes.json();
    console.log(`Found ${propsData.docs?.length} properties`);
    if (propsData.docs && propsData.docs.length > 0) {
        console.log(propsData.docs.map((p: any) => p.title));
    } else {
        console.log("No properties found.", propsData);
    }
}

check();
