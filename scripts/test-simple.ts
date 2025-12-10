const API_URL = 'https://hivconnect-backend.shuffle-seo.workers.dev';

const simpleApp = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  confirmEmail: 'john@example.com',
  streetAddress: '123 Main St',
  city: 'New Brunswick',
  state: 'NJ',
  zipCode: '08901',
  whyJoin: 'I want to help my community',
  hivExperience: 'Living with HIV for 5 years',
  agreedToCommitments: true,
  consentGiven: true,
};

async function test() {
  console.log('🚀 Testing simplified collection...\n');

  const response = await fetch(`${API_URL}/api/membership-applications`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(simpleApp),
  });

  console.log(`Status: ${response.status}\n`);
  const text = await response.text();
  console.log('Response:', text);

  if (response.ok) {
    const data = JSON.parse(text);
    console.log('\n✅ SUCCESS!');
    console.log('ID:', data.doc?.id);
    console.log('Name:', data.doc?.firstName, data.doc?.lastName);
    console.log('Email:', data.doc?.email);
  }
}

test();
