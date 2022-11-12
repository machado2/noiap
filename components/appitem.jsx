import Image from 'next/image';
import Link from "next/link";

export default function AppItem({ app }) {
    const images = app.screenshots.map(url => <Image key={url} src={url} className="mr-1 mb-1 w-1/6 inline-block" alt="" width={100} height={0} />)
    return <div className="m-4 p-4 bg-green-100 rounded">
        <Link href={'https://play.google.com/store/apps/details?id=' + app.appId} 
            className="font-bold text-lg">{app.title}</Link>
        <p className="w-5/6 h-20 overflow-hidden hover:overflow-auto">
            {app.description}
        </p>
        <div>
            {images}
        </div>
    </div>
}
