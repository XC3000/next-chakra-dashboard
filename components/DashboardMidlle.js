import React from 'react';

import {
  Avatar,
  Flex,
  Heading,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { FiCalendar } from 'react-icons/fi';

import MyChart from './MyChart';

const DashboardMidlle = () => {
  return (
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
      <Text fontWeight="bold" fontSize="sm">
        $5,750.20
      </Text>
      <MyChart />
      <Flex justifyContent="space-between" mt={8}>
        <Flex align="flex-end">
          <Heading as="h2" size="lg" letterSpacing="tight">
            Transactions
          </Heading>
          <Text fontSize="small" color="grey" ml={4}>
            Apr 2021
          </Text>
        </Flex>
        <IconButton aria-label="Open Calender" icon={<FiCalendar />} />
      </Flex>
      <Flex flexDir="column">
        <Flex overflow="auto">
          <Table variant="unstyled" mt={4}>
            <Thead>
              <Tr color="grey">
                <Th>Name of transactions</Th>
                <Th>Category</Th>
                <Th isNumeric>Cashback</Th>
                <Th isNumeric>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Flex align="center">
                    <Avatar size="sm" mr={2} src="amazon.jpeg" />
                    <Flex flexDir="column">
                      <Heading size="sm" letterSpacing="tight">
                        Amazon
                      </Heading>
                      <Text fontSize="sm" color="grey">
                        Apr 24, 2021 at 1:40pm
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Th>Electronic Devices</Th>
                <Th isNumeric>+2$</Th>
                <Th isNumeric>
                  <Text fontWeight="bold" display="inline-table">
                    -$242
                  </Text>
                  .00
                </Th>
              </Tr>

              <Tr>
                <Td>
                  <Flex align="center">
                    <Avatar size="sm" mr={2} src="starbucks.png" />
                    <Flex flexDir="column">
                      <Heading size="sm" letterSpacing="tight">
                        Amazon
                      </Heading>
                      <Text fontSize="sm" color="grey">
                        Apr 24, 2021 at 1:40pm
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Th>Electronic Devices</Th>
                <Th isNumeric>+2$</Th>
                <Th isNumeric>
                  <Text fontWeight="bold" display="inline-table">
                    -$242
                  </Text>
                  .00
                </Th>
              </Tr>

              <Tr>
                <Td>
                  <Flex align="center">
                    <Avatar size="sm" mr={2} src="youtube.png" />
                    <Flex flexDir="column">
                      <Heading size="sm" letterSpacing="tight">
                        Amazon
                      </Heading>
                      <Text fontSize="sm" color="grey">
                        Apr 24, 2021 at 1:40pm
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Th>Electronic Devices</Th>
                <Th isNumeric>+2$</Th>
                <Th isNumeric>
                  <Text fontWeight="bold" display="inline-table">
                    -$242
                  </Text>
                  .00
                </Th>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardMidlle;
