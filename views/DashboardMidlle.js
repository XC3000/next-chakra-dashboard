import React, { useState } from 'react';

import { Divider, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import { FiCalendar, FiChevronDown, FiChevronUp } from 'react-icons/fi';

import ExpenseTable from '../components/ExpenseTable';
import MyChart from '../components/MyChart';

const DashboardMidlle = () => {
  const [display, setDisplay] = useState(false);

  return (
    <>
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
          <ExpenseTable display={display} />
        </Flex>
        <Flex align="center">
          <Divider />
          <IconButton
            onClick={() => setDisplay(!display)}
            icon={display ? <FiChevronUp /> : <FiChevronDown />}
          />
          <Divider />
        </Flex>
      </Flex>
    </>
  );
};

export default DashboardMidlle;
