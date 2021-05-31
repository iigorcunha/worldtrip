import { Flex, Image } from '@chakra-ui/react';

export function Header()  {
  return (
    <Flex as="header" w="100%" align="center" justify="center" h={100}>
      <Image src="/images/logo.svg" />
    </Flex>
  )
}