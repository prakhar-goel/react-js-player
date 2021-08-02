import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ResponsivePlayer from "../components/video/ResponsivePlayer"
import Lesson from "../components/lesson/Lesson"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Lesson />
    {/* <ResponsivePlayer url="https://www.youtube.com/watch?v=3e8szLWJqmY" /> */}
  </Layout>
)

export default IndexPage
