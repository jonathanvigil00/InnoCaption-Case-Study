import { useRef, useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import CartItem from './CartItem.jsx';
import { Spinner } from '@chakra-ui/react';
import ShoppingCartIcon from './ShoppingCartIcon.jsx';
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
    useDisclosure,
    Text,
    VStack,
  } from '@chakra-ui/react';

export default function CartDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const { 
    cartItems, 
    removeFromCart, 
    clearCart, 
    updateCartItemQuantity, 
    getCartTotal, 
    checkout 
  } = useCart();

  const [isLoading, setLoading] = useState(false)

  const updateQuantity = (itemId, quantity) => {
    updateCartItemQuantity(itemId, quantity);
  };

  const handleCheckout = () => {
    setLoading(true);

    setTimeout(() => {
      checkout();
      setLoading(false);

    }, 2000);
  }

  return (
    <>
      <ShoppingCartIcon itemCount={cartItems.length} func={onOpen} />

      <Drawer
        size={'md'}
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
            <VStack>
              { isLoading ? (
                  <Spinner />
              ) : cartItems.length === 0 ? (
                  <Text>No Items in Cart</Text>
              ) : (
                  cartItems.map(item => (
                    <CartItem
                      key={item.id}
                      item={item}
                      updateQuantity={updateQuantity}
                      removeItem={removeFromCart}
                    />
              )))}

            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Box pr={10}>
              <Text fontSize={'2xl'}>Total: ${getCartTotal()}</Text>
            </Box>

            <Button colorScheme='red' onClick={()=>clearCart()} variant='outline' mr={3} >
              Clear Cart
            </Button>

            <Button onClick={()=>handleCheckout()} colorScheme='blue'>Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
