import Link from 'next/link'
import Layout from '~components/Layout'
import { Loading } from '@carbon/react'
import styles from '~styles/_pages/index-page.module.scss'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className={styles.hero__heading}>Hello Next.js 👋</h1>
    <div>
      <Loading description="Loading indicator" withOverlay={false} />
    </div>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
