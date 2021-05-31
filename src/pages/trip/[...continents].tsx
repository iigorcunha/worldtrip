import { Flex, Box, Text, VStack, Heading, Image, Stack, SimpleGrid, useBreakpointValue, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { CityCard } from '../../components/CityCard';
import { Header } from '../../components/Header';

export default function Continents() {
  const { query } = useRouter();
  const { pid } = query;

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  })
  return (
    <Box w="100%" h="100vh" align="center" justify="center">
      <Header />
      <Box
        h={["30%", "30%", "50%"]}
        w="100%"
        bgImage="url(/images/europe-banner.png)"
        bgRepeat="no-repeat" 
        bgSize="cover"
        bgPosition="center"
        align="center"
        justify="center"
        >
        <Flex maxW={1120} h="100%" pl={isWideVersion ? "8" : null} align={isWideVersion ? 'flex-end' : 'center'} justify={isWideVersion ? 'flex-start' : 'center'}>
          <Text fontWeight="600" fontSize={["3xl","3xl","5xl"]} color="white" mb="14">Europa</Text>
        </Flex>
      </Box>
      <Flex mt="20" flexDir={isWideVersion ? 'row' : 'column'} maxW={1120} align="center" justify="space-between" >
        <Text color="gray.600" textAlign="justify" maxW={["100%", "100%", "50%"]} fontSize={["sm","sm","2xl"]} p={["6", "6", "8"]}>
            A Europa é, por convenção, um dos seis continentes do mundo. 
            Compreendendo a península ocidental da Eurásia, a Europa geralmente 
            divide-se da Ásia a leste pela divisória de águas dos montes Urais, 
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <HStack spacing="6" justify="center" align="space-between" p={["6", "6", "8"]}>
        <Flex flexDir="column" align="flex-start">
          <Text color="orange.300" fontSize={["2xl", "2xl", "5xl"]} fontWeight="600">50</Text>
          <Text color="gray.600" fontSize={["xl", "xl", "2xl"]} fontWeight={["400", "400", "600"]} >países</Text>
        </Flex>
        <Flex flexDir="column" align="flex-start">
          <Text color="orange.300" fontSize={["2xl", "2xl", "5xl"]} fontWeight="600">60</Text>
          <Text color="gray.600" fontSize={["xl", "xl", "2xl"]} fontWeight={["400", "400", "600"]} >línguas</Text>
        </Flex>
        <Flex flexDir="column" align="flex-start">
          <Text color="orange.300" fontSize={["2xl", "2xl", "5xl"]} fontWeight="600">27</Text>
          <Text color="gray.600" fontSize={["xl", "xl", "2xl"]} fontWeight={["400", "400", "600"]}>cidades +100 </Text>
        </Flex>
        </HStack>
      </Flex>
      <Flex 
        mt="20" 
        marginBottom="20" 
        maxW={1120} flexDir="column" 
        justify={isWideVersion ? 'flex-start' : 'center'} 
        align={isWideVersion ? 'flex-start' : 'center'}>
        <Heading alignSelf="flex-start" fontWeight={["500", "500", "700"]} mb={20}>Cidades +100</Heading>
        <SimpleGrid mb="20" columns={[1, 4]} spacing={7}>
          <CityCard 
            photo_url="/images/uk-photo.png" 
            flag_url="/images/uk.svg" 
            city="Londres" 
            country="Reino Unido" />
          <CityCard 
            photo_url="/images/paris-photo.png" 
            flag_url="/images/fr.svg" 
            city="Paris" 
            country="França" />
            <CityCard 
            photo_url="/images/rome-photo.png" 
            flag_url="/images/it.svg" 
            city="Roma" 
            country="Itália" />
            <CityCard 
            photo_url="/images/praga-photo.png" 
            flag_url="/images/rc.svg" 
            city="Praga" 
            country="República Tcheca" />
            <CityCard 
            photo_url="/images/rome-photo.png" 
            flag_url="/images/it.svg" 
            city="Roma" 
            country="Itália" />
        </SimpleGrid>
      </Flex>
    </Box>
  )
}