import { Heading, Stack, VStack,Text, Button } from '@chakra-ui/react'
import { useState ,React} from 'react'
const Video = () => {
    const vidArr=['https://player.vimeo.com/external/328948305.sd.mp4?s=16548c00b5f3ece8668e12932c62d22bfd642d6c&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/377069687.sd.mp4?s=fcffa23955d984bc7107363a7fe01f115084c658&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/372770545.sd.mp4?s=0fef64842d0ce6cadb26bb5305cbc1e2ae4b5d97&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/328920122.sd.mp4?s=d3fcc4e3ec81fcdedc5a4553a679d4eeeaa5181f&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/189545487.sd.mp4?s=8cd2af1ec08f7ce121a5a6a09c78c05237943524&profile_id=164&oauth2_token_id=57447761'];
    const[videoSrc,setVideoSrc]=useState(vidArr[0]);
  return (
    <>
    <Stack direction={['column','row']} h={'100vh'}>
        <VStack w={'full'}>
            <video
             src={videoSrc} 
             controls
             controlsList='nodownload'
             style={{
             width:"100%",
            }} ></video>
            <VStack alignItems={'flex-start'} p={'8'} width={'full'} overflowY={'auto'}>
                <Heading>Sample Video 1</Heading>
                <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor asperiores consequatur dicta minus vel dolorem corporis similique impedit? Quam animi modi fugiat dolorum ea ad quas libero officia velit!</Text>
            </VStack>
        </VStack>
        <VStack w={['full','xl']} alignItems='stretch' p='8' spacing={'8'} overflowY='auto'>
            {
                vidArr.map((item,index)=>(<Button onClick={()=>{setVideoSrc(item)}} variant={'ghost'} colorScheme={'cyan'}>Video {index+1}</Button>))
            }
        </VStack>

    </Stack>
    </>
  )
}

export default Video