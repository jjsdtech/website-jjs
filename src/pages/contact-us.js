import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 220px;
`

const AddressWrapper = styled.div`
  margin-bottom: 40px;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
`

const StyledH1 = styled.h1`
  margin-bottom: 20px;
`

const ContactUsPage = () => {
  return (
    <Layout>
      <Container>
        <div>
          <Wrapper>
            <StyledH1>How to contact us:</StyledH1>
            <p>One Step One Goal - Japan (日本)</p>
          </Wrapper>
          <AddressWrapper>
            <div>
              <address>
                <h3>
                  <strong>JLJ Consultancy Services 連絡先</strong>
                </h3>
                <p>
                  <strong>Address:- </strong>
                  <span>
                    Plot no. 618, Ground Floor, Sector-40, Gurugram, Haryana
                    122001
                  </span>
                </p>
              </address>
              <p>
                <strong>Mobile:- </strong>
                <a href="tel:+919599976171">+919599976171</a>
              </p>
              <p>
                <strong>Email:- </strong>
                <a href="mailto:info@japaneselanguagejobsservices.com">
                  info@japaneselanguagejobsservices.com
                </a>
              </p>
              <p>
                <strong>Skype:- </strong> mukesh2462
              </p>
              <p>
                <strong>LinkedIn:- </strong>{" "}
                <a href="https://www.linkedin.com/in/jltjconsultancy/">
                  https://www.linkedin.com/in/jltjconsultancy/
                </a>
              </p>
            </div>
            <div>
              <StaticImage
                src="../images/address.jpeg"
                alt="Address"
                height={300}
              />
            </div>
          </AddressWrapper>
        </div>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact Us" />

export default ContactUsPage
