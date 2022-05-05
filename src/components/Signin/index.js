import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './SigninElements';

const SignIn = () => {
  return (
    <>
       <Container>
           <FormWrap>
                <Icon to="/">Vistaderm</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign In to your VistaDerm Account</FormH1>
                        <FormLabel htmlFor="for">Email Id</FormLabel>
                        <FormInput type="email" id="for" placeholder="Enter your email id" required />
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type="password" id="for" placeholder="Enter your password" required />
                        <FormButton type="submit">Sign In</FormButton>
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
           </FormWrap>
        </Container> 
    </>
  )
}

export default SignIn