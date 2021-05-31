import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface HighlightsProps {
  image_url: string;
  children: ReactNode;
  isWideVersion: boolean;
}

export function Highlights({image_url, children, isWideVersion}: HighlightsProps) {
  return (
    <Flex flexDir={["row", "row", "column"]} align="center" p={["6", "6", "8"]}>
       {isWideVersion ? (<Image src={image_url} mb="6" />) : <Box h="8px" w="8px" borderRadius="full" mr="8px" bg="orange.300"/>}
       <Text fontSize="2xl" fontWeight="600">{children}</Text>
    </Flex>
  )
}