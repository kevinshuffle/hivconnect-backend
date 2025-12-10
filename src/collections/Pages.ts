import { CollectionConfig } from 'payload';
import { afterChangeHook, afterDeleteHook } from '../hooks/triggerFrontendRebuild';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
    description: 'Custom pages with flexible content (e.g., Planning Council, About pages)',
  },
  hooks: {
    afterChange: [afterChangeHook],
    afterDelete: [afterDeleteHook],
  },
  access: {
    read: ({ req: { user } }) => {
      // Published pages are public
      if (user) return true;
      return {
        status: { equals: 'published' },
      };
    },
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL path for this page (e.g., "planning-council" for /planning-council)',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (data?.title && !value) {
              return data.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
            }
            return value;
          },
        ],
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: {
        description: 'Main page content',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      admin: {
        description: 'Short description for SEO meta description (150-160 characters)',
      },
      maxLength: 160,
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'SEO title (if different from page title)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'SEO meta description',
          },
          maxLength: 160,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Social sharing image (Open Graph)',
          },
        },
      ],
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Hero image for page header',
      },
    },
    {
      name: 'showInNavigation',
      type: 'checkbox',
      label: 'Show in Navigation',
      defaultValue: false,
      admin: {
        description: 'Display this page in the main navigation menu',
      },
    },
    {
      name: 'language',
      type: 'select',
      required: true,
      defaultValue: 'english',
      options: [
        { label: 'English', value: 'english' },
        { label: 'Spanish', value: 'spanish' },
        { label: 'Both', value: 'both' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
        { label: 'Archived', value: 'archived' },
      ],
    },
  ],
};
