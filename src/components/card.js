import * as React from "react"
import styled from "styled-components"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  padding: 20px 0px;
  color: black;
  text-align: center;
`

export const Card = ({ title, img, description }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <GatsbyImage image={img} imgStyle={{ padding: "40px" }} />
      <p>{description}</p>
    </Wrapper>
  )
}
