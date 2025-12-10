/**
 * Test script to submit a membership application directly to the API
 * Run with: ADMIN_PASSWORD='er9fmtfKMC$' pnpm tsx scripts/test-membership-submission.ts
 */

const API_URL = process.env.API_URL || 'https://hivconnect-backend.shuffle-seo.workers.dev';

const testApplication = {
  status: 'pending',
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    birthMonth: '06',
    birthDay: '15',
    birthYear: '1985',
    streetAddress: '123 Main Street',
    addressLine2: 'Apt 4B',
    city: 'New Brunswick',
    state: 'NJ',
    zipCode: '08901',
    country: 'USA',
    email: 'john.doe@example.com',
    confirmEmail: 'john.doe@example.com',
    homePhone: '(732) 555-0123',
    cellPhone: '(732) 555-0124',
    bestTimeToCall: 'Weekday afternoons',
  },
  employment: {
    isEmployed: true,
    employers: 'Middlesex County Health Department',
    jobTitle: 'Community Health Coordinator',
    companyAddress: '841 Georges Road',
    addressLine2: 'Building A',
    companyCity: 'North Brunswick',
    companyState: 'NJ',
    companyZipCode: '08902',
  },
  demographics: {
    mailingLists: [
      { list: 'Planning Council Updates' },
      { list: 'Community Events' },
    ],
    receivedRyanWhiteServices: true,
    gender: 'Male',
    age: '35-44',
    raceEthnicity: 'White/Caucasian',
    languages: [
      { language: 'English' },
      { language: 'Spanish' },
    ],
    diverseExperience: [
      { experience: 'Person Living with HIV' },
      { experience: 'Community Health Worker' },
    ],
    serviceProviders: [
      { provider: 'Hyacinth Foundation' },
      { provider: 'Eric B. Chandler Health Center' },
    ],
    needsAssistance: true,
    assistanceDescription: 'Need ASL interpreter for meetings due to hearing impairment',
  },
  experience: {
    whyJoinPlanningCouncil: 'I have been living with HIV for 10 years and want to contribute to improving services in our community. As someone who has navigated the Ryan White system, I can provide valuable input from a client perspective.',
    hivAidsExperience: 'Diagnosed with HIV in 2015. Have been virally suppressed for 8 years. Active member of local support groups and peer mentor for newly diagnosed individuals.',
    backgroundExperience: '15 years in public health, with focus on community outreach and health education. Coordinated HIV testing events and linkage to care programs.',
    eligibilityInfo: 'I meet the eligibility as a person living with HIV who resides in Middlesex County and has received Ryan White services.',
    membershipCategories: [
      { category: 'Person Living with HIV/AIDS' },
      { category: 'Community Health Professional' },
    ],
    experienceInterests: [
      { interest: 'Quality Management Committee' },
      { interest: 'Needs Assessment/Priorities Committee' },
    ],
  },
  commitment: {
    agreedToCommitments: true,
    consentGiven: true,
  },
};

async function submitApplication() {
  console.log('🚀 Submitting test membership application...\n');
  console.log(`API URL: ${API_URL}/api/membership-applications\n`);

  try {
    const response = await fetch(`${API_URL}/api/membership-applications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testApplication),
    });

    console.log(`Status: ${response.status} ${response.statusText}\n`);

    const responseText = await response.text();
    console.log('Response body:');
    console.log(responseText);

    if (response.ok) {
      const data = JSON.parse(responseText);
      console.log('\n✅ Success! Application created with ID:', data.doc?.id);
      console.log('Full Name:', data.doc?.fullName);
      console.log('Status:', data.doc?.status);
      console.log('Submitted At:', data.doc?.submittedAt);
    } else {
      console.error('\n❌ Failed to create application');
      try {
        const errorData = JSON.parse(responseText);
        console.error('Error details:', JSON.stringify(errorData, null, 2));
      } catch (e) {
        console.error('Raw error:', responseText);
      }
    }
  } catch (error) {
    console.error('\n❌ Fatal error:', error);
    process.exit(1);
  }
}

submitApplication();
