/**
 * Test with authentication
 */

const API_URL = 'https://hivconnect-backend.shuffle-seo.workers.dev';
const ADMIN_EMAIL = 'kevin@shuffleseo.com';
const ADMIN_PASSWORD = 'er9fmtfKMC$';

async function login() {
  console.log('🔐 Logging in...');
  const response = await fetch(`${API_URL}/api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: ADMIN_EMAIL, password: ADMIN_PASSWORD }),
  });

  if (!response.ok) {
    throw new Error(`Login failed: ${response.status}`);
  }

  const data = await response.json();
  console.log('✅ Logged in\n');
  return data.token;
}

async function submitApplication(token: string) {
  const minimalApplication = {
    personalInfo: {
      firstName: 'Jane',
      lastName: 'Smith',
      birthMonth: '03',
      birthDay: '20',
      birthYear: '1990',
      streetAddress: '456 Oak Ave',
      city: 'Highland Park',
      state: 'NJ',
      zipCode: '08904',
      country: 'USA',
      email: 'jane.smith@example.com',
      confirmEmail: 'jane.smith@example.com',
    },
    experience: {
      whyJoinPlanningCouncil: 'I want to make a difference in HIV services',
      hivAidsExperience: 'Volunteer at local HIV testing center for 3 years',
    },
    commitment: {
      agreedToCommitments: true,
      consentGiven: true,
    },
  };

  console.log('🚀 Submitting with auth token...\n');

  const response = await fetch(`${API_URL}/api/membership-applications`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`,
    },
    body: JSON.stringify(minimalApplication),
  });

  console.log(`Status: ${response.status}\n`);
  const responseText = await response.text();
  console.log('Response:', responseText);

  if (response.ok) {
    const data = JSON.parse(responseText);
    console.log('\n✅ SUCCESS!');
    console.log('ID:', data.doc?.id);
    console.log('Full Name:', data.doc?.fullName);
    console.log('Email:', data.doc?.personalInfo?.email);
  } else {
    console.error('\n❌ FAILED');
  }
}

async function main() {
  try {
    const token = await login();
    await submitApplication(token);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
