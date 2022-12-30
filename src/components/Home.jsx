import { Box,Container,Heading,Image,Stack ,Text} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/trek.jpg';
const headingProps = {
  pos:"absolute",
  top:"50%",
  left:"50%",
  transform:"translate(-50%,-50%)",
  textTransform:"uppercase",
  p:'4',
  size:'2xl'
}
const Home = () => {
  return (
    <Box>
      <MyCarousel/>
      <Container minH={'100vh'}  maxW={'container.xl'}p={'16'} >
       <Heading py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>My Experience</Heading>
       <Stack h='full'  p={['1.5','4']} alignItems={'center'} direction={["column","row"]} marginTop='4' >
         <Image src={img1} h={["40","400"]} borderRadius={'15'}/>
         <Text px={['0','6']} letterSpacing={'wider'}lineHeight={'190%'} textAlign={'center'} marginLeft={['0','7']}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, perferendis quo. Culpa debitis sed, totam ea omnis sit, corrupti tempora nostrum fuga ipsam impedit sequi, quo quisquam aperiam dolor! Doloremque, harum unde explicabo laborum aspernatur animi itaque eius quasi est exercitationem! Obcaecati necessitatibus quia repellat quam non similique, voluptate corrupti accusantium blanditiis asperiores, modi tenetur doloremque adipisci veritatis impedit ut aperiam tempora nemo ad nulla culpa doloribus eaque numquam! Fugit cupiditate odio laboriosam libero similique eveniet est esse deserunt molestiae modi tempora at, quas animi praesentium. Nulla voluptas consequuntur praesentium in illum! Consequuntur deleniti voluptates error id laborum fugit ex molestiae accusantium tempore vitae, eum non ipsa quia distinctio maiores! Voluptatem soluta non nisi provident veritatis obcaecati quis beatae et odit rerum odio autem amet culpa eum, ad a repellendus ab ipsum quas nulla error possimus sunt sed adipisci! Ad ut minus eaque reprehenderit provident repudiandae nesciunt sint nobis, porro nulla quaerat quod! Voluptatem officiis ex incidunt eius quaerat commodi consectetur, itaque molestiae cumque esse, autem delectus magni modi minima veritatis porro quasi animi nam. Iusto fugiat accusamus quidem ipsum cum aliquid itaque totam dolore blanditiis quis? Et numquam fugiat illo dolorem quam aperiam eum, praesentium adipisci sed alias laborum.</Text>
       </Stack>
      </Container>
    </Box>
  )
}

const MyCarousel=()=>{
  return (
    <Carousel autoPlay infiniteLoop interval={2000} showStatus={false} showArrows={false} showThumbs={false}>
      <Box>
        <Image src={'https://images.unsplash.com/photo-1506749531272-2f6810e097c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80'} />
        <Heading bgColor={'blackAlpha.600'} color={'white'}{...headingProps}>Watch The Future</Heading>
      </Box>
      <Box>
        <Image src={'https://images.unsplash.com/photo-1545652985-5edd365b12eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingProps}>Trekking Gives you Mental peace</Heading>
      </Box>
      <Box>
        <Image src={'https://images.unsplash.com/photo-1523341139367-9de570b874ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'} />
        <Heading bgColor={'blackAlpha.600'} color={'white'}{...headingProps}>Enhance Bond with mother nature</Heading>
      </Box>
      <Box>
        <Image src={'https://images.unsplash.com/photo-1520982184827-6950930eaf2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2304&q=80'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingProps}>build endurance</Heading>
      </Box>

    </Carousel>
  );
}

export default Home