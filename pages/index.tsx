import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter 237</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
       <Sidebar/>

        <Feed/>  
        
      </main>

      
    </div>
  )
}

export default Home
