import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const MainLayout = ({ children }) => {
  return <Layout>{children}</Layout>
}

export const Head = ({ title }) => {
  return <Seo title={title} />
}

export default MainLayout
