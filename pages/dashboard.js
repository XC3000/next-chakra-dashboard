import { Avatar, Flex, Heading, Icon, Link, Text } from '@chakra-ui/react';
import { FiBox, FiDollarSign, FiHome, FiPieChart } from 'react-icons/fi';

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
        <Flex flexDir="column" justifyContent="space-between" h="100vh">
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
                <Link>
                  <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                </Link>
                <Link
                  _hover={{
                    textDecor: 'none',
                  }}
                >
                  <Text className="active">Home</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FiPieChart} fontSize="2xl" />
                </Link>
                <Link
                  _hover={{
                    textDecor: 'none',
                  }}
                >
                  <Text>Credit</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FiDollarSign} fontSize="2xl" />
                </Link>
                <Link
                  _hover={{
                    textDecor: 'none',
                  }}
                >
                  <Text>Wallet</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FiBox} fontSize="2xl" />
                </Link>
                <Link
                  _hover={{
                    textDecor: 'none',
                  }}
                >
                  <Text>Services</Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
            <Avatar my={2} src="avatar-1.jpg" />
            <Text textAlign="center">Calvin West</Text>
          </Flex>
        </Flex>
      </Flex>
      {/* Column 2 */}
      <Flex w="55%" p="3%" flexDir="column" overflow="auto" minH="100vh">
        <Heading fontWeight="normal" mb={4} letterSpacing="tight">
          Welcome back,
          <Flex fontWeight="bold" display="inline-flex">
            Calvin
          </Flex>
        </Heading>
        <Text color="grey" fontSize="sm">
          My Balance
        </Text>
        <Text fontBold="bold" fontSize="sm">
          $5,750.20
        </Text>
      </Flex>
      {/* Column 3 */}
      <Flex
        w="35%"
        p="3%"
        flexDir="column"
        overflow="auto"
        bgColor="#f5f5f5"
      ></Flex>
    </Flex>
  );
}
