import Layout from '../components/Layout'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Page () {
  return (
      <Layout>
        <h1>NextAuth.js Example</h1>
        <p>
          This is an example site to demonstrate how to use <a href={`https://next-auth.js.org`}>NextAuth.js</a> for authentication.
        </p>
      </Layout>
  )
}
