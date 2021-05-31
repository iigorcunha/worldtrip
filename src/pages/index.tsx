import { Box, Flex, Image, Text, Stack, Divider, useBreakpointValue,IconButton, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FiChevronLeft, FiChevronRight, FiCircle } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa';
import { Header } from '../components/Header';
import { Highlights } from '../components/Highlights';

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  })
  
  return (
   <Flex vh="100vh" flexDir="column" align="center">
     <Header />
     <Flex 
      w="100%" 
      h={335} 
      bgImage="url('/images/home-bg.svg')" 
      bgRepeat="no-repeat" 
      bgSize="cover"
      align="center"
      justify="center"
      color="gray.50"
      >
      <Stack w="100%" h="100%" position="relative" direction="row" maxW={1120} align="center" justify="space-between" >
        <Stack direction="column" spacing="8" w={["100%", "100%", "45%"]} p={["6", "6", "8"]}>
          <Text fontSize={["2xl","2xl", "4xl"]} fontWeight="medium">5 Continentes, infinitas possibilidades.</Text>
          <Text fontSize={["md", "md", "xl" ]}>Chegou a hora de tirar do papel a viagem que voce sempre sonhou.</Text>
        </Stack>
       {isWideVersion && (
          <Box bottom="-40px" right="0" position="absolute">
           <Image  src="/images/airplane.svg" alt="airplane" />
          </Box>
       )}
      </Stack>
     </Flex>
     <Flex flexDir="column" w="100%" maxW={1120} mt="28" mb="14" align="center" justify="space-around">
        <Flex w="100%" align="center" justify="space-around" flexWrap="wrap">
          <Highlights isWideVersion={isWideVersion} image_url="/images/cocktail.svg">vida noturna</Highlights>
          <Highlights isWideVersion={isWideVersion} image_url="/images/beach.svg">praia</Highlights>
          <Highlights isWideVersion={isWideVersion} image_url="/images/building.svg">moderno</Highlights>
          <Highlights isWideVersion={isWideVersion} image_url="/images/museum.svg">classico</Highlights>
          <Highlights isWideVersion={isWideVersion} image_url="/images/earth.svg">e mais...</Highlights>
        </Flex>
        <Divider mt="20" mb="12" w={90} border="2px" borderColor="gray.600" />
        <Stack align="center" p={["2", "4", "6"]}>
          <Text fontSize={["2xl", "2xl" ,"4xl"]}>Vamos nessa? </Text>
          <Text fontSize={["2xl", "2xl" ,"4xl"]}>Então escolha seu continente</Text>
        </Stack>
      </Flex>
      <Flex position="relative" justify="space-between" align="center" h={450} mb="14" width="100%" maxW={1120} bgImage="url('/images/europe.png')">
      <IconButton _focus={{ borderColor: 'transparent'}} ml="2" h={["40px", "40px", "60px"]} w={["40px", "40px", "60px"]} variant="unstyled" color="orange.300" aria-label="Left arrow" icon={<FiChevronLeft size={isWideVersion ? 60 : 40} strokeWidth="0.5" />} />
        <Flex flexDir="column" align="center" justify="space-between">
          <NextLink href="/trip/europe" passHref>
            <Link align="center" justify="center">
              <Text fontSize={["2xl", "2xl" ,"4xl"]} fontWeight="600" color="white">Europa</Text>
              <Text fontSize={["l", "l" ,"2xl"]} color="white">O continente mais antigo.</Text>
            </Link>
          </NextLink>

          <Stack direction="row" position="absolute" bottom="4">
            <Box as="button" h={["8px", "8px", "16px"]} w={["8px", "8px", "16px"]} bg="orange.300" borderRadius="full"/>
            <Box as="button" h={["8px", "8px", "16px"]} w={["8px", "8px", "16px"]} bg="gray.300" borderRadius="full"/>
            <Box as="button" h={["8px", "8px", "16px"]} w={["8px", "8px", "16px"]} bg="gray.300" borderRadius="full"/>
            <Box as="button" h={["8px", "8px", "16px"]} w={["8px", "8px", "16px"]} bg="gray.300" borderRadius="full"/>
            <Box as="button" h={["8px", "8px", "16px"]} w={["8px", "8px", "16px"]} bg="gray.300" borderRadius="full"/>
          </Stack>
        </Flex>
        <IconButton _focus={{ borderColor: 'transparent'}} mr="2" h={["40px", "40px", "60px"]} w={["40px", "40px", "60px"]} variant="unstyled" color="orange.300" aria-label="Right arrow" icon={<FiChevronRight size={isWideVersion ? 60 : 40} strokeWidth="0.5" />} />
      </Flex>
   </Flex>
  )
}
