import Layout from '@/components/layout/Layout'
import Head from 'next/head'

import React from 'react'

type Props = {}

function index({}: Props) {
  return (
    <div>
        <Head>
            <title>admin</title>
        </Head>
        <Layout>
            Admin
        </Layout>
    </div>
  )
}

export default index    