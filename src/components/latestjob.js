import * as React from "react"
import styled from "styled-components"
import { JobCard } from "./jobcard"

const StyledWrapper = styled.div`
  text-align: center;
  color: black;
  margin-bottom: 60px;
`

const StyledHeading = styled.h2`
  padding-bottom: 30px;
  font-size: 30px;
`

const JobOpeningWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 1rem;
  margin: 0px 30px;
`

const LatestJob = ({ jobs }) => {
  return (
    <StyledWrapper>
      <StyledHeading>Jobs Opening</StyledHeading>
      <JobOpeningWrapper>
        {jobs?.map(job => {
          return (
            <JobCard
              {...job?.node?.frontmatter}
              key={job?.node?.frontmatter?.title}
            />
          )
        })}
      </JobOpeningWrapper>
    </StyledWrapper>
  )
}

export default LatestJob
