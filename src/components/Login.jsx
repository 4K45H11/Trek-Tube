import { Button, Container, Heading, Input, VStack ,Text} from '@chakra-ui/react';
import React from 'react';
import{Link} from 'react-router-dom';
const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack alignItems={'stretch'} spacing='8' w={['full','96']} m={'auto'}my={'16'}>
                <Heading>Welcome Back</Heading>
                <Input placeholder='abc@gmail.com' required type={'email'} focusBorderColor={'cyan.500'}/>
                <Input placeholder='enter password' required type={'password'} focusBorderColor={'cyan.500'}/>
                <Button variant={'link'} alignSelf={'end'} colorScheme='cyan'>
                    <Link to={'/forgetpassword'} >forget password?</Link>
                </Button>
                <Button type='submit' colorScheme={'cyan'}>Log In</Button>
                <Text colorScheme={'cyan'} textAlign={'right'}>
                    New User?{" "}
                    <Button variant={'link'} alignSelf={'end'} colorScheme='cyan'>
                        <Link to={'/signup'} >Sign Up</Link>
                    </Button>
                </Text>
               
            </VStack>
        </form>
    </Container>
  )
}

export default Login;