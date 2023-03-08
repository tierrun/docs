import {defineConfig} from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
    branch,
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Get this from tina.io NEXT_PUBLIC_TINA_CLIENT_ID
    token: process.env.NEXT_PUBLIC_TINA_TOKEN, // Get this from tina.io NEXT_PUBLIC_TINA_TOKEN
    build: {
        outputFolder: 'admin',
        publicFolder: 'public'
    },
    media: {
        tina: {
            mediaRoot: '',
            publicFolder: 'public'
        }
    },
    schema: {
        collections: [
            {
                name: 'gettingStarted',
                label: 'Getting Started',
                path: 'src/pages/getting-started',
                format: 'mdx',
                defaultItem: () => {
                    return {
                        title: 'Getting Started'
                    };
                },
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        isTitle: true,
                        required: true
                    },
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true
                    }
                ]
            },
            {
                name: 'tutorials',
                label: 'Tutorials',
                path: 'src/pages/tutorials',
                format: 'mdx',
                defaultItem: () => {
                    return {
                        title: 'New Tutorial'
                    };
                },
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        isTitle: true,
                        required: true
                    },
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true
                    }
                ]
            }
        ]
    }
});
