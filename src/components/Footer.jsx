import { Box, Heading, HStack, Stack, VStack,Button ,Input,Text} from '@chakra-ui/react'
import React from 'react'
import{AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineSend} from 'react-icons/ai'
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'} >
                <Heading textAlign={['center','left']} size={'md'} textTransform={'uppercase'}>Join our Newsletter</Heading>

                <HStack borderBottom={'2px solid white'} py='2'>
                    <Input placeholder='email...' border={'none'} borderRadius='none' outline={'none'} focusBorderColor="none"/>
                    <Button p={0} color={'cyan'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                    <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
            </VStack>
            
            <VStack w={'full'} borderLeft={['none','2px solid white']} borderRight={['none','2px solid white']}>
                <Heading size={'md'} textTransform={'uppercase'}>Connect wth me</Heading>
                <HStack>
                    <Button colorScheme={'cyan'} variant={'ghost'}><a href="https://www.linkedin.com/in/akash-jana-b2ba65235/" target={'blank'}><AiFillLinkedin size={30}/></a></Button>
                    <Button colorScheme={'cyan'} variant='ghost'><a href="https://github.com/4K45H11" target={'blank'}><AiFillGithub size={'30'}/></a></Button>
                    <Button colorScheme={'cyan'} variant='ghost'><a href="https://www.instagram.com/aksjana11/" target={'blank'}><AiFillInstagram size={'30'}/></a></Button>
                </HStack>
            </VStack>

            <VStack w={'full'}  >
                <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>Trek hub</Heading>
                <Text>&copy; All rights reserved to 4K45H11</Text>
            </VStack>
        </Stack>

    </Box>
  )
}

export default Footer