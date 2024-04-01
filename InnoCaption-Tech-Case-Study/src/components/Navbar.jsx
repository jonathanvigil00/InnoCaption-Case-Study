import { Flex, HStack, Heading, Spacer, Box, Text, Input } from "@chakra-ui/react";
import {SearchIcon} from '@chakra-ui/icons'
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">InnoBuy</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Box p="10px" as="button" onClick={()=>console.log("clicked")}>
          <center>
            <FaShoppingCart />
            <Text>Cart</Text>
          </center>
        </Box>
      </HStack>

    </Flex>

    <HStack p="10px">
      <SearchIcon />
      <Input placeholder="Search for product" />
    </HStack>
  </>
  )
}