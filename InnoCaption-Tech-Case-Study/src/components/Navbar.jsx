import { Flex, Heading, Spacer } from "@chakra-ui/react";
import CartDrawer from "./CartDrawer";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <Flex as="nav" p="15px" alignItems="center" position="fixed" w="100%" zIndex="10" bg="#1b4965">
      <Link to="/">
        <Heading color="white" as="h1">InnoBuy</Heading>
      </Link>

      <Spacer />

      <CartDrawer />
    </Flex>

  </>
  )
}