import Head from 'next/head';
import Layout from '../../components/layout';
import AppItem from '../../components/appitem';


export async function getStaticProps() {
    const freeGames = await (await fetch('https://playstoreweb.delightfulsand-f1c1f7bb.centralus.azurecontainerapps.io/noiap')).json()
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
        {names}
    </Layout>;
}