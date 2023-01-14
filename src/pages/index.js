import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Container from "../components/container"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Summary from "../components/summary"
import LatestJob from "../components/latestjob"

const OuterWrapper = styled.div`
  background: #f08347;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`

const FirstWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  flex-direction: column;
  color: white;
`

const StyledHeading = styled.h1`
  font-size: 48px;
  margin-top: 20px;
`

const IndexPage = ({ data }) => {
  const images = [
    "interpretation.png",
    "translation.png",
    "corporate-training.jpeg",
    "jobs.png",
  ]
  const filteredImages = data?.allImageSharp?.edges?.filter(res =>
    images.includes(res?.node?.resize?.originalName)
  )
  console.log({ data })
  return (
    <Layout>
      <OuterWrapper>
        <Container>
          <FirstWrapper>
            <StaticImage src="../images/header-img.png" alt="Main Logo" />
            {/* <StyledHeading>JAPANESE LANGUAGE JOBS SERVICES</StyledHeading> */}
            <p>One Step One Goal - Japan （日本）</p>
          </FirstWrapper>
        </Container>
      </OuterWrapper>
      <Container>
        <Wrapper>
          <Summary images={filteredImages} />
        </Wrapper>
      </Container>
      <Container>
        <Wrapper>
          <LatestJob jobs={data?.allMarkdownRemark?.edges || []} />
        </Wrapper>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  query IndexPageQuery {
    allImageSharp {
      edges {
        node {
          gatsbyImageData
          resize {
            originalName
          }
        }
      }
    }
    allMarkdownRemark(limit: 3, sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          frontmatter {
            company
            date
            slug
            title
            isOpen
            description
          }
        }
      }
    }
  }
`

export default IndexPage
