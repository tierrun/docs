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
                fields: [
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true,
                        templates: [
                            {
                                name: 'CodeGroup',
                                label: 'Code Group',
                                fields: [
                                    {
                                        name: 'title',
                                        label: 'Title',
                                        type: 'string'
                                    },
                                    {
                                        name: 'children',
                                        label: 'Code Blocks',
                                        type: 'rich-text'
                                    }
                                ]
                            },
                            {
                                name: 'Banner',
                                label: 'Banner Component',
                                fields: [
                                    {
                                        name: 'children',
                                        label: 'Information',
                                        type: 'rich-text'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'tierConcepts',
                label: 'Tier Concepts',
                path: 'src/pages/tier-concepts',
                format: 'mdx',
                fields: [
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true,
                        templates: [
                            {
                                name: 'CodeGroup',
                                label: 'Code Group',
                                fields: [
                                    {
                                        name: 'title',
                                        label: 'Title',
                                        type: 'string'
                                    },
                                    {
                                        name: 'children',
                                        label: 'Code Blocks',
                                        type: 'rich-text'
                                    }
                                ]
                            },
                            {
                                name: 'Banner',
                                label: 'Banner',
                                fields: [
                                    {
                                        name: 'children',
                                        label: 'Information',
                                        type: 'rich-text'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'tutorials',
                label: 'Tutorials',
                path: 'src/pages/tutorials',
                format: 'mdx',
                fields: [
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true,
                        templates: [
                            {
                                name: 'CodeGroup',
                                label: 'Code Group',
                                fields: [
                                    {
                                        name: 'title',
                                        label: 'Title',
                                        type: 'string'
                                    },
                                    {
                                        name: 'children',
                                        label: 'Code Blocks',
                                        type: 'rich-text'
                                    }
                                ]
                            },
                            {
                                name: 'Banner',
                                label: 'Banner',
                                fields: [
                                    {
                                        name: 'children',
                                        label: 'Information',
                                        type: 'rich-text'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'tierCloud',
                label: 'Tier Cloud',
                path: 'src/pages/tier-cloud',
                format: 'mdx',
                fields: [
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true,
                        templates: [
                            {
                                name: 'CodeGroup',
                                label: 'Code Group',
                                fields: [
                                    {
                                        name: 'title',
                                        label: 'Title',
                                        type: 'string'
                                    },
                                    {
                                        name: 'children',
                                        label: 'Code Blocks',
                                        type: 'rich-text'
                                    }
                                ]
                            },
                            {
                                name: 'Banner',
                                label: 'Banner',
                                fields: [
                                    {
                                        name: 'children',
                                        label: 'Information',
                                        type: 'rich-text'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'references',
                label: 'References',
                path: 'src/pages/references',
                format: 'mdx',
                fields: [
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true,
                        templates: [
                            {
                                name: 'CodeGroup',
                                label: 'Code Group',
                                fields: [
                                    {
                                        name: 'title',
                                        label: 'Title',
                                        type: 'string'
                                    },
                                    {
                                        name: 'children',
                                        label: 'Code Blocks',
                                        type: 'rich-text'
                                    }
                                ]
                            },
                            {
                                name: 'Banner',
                                label: 'Banner',
                                fields: [
                                    {
                                        name: 'children',
                                        label: 'Information',
                                        type: 'rich-text'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'selHosting',
                label: 'Self Hosting',
                path: 'src/pages/self-hosting',
                format: 'mdx',
                fields: [
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true,
                        templates: [
                            {
                                name: 'CodeGroup',
                                label: 'Code Group',
                                fields: [
                                    {
                                        name: 'title',
                                        label: 'Title',
                                        type: 'string'
                                    },
                                    {
                                        name: 'children',
                                        label: 'Code Blocks',
                                        type: 'rich-text'
                                    }
                                ]
                            },
                            {
                                name: 'Banner',
                                label: 'Banner',
                                fields: [
                                    {
                                        name: 'children',
                                        label: 'Information',
                                        type: 'rich-text'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'miscellaneous',
                label: 'Miscellaneous',
                path: 'src/pages/miscellaneous',
                format: 'mdx',
                fields: [
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true,
                        templates: [
                            {
                                name: 'CodeGroup',
                                label: 'Code Group',
                                fields: [
                                    {
                                        name: 'title',
                                        label: 'Title',
                                        type: 'string'
                                    },
                                    {
                                        name: 'children',
                                        label: 'Code Blocks',
                                        type: 'rich-text'
                                    }
                                ]
                            },
                            {
                                name: 'Banner',
                                label: 'Banner',
                                fields: [
                                    {
                                        name: 'children',
                                        label: 'Information',
                                        type: 'rich-text'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
