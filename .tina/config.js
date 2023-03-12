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
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true
                    }
                ]
            },
            {
                name: 'tierConcepts',
                label: 'Tier Concepts',
                path: 'src/pages/tier-concepts',
                format: 'mdx',
                defaultItem: () => {
                    return {
                        title: 'Tier Concepts'
                    };
                },
                fields: [
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
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true
                    }
                ]
            },
            {
                name: 'tierCloud',
                label: 'Tier Cloud',
                path: 'src/pages/tier-cloud',
                format: 'mdx',
                defaultItem: () => {
                    return {
                        title: 'Tier Cloud'
                    };
                },
                fields: [
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true
                    }
                ]
            },
            {
                name: 'references',
                label: 'References',
                path: 'src/pages/references',
                format: 'mdx',
                defaultItem: () => {
                    return {
                        title: 'References'
                    };
                },
                fields: [
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true
                    }
                ]
            },
            {
                name: 'selHosting',
                label: 'Self Hosting',
                path: 'src/pages/self-hosting',
                format: 'mdx',
                defaultItem: () => {
                    return {
                        title: 'Self Hosting'
                    };
                },
                fields: [
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true
                    }
                ]
            },
            {
                name: 'miscellaneous',
                label: 'Miscellaneous',
                path: 'src/pages/miscellaneous',
                format: 'mdx',
                defaultItem: () => {
                    return {
                        title: 'Miscellaneous'
                    };
                },
                fields: [
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
