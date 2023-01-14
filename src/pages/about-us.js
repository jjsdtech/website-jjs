import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"

const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <h1>About JLJ Services</h1>
        <p>We always strive for the best.</p>
        <h3>Passion</h3>
        <p>
          JLJ Services a professionally managed organization and has started in
          the year 2013, with offering Japanese language translations and jobs.
          JLJ Services is registered as a JAPANESE LANGUAGE JOBS SERVIES and
          this agency having to all kind of work related to Japanese language.
          Today, we stand proud to be one of the top companies in this ever
          growing competitive and quality in the Japanese language industry.
          What makes JLJ unique is our ability to help our esteemed clients meet
          all kinds of challenges and provide them with high quality Japanese
          language solutions at unbelievable prices. We help them enhance
          productivity by ensuring that their vital business functions work
          faster, cheaper and better. And, our ability to conceptualize and
          implement new and expanded capabilities allows clients to transform
          legacy models to take their business to the next level. Headquartered
          in Gurgaon, India, the company’s global spread extends across India
          and Japan. Our extensive Certified Specialist Native Linguistic
          Network with a team of more than 10 native certified translators in
          every language of multiple countries is our strength which helps us
          provide effective, high quality, fast and cost effective services to
          our Valuable Japanese clients.
        </p>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage
