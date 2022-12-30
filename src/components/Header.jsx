import React from 'react'
import { Link } from 'react-router-dom'
import { Drawer,DrawerBody,DrawerOverlay,DrawerContent,DrawerHeader,DrawerCloseButton,Button, useDisclosure, VStack, HStack } from '@chakra-ui/react'
import{BiMenuAltLeft} from 'react-icons/bi'
const Header = () => {
    const{isOpen,onOpen,onClose}=useDisclosure(); ///isOpen-true/false;onOpen,onClose--according functions
  return (
    <>
    <Button zIndex={'overlay'}
    pos={'fixed'}
    top={'4'}
    left={'4'}
    colorScheme='cyan'
    p={'0'}
    w={'10'}
    h={'10'}
    borderRadius={'full'}
    onClick={onOpen}>
        <BiMenuAltLeft size={'20'}/>
    </Button>

    <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay/>
        <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>TREK TUBE</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'} >
                    <Button  onClick={onClose}variant={'ghost'} colorScheme={'cyan'} >
                        <Link to={"/"}>Home</Link>
                    </Button>
                    <Button onClick={onClose} variant={'ghost'} colorScheme={'cyan'}>
                        <Link to={"/videos"}>Videos</Link>
                    </Button>
                    <Button onClick={onClose} variant={'ghost'} colorScheme={'cyan'}>
                        <Link to={"/videos?catrgory=free"}>Free Videos</Link>
                    </Button>
                    <Button onClick={onClose} variant={'ghost'} colorScheme={'cyan'}>
                        <Link to={"/upload"}>Upload Video</Link>
                    </Button>
                </VStack>
                <HStack pos={'absolute'} bottom={'10'} left={'0'} width={'full'} justifyContent={'space-evenly'}>
                    <Button onClick={onClose} colorScheme={'cyan'} >
                        <Link to={'/login'}>Log In</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme={'cyan'} variant={'outline'}>
                        <Link to={'/signup'}>Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header