import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton} from './SignupElements';

const SignUp = () => {
  return (
    <>
       <Container>
           <FormWrap>
                <Icon to="/">Vistaderm</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign Up for your VistaDerm Account</FormH1>
                        <FormLabel htmlFor="for">Name</FormLabel>
                        <FormInput type="name" id="for" placeholder="Enter your Name" required />
                        <FormLabel htmlFor="for">Email Id</FormLabel>
                        <FormInput type="email" id="for" placeholder="Enter your email id" required />
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type="password" id="for" placeholder="Enter your password" required />
                        <FormLabel htmlFor="for">Re-Enter Password</FormLabel>
                        <FormInput type="password" id="for" placeholder="Enter your password again" required />
                        <FormButton type="submit">Sign Up</FormButton>
                    </Form>
                </FormContent>
           </FormWrap>
        </Container> 
    </>
  )
}

export default SignUp