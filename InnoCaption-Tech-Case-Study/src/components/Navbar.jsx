import { Flex, Heading, Spacer } from "@chakra-ui/react";
import CartDrawer from "./CartDrawer";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <>
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">InnoBuy</Heading>
      <Spacer />
      <CartDrawer />
    </Flex>

    <SearchBar />
  </>
  )
}