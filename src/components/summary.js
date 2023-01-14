import * as React from "react"
import styled from "styled-components"
import { Card } from "./card"

const StyledWrapper = styled.div`
  padding: 30px 0px;
  color: black;
`

const HeadingWrapper = styled.h2`
  font-size: 32px;
  text-align: center;
`

const SubTitle = styled.p`
  font-size: 16px;
  text-align: center;
`

const ListWrrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 1rem;
`

const Summary = ({ images }) => {
  const ArrayItems = new Array(5).fill(0)

  const getImage = imageName => {
    return images?.find(
      image => image?.node?.resize?.originalName === imageName
    )?.node?.gatsbyImageData
  }

  const Items = [
    {
      title: "Japanese Language Translation",
      img: getImage("translation.png"),
      description: "Hello world isdfsd ",
    },
    {
      title: "Japanese Language Interpretation",
      img: getImage("interpretation.png"),
      description: "Hello world isasd asdasd asdasd asdasd",
    },
    {
      title: "Japanese Language Corporate Training",
      img: getImage("corporate-training.jpeg"),
      description: "Hello world isasd asdasd asdasd asdasd",
    },
    {
      title: "Japanese Language Jobs",
      img: getImage("jobs.png"),
      description: "Hello world isasd asdasd asdasd asdasd",
    },
  ]
  return (
    <StyledWrapper>
      <HeadingWrapper>Our Sevices</HeadingWrapper>
      <SubTitle>
        JLJ Services provides Japanese profile to all organization who is facing
        Japanese language barrier. We are only one language solution in the
        Japanese language industry.
      </SubTitle>
      <ListWrrapper>
        {Items.map(res => {
          return <Card key={res?.title} {...res} />
        })}
      </ListWrrapper>
    </StyledWrapper>
  )
}

export default Summary
