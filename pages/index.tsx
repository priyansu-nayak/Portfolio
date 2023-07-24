import Head from 'next/head'
import { Inter } from 'next/font/google'
// import type { NextPage } from 'next'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Priyansu's Portfolio</title>
      </Head>
      <h1 className=" text-red-500 ">
        Lets build an AWESOME Portfolio
      </h1>
    </>
  )
}
