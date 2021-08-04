import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Lesson from "../components/lesson/Lesson"
import  Container  from "@material-ui/core/Container"



function IndexPage() {
  return (
    <>
      <Container>
        <div>
        {/* Layout vedio and title */}
          <Layout>
            <Seo title="Home" />
            <Lesson />
          </Layout>
        </div>

      </Container>
    </>
  );
}

export default IndexPage
