import { Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import DashboardMidlle from '../views/DashboardMidlle';
import DashboardPayment from '../views/DashboardPayment';

export default function dashboard() {
  return (
    <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
      {/* Column 1 */}
      <Flex
        w="15%"
        flexDir="column"
        alignItems="center"
        backgroundColor="#020202"
        color="#fff"
      >
        <Sidebar />
      </Flex>
      {/* Column 2 */}
      <Flex w="55%" p="3%" flexDir="column" overflow="auto" minH="100vh">
        <DashboardMidlle />
      </Flex>
      {/* Column 3 */}
      <Flex w="35%" p="3%" flexDir="column" overflow="auto" bgColor="#f5f5f5">
        <DashboardPayment />
      </Flex>
    </Flex>
  );
}
