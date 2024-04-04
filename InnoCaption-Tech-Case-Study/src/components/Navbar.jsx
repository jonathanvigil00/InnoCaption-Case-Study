import { Flex, Heading, Spacer } from "@chakra-ui/react";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  return (
    <>
    <Flex as="nav" p="15px" alignItems="center" position="fixed" w="100%" zIndex="10">
      <Heading as="h1">InnoBuy</Heading>
      <Spacer />
      <CartDrawer />
    </Flex>

  </>
  )
}