import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.div`
  min-height: 240px;
  padding: 20px;
  border-top: 1px solid #f6f3f3;
`

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 1fr;
  grid-auto-rows: auto;
  gap: 1rem;
  max-width: 1100px;
  margin: auto;
  padding: 20px 0px;
`

const CopyrightLine = styled.p`
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <div>Japanese Job Services</div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us/">About</Link>
            </li>
            <li>
              <Link to="/contact-us/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </InnerWrapper>
      <div>
        <CopyrightLine>
          © {new Date().getFullYear()} · Copyright Japanese Job Services{" "}
        </CopyrightLine>
      </div>
    </Wrapper>
  )
}

export default Footer
