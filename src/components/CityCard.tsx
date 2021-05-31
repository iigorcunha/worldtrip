import { Flex, Box, Text, Image } from '@chakra-ui/react';

interface CityCardProps {
  photo_url: string;
  flag_url: string;
  city: string;
  country: string;
}


export function CityCard({photo_url, flag_url, city, country}: CityCardProps) {
  return(
    <Box borderRadius={4}>
      <Image src={photo_url} />
       <Flex 
        borderBottomLeftRadius={4} 
        borderBottomRightRadius={4} 
        borderLeft="1px" 
        borderRight="1px" 
        borderBottom="1px" 
        justify="space-between"
        pt="5" 
        pr="6" 
        pl="6" 
        pb="6" 
        borderColor="orange.300">
         <Flex flexDir="column" align="flex-start">
            <Text color="gray.600" fontWeight="600" fontSize="xl">{city}</Text>
            <Text color="gray.300" fontWeight="500" fontSize="lg">{country}</Text>
          </Flex>
        <Image src={flag_url} />
      </Flex>
   </Box>
  )
}