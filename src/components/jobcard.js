import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.div`
  padding: 20px;
  color: black;
  text-align: left;
  border: 1px solid #e9e1e1;
`

const JobOpeningStatus = styled.span`
  color: ${props => (props.isOpen ? "black" : "red")};
`

export const JobCard = ({
  title,
  company,
  description,
  isOpen,
  date,
  slug,
}) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <p>Date: {date}</p>
      <p>{description}</p>
      <p>
        <strong>Company:</strong> {company}
      </p>
      <p>
        <strong>Current Job Status:</strong>{" "}
        <JobOpeningStatus isOpen={isOpen}>
          {isOpen ? "Open" : "Expired"}
        </JobOpeningStatus>
      </p>
      <Link to={slug}>Read More</Link>
    </Wrapper>
  )
}
