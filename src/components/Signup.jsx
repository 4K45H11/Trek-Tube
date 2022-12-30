import React from 'react'
import { Button, Container, Heading, Input, VStack ,Text, Avatar} from '@chakra-ui/react';
import{Link} from 'react-router-dom';
const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack alignItems={'stretch'} spacing='8' w={['full','96']} m={'auto'}my={'16'}>
                <Heading textAlign={'center'}>TREK HUB</Heading>
                <Avatar alignSelf={'center'} boxSize={'32'}/>
                <Input placeholder='Name' required type={'text'} focusBorderColor={'cyan.500'}/>
                <Input placeholder='abc@gmail.com' required type={'email'} focusBorderColor={'cyan.500'}/>
                <Input placeholder='enter password' required type={'password'} focusBorderColor={'cyan.500'}/>
               
                <Button type='submit' colorScheme={'cyan'}>Sign Up</Button>
                <Text colorScheme={'cyan'} textAlign={'right'}>
                    Already Signed Up?{" "}
                    <Button variant={'link'} alignSelf={'end'} colorScheme='cyan'>
                        <Link to={'/login'} >Log In</Link>
                    </Button>
                </Text>
               
            </VStack>
        </form>
    </Container>
  )
}

export default Signup