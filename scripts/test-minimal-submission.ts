/**
 * Minimal test - only required fields
 */

const API_URL = 'https://hivconnect-backend.shuffle-seo.workers.dev';

const minimalApplication = {
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    birthMonth: '06',
    birthDay: '15',
    birthYear: '1985',
    streetAddress: '123 Main St',
    city: 'New Brunswick',
    state: 'NJ',
    zipCode: '08901',
    country: 'USA',
    email: 'test@example.com',
    confirmEmail: 'test@example.com',
  },
  experience: {
    whyJoinPlanningCouncil: 'I want to help my community',
    hivAidsExperience: 'Living with HIV for 5 years',
  },
  commitment: {
    agreedToCommitments: true,
    consentGiven: true,
  },
};

async function submitApplication() {
  console.log('🚀 Submitting minimal test application...\n');

  try {
    const response = await fetch(`${API_URL}/api/membership-applications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(minimalApplication),
    });

    console.log(`Status: ${response.status}\n`);
    const responseText = await response.text();
    console.log('Response:',responseText);

    if (response.ok) {
      const data = JSON.parse(responseText);
      console.log('\n✅ SUCCESS!');
      console.log('ID:', data.doc?.id);
      console.log('Full Name:', data.doc?.fullName);
    } else {
      console.error('\n❌ FAILED');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

submitApplication();
