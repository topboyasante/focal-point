import Index from '@/assets/page-sections/home/Index'
import Head from 'next/head'
import React from 'react'

function index() {
  return (
    <>
    <Head>
      <title>𝔣𝔬𝔠𝔞𝔩 𝔭𝔬𝔦𝔫𝔱 | 𝔩𝔲𝔵𝔲𝔯𝔶 𝔭𝔥𝔬𝔱𝔬𝔤𝔯𝔞𝔭𝔥𝔶</title>
      <meta name="title" content="CXPTURE | Photography" />
      <meta name="description" content="CXPTURE | Photography" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Index/>
    </main>
    </>
  )
}

export default index