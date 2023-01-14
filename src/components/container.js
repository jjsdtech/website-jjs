import * as React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 20px 0px;
`

const Container = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>
}

export default Container
