/**
 * Seed sample events for HIV Connect Central NJ
 */

const API_URL = 'https://hivconnect-backend.shuffle-seo.workers.dev';

const sampleEvents = [
  {
    title: 'Planning Council Meeting - December 2025',
    slug: 'planning-council-december-2025',
    description: {
      root: {
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Join us for our monthly Planning Council meeting to discuss HIV/AIDS services and priorities in our region.',
                type: 'text',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'paragraph',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'root',
        version: 1,
      },
    },
    startDate: '2025-12-17T18:00:00.000Z',
    endDate: '2025-12-17T20:00:00.000Z',
    location: {
      type: 'hybrid',
      venueName: 'Middlesex County Administration Building',
      address: '75 Bayard Street',
      city: 'New Brunswick',
      state: 'NJ',
      zipCode: '08901',
      virtualLink: 'https://zoom.us/j/meeting-id-here',
    },
    contactEmail: 'info@hivconnectcnj.org',
    contactPhone: '(732) 745-3940',
    category: 'planning-council',
    status: 'published',
    featured: true,
  },
  {
    title: 'Quality Improvement & Strategic Planning Committee',
    slug: 'qi-strategic-planning-december-2025',
    description: {
      root: {
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Bi-monthly meeting focused on quality improvement initiatives and strategic planning for HIV services in our tri-county region.',
                type: 'text',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'paragraph',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'root',
        version: 1,
      },
    },
    startDate: '2025-12-19T14:00:00.000Z',
    endDate: '2025-12-19T16:00:00.000Z',
    location: {
      type: 'virtual',
      virtualLink: 'https://zoom.us/j/qi-committee-meeting',
    },
    contactEmail: 'qi@hivconnectcnj.org',
    category: 'committee',
    status: 'published',
    featured: false,
  },
  {
    title: 'HIV/AIDS Awareness & Testing Day',
    slug: 'hiv-testing-day-january-2026',
    description: {
      root: {
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Free HIV testing, information about prevention, treatment resources, and support services. Walk-ins welcome!',
                type: 'text',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'paragraph',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'root',
        version: 1,
      },
    },
    startDate: '2026-01-15T10:00:00.000Z',
    endDate: '2026-01-15T16:00:00.000Z',
    location: {
      type: 'in-person',
      venueName: 'Community Health Center',
      address: '123 Main Street',
      city: 'New Brunswick',
      state: 'NJ',
      zipCode: '08901',
    },
    contactEmail: 'testing@hivconnectcnj.org',
    contactPhone: '(732) 745-3940',
    category: 'health-fair',
    status: 'published',
    featured: true,
  },
  {
    title: 'Support Group Meeting - Living Well with HIV',
    slug: 'support-group-living-well-january-2026',
    description: {
      root: {
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'A safe, confidential space for people living with HIV/AIDS to share experiences, receive support, and build community. Facilitated by trained peer counselors.',
                type: 'text',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'paragraph',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'root',
        version: 1,
      },
    },
    startDate: '2026-01-22T18:30:00.000Z',
    endDate: '2026-01-22T20:00:00.000Z',
    location: {
      type: 'in-person',
      venueName: 'Hyacinth AIDS Foundation',
      address: '103 Bayard Street',
      city: 'New Brunswick',
      state: 'NJ',
      zipCode: '08901',
    },
    contactEmail: 'support@hivconnectcnj.org',
    category: 'support-group',
    status: 'published',
    featured: false,
  },
];

async function seedEvents() {
  console.log('🌱 Seeding sample events...\n');

  // Note: This requires admin authentication
  // For now, events need to be created manually in the admin UI
  // This script serves as documentation of the sample data structure

  console.log('Sample events to create in admin UI:');
  console.log('=====================================\n');

  sampleEvents.forEach((event, index) => {
    console.log(`${index + 1}. ${event.title}`);
    console.log(`   Slug: ${event.slug}`);
    console.log(`   Date: ${new Date(event.startDate).toLocaleDateString()}`);
    console.log(`   Category: ${event.category}`);
    console.log(`   Location: ${event.location.type}`);
    console.log('');
  });

  console.log('\n✅ Please create these events in the admin UI at:');
  console.log('   https://hivconnect-backend.shuffle-seo.workers.dev/admin/collections/events\n');
  console.log('📋 Copy the data structure from this script file for accuracy.\n');
}

seedEvents();
