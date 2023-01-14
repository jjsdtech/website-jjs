import * as React from "react"
import styled from "styled-components"
// first name
// last name
// current location

const Element = styled.div`
  padding: 10px 0px;
`

const FormLabel = styled.div`
  margin-bottom: 4px;
`

const FormInput = styled.input`
  height: 40px;
  padding: 4px;
  width: 100%;
  border: 1px solid grey;
  display: block;
  margin-bottom: 12px;
`
export const FormSubmitResume = () => {
  return (
    <div>
      <h2>Form Data</h2>
      <Element>
        <FormLabel for="first_name">First Name</FormLabel>
        <FormInput type="text" id="first_name" />
      </Element>
      <Element>
        <FormLabel for="last_name">Last Name</FormLabel>
        <FormInput type="text" id="last_name" />
      </Element>
      <Element>
        <FormLabel for="last_name">Current Location</FormLabel>
        <FormInput type="text" id="last_name" />
      </Element>
    </div>
  )
}
