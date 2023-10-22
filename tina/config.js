import { defineConfig } from 'tinacms'

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'blog',
        label: 'Blog',
        format: 'mdx',
        path: 'src/pages/blog',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'datetime',
            name: 'publishedAt',
            label: 'Published at',
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author',
            required: true,
            options: [
              {
                value: 'jevon',
                label: 'Jevon MacDonald',
              },
              {
                value: 'issac',
                label: 'Isaac Schlueter ',
              },
              {
                value: 'blake',
                label: 'Blake Mizerany',
              },
            ],
          },
          {
            type: 'string',
            name: 'category',
            label: 'Category',
          },
          {
            type: 'boolean',
            name: 'published',
            label: 'Published',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
      {
        name: 'changelog',
        label: 'Changelog',
        format: 'mdx',
        path: 'src/pages/changelog',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'datetime',
            name: 'publishedAt',
            label: 'Published at',
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author',
            required: true,
            options: [
              {
                value: 'jevon',
                label: 'Jevon MacDonald',
              },
              {
                value: 'issac',
                label: 'Isaac Schlueter ',
              },
              {
                value: 'blake',
                label: 'Blake Mizerany',
              },
            ],
          },
          {
            type: 'boolean',
            name: 'published',
            label: 'Published',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
})
