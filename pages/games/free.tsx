import Head from 'next/head';
import Layout from '../../components/layout';
import AppItem from '../../components/appitem';
import Link from 'next/link';


export async function getStaticProps() {
    const freeGames = await (await fetch('http://noiap.centralus.cloudapp.azure.com/free')).json()
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
            <h2 className="inline-block rounded dark:bg-blue-800 dark:text-blue-100 text-blue-800 bg-blue-100 p-2 h-12 text-lg">Free</h2>
            <Link className="inline-block p-2 rounded dark:bg-blue-800 dark:text-blue-300 text-blue-500 bg-blue-100 ml-4 h-12 text-lg" href='/games/noiap'>Paid</Link>
        </div>
        {names}
    </Layout>;
}