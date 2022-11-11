import React, { useState } from "react";
import { Carousel, Card } from 'antd';
import Image from 'next/image'

export default function AppItem({ app }) {
    const urls = app.screenshots
    const screenshots = []
    let bucket = []
    const groups = []
    for (let url of urls) {
        bucket.push(<div key={url} className="basis-1/3"><Image src={url} className="w-1/2" alt="" width={100} height={0} /></div>)
        if (bucket.length >= 3) {
            groups.push(bucket)
            bucket = []
        }
    }

    let key = 1
    for (let group of groups) {
        screenshots.push(<div key={key++}><div className="flex flex-row" key={key}>{group}</div></div>)
    }

    return <Card title={app.title}>
        <p className="description" style={{ "maxHeight": "5em", overflow: "hidden", textOverflow: "ellipsis" }}>
            {app.description}
        </p>
        <Carousel autoplay>
            {screenshots}
        </Carousel>
    </Card>
}
