import { Flex, Heading, Icon, Link } from '@chakra-ui/react';

import { FiHome } from 'react-icons/fi';

export default function dashboard() {
  return (
    <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
      <Flex
        w="15%"
        flexDir="column"
        alignItems="center"
        backgroundColor="#020202"
        color="#fff"
      >
        <Flex flexDir="column" justifyContent="space-between">
          <Flex flexDir="column" as="nav">
            <Heading
              mt={50}
              mb={100}
              fontSize="4xl"
              alignSelf="center"
              letterSpacing="tight"
            >
              Rise.
            </Heading>
            <Flex flexDir="column" align="flex-start" justifyContent="center">
              <Flex className="sidebar-items">
                <Link href="/">
                  <Icon as={FiHome} fontSize="2xl" />
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex></Flex>
      <Flex></Flex>
    </Flex>
  );
}
