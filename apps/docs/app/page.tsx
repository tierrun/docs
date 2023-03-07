import {Inter} from 'next/font/google';
import Content from './message.mdx';

import {Button} from 'ui';

const inter = Inter({subsets: ['latin']});

export default function Home() {
    return (
        <main>
            <Content />
            <Button />
        </main>
    );
}
