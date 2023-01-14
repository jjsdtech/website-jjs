import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import MainLayout from "../layout/main"
import Container from "../components/container"

export default function JobTemplate({ data }) {
  const { markdownRemark: post } = data
  return (
    <MainLayout>
      <Container>
        <div className="blog-post-container">
          <div className="blog-post">
            <h1>
              <strong>Job Title: </strong>
              {post.frontmatter.title}
            </h1>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </Container>
    </MainLayout>
  )
}

export const Head = ({ data }) => {
  const { markdownRemark: post } = data
  return <Seo title={`Job: ${post.frontmatter.title}`} />
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        slug
      }
    }
  }
`
