import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
// import "./globals.css";

export const metadata: Metadata = {
  title: 'Nextra 4',
  description: 'Nextra 4 is here.',
}

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = (

)
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>

export default async function RootLayout({ children } :{   children: ReactNode }) {
  return (
    <html lang="en" dir="ltr"  suppressHydrationWarning
    >
      <body>
        <Layout
          banner={banner}
          navbar={ <Navbar logo={<b>Nextra</b>} />}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
