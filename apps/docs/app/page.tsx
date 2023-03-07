import {Inter} from 'next/font/google';
import Content from '../content/index/overview.mdx';

const inter = Inter({subsets: ['latin']});

export default function Home() {
    return (
        <div className="prose invert">
            <Content />
        </div>
    );
}
