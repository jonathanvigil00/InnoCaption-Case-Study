import { useRef } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Box,
    Input,
    useDisclosure,
    Text
  } from '@chakra-ui/react';

  export default function CartDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <>
        {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button> */}

        <Box p="10px" as="button" onClick={onOpen}>
          <center>
            <FaShoppingCart />
            <Text>Cart</Text>
          </center>
        </Box>

        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Shopping Cart</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }