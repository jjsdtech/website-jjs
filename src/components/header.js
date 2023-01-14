import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { FiChevronDown } from "react-icons/fi"

const Wrapper = styled.div`
  width: 60%;
`

const StyledUL = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
`

const StyledLi = styled.li`
  padding: 0px;
  margin: 0px 16px 0px 16px;
  list-style-type: none;
  font-size: 16px;
  position: relative;
`

const Button = styled.button`
  display: flex;
  background: transparent;
  padding: 2px;
  font-size: 16px;
  border: none;
  color: var(--color-primary);
  cursor: pointer;
`

const Dropdown = styled.div`
  width: 340px;
  margin: 36px -35% 0px -35%;
  position: absolute;
  background-color: #fff;
  top: 0px;
  padding: 10px 0px;
  border: 1px solid #e7e4e4;
  z-index: 1000;
`

const StyledLinkWrapper = styled.div`
  padding: 8px;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`

const Header = ({ siteTitle }) => {
  const [isOpen, setOpen] = React.useState(false)
  const handleDropdown = () => {
    setOpen(state => !state)
  }
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: `14px 20px`,
        borderBottom: "1px solid #f6f3f3",
      }}
    >
      <header
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`,
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
            fontSize: "24px",
          }}
        >
          <StaticImage src="../images/logo.png" height={60} />
        </Link>
        <Wrapper>
          <StyledUL>
            <StyledLi>
              <Link to="/">Home</Link>
            </StyledLi>
            <StyledLi>
              <Button onClick={handleDropdown}>
                Services <FiChevronDown />
              </Button>
              {isOpen ? (
                <Dropdown>
                  <div>
                    <StyledLinkWrapper>
                      <Link to="/japanese-language-translation/">
                        Japanese Language Translation
                      </Link>
                    </StyledLinkWrapper>
                    <StyledLinkWrapper>
                      <Link to="/japanese-language-interpretation/">
                        Japanese Language Interpretation
                      </Link>
                    </StyledLinkWrapper>
                    <StyledLinkWrapper>
                      <Link to="/corporate-training/">
                        Japanese Language Corporate Training
                      </Link>
                    </StyledLinkWrapper>
                  </div>
                </Dropdown>
              ) : null}
            </StyledLi>
            <StyledLi>
              <Link to="/jobs">Jobs</Link>
            </StyledLi>
            <StyledLi>
              <Link to="/submit-resume">Submit Resume</Link>
            </StyledLi>
            <StyledLi>
              <Link to="/about-us">About Us</Link>
            </StyledLi>
            <StyledLi>
              <Link to="/contact-us">Contact Us</Link>
            </StyledLi>
          </StyledUL>
        </Wrapper>
      </header>
    </div>
  )
}

export default Header
