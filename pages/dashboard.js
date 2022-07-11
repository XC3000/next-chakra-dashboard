import { Flex } from '@chakra-ui/react';
import DashboardMidlle from '../components/DashboardMidlle';
import Sidebar from '../components/Sidebar';

export default function dashboard() {
  return (
    <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
      {/* Column 1 */}
      <Sidebar />
      {/* Column 2 */}
      <DashboardMidlle />
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
