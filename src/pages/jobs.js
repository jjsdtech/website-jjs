import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"
import { JobCard } from "../components/jobcard"

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 2rem;
`

const StyledTitle = styled.h1`
  text-align: center;
`

const PageWrapper = styled.div`
  margin: 30px 0px 60px 0px;
`

const JobsPage = ({ data }) => {
  return (
    <Layout>
      <Container>
        <PageWrapper>
          <StyledTitle>Available Jobs</StyledTitle>
          <StyledContainer>
            {data?.allMarkdownRemark?.edges?.map(edge => {
              return (
                <JobCard
                  key={edge?.node?.frontmatter?.title}
                  {...edge?.node?.frontmatter}
                />
              )
            })}
          </StyledContainer>
        </PageWrapper>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="Available Jobs" />

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
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

export default JobsPage
