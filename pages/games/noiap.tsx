import Head from 'next/head';
import Link from 'next/link';
import AppItem from '../../components/appitem';
import Layout from '../../components/layout';


export async function getStaticProps() {
    const freeGames = await (await fetch('http://noiap.centralus.cloudapp.azure.com/noiap')).json()
    return {
        props: {
            freeGames,
        },
    };
}

export default function free({ freeGames }: { freeGames: any[] }) {
    const names = freeGames.map(x => <AppItem key={x.appId} app={x} />);
    return <Layout>
        <Head>
            <title>Free Android Games</title>
        </Head>
        <div className="m-4">
            <Link className="inline-block p-2 rounded text-blue-500 bg-blue-100 dark:text-blue-300 dark:bg-blue-800 h-12 text-lg" href='/games/free'>Free</Link>
            <h2 className="inline-block rounded text-blue-800 bg-blue-100 dark:text-blue-100 dark:bg-blue-800 p-2 ml-4 h-12 text-lg">Paid</h2>
        </div>
        {names}
    </Layout>;
}