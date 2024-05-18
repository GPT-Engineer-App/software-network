import { Box, Button, Container, Flex, Heading, Icon, Image, Link, Spacer, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaAngleDown, FaBuilding, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Flex alignItems="center" mb={4}>
        <Image src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3MTYwNTY3MDR8MA&ixlib=rb-4.0.3&q=80&w=1080" w={8} mr={2} />
        <Heading size="lg">Company Name</Heading>
      </Flex>
      <Stack spacing={4}>
        <Box bg={useColorModeValue("gray.100", "gray.700")} p={4} borderRadius="md">
          <Flex alignItems="center">
            <Icon as={FaBuilding} mr={2} />
            <Heading size="sm">Headquarters</Heading>
          </Flex>
          <Text>123 Main St</Text>
          <Text>Anytown, USA</Text>
        </Box>
        <Box bg={useColorModeValue("gray.100", "gray.700")} p={4} borderRadius="md">
          <Flex alignItems="center">
            <Icon as={FaUsers} mr={2} />
            <Heading size="sm">Employees</Heading>
          </Flex>
          <Text>500+</Text>
        </Box>
        <Box bg={useColorModeValue("gray.100", "gray.700")} p={4} borderRadius="md">
          <Flex alignItems="center">
            <Icon as={FaAngleDown} mr={2} />
            <Heading size="sm">Departments</Heading>
          </Flex>
          <Link href="#">Engineering</Link>
          <Link href="#">Marketing</Link>
          <Link href="#">Sales</Link>
          <Link href="#">Human Resources</Link>
        </Box>
      </Stack>
      <Button colorScheme="blue" size="lg" mt={4}>
        Join Our Team
      </Button>
    </Container>
  );
};

export default Index;
