import * as React from "react"
import MainLayout from "../layout/main"
import Container from "../components/container"
import { FormSubmitResume } from "../components/form-submit-resume"

const SubmitResumePage = () => {
  return (
    <MainLayout>
      <Container>
        <h2>Submit Resume</h2>
        <FormSubmitResume />
      </Container>
    </MainLayout>
  )
}

export default SubmitResumePage
