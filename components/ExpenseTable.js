import {
  Avatar,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';

const ExpenseTable = ({ display }) => {
  return (
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

        {display && (
          <>
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
          </>
        )}
      </Tbody>
    </Table>
  );
};

export default ExpenseTable;
