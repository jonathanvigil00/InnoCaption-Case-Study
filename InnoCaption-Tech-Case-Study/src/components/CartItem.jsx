import { Box, Image, Text, Button, Flex, Spacer } from '@chakra-ui/react';


const CartItem = ({ item, updateQuantity, removeItem }) => {
    const totalPrice = item.price * item.quantity;

    return (
        <Box className="cart-item" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" w="full">
            <Flex align="center">
            <Image src={item.images[0]} alt={item.title} boxSize="50px" objectFit="cover" mr={4} />
            <Box flex="1">
                <Text fontSize="md" fontWeight="bold">{item.title}</Text>
                <Text fontSize="sm">Quantity: {item.quantity}</Text>
                <Text fontSize="sm">Price: ${totalPrice.toFixed(2)}</Text>
            </Box>
            <Spacer />
            <Flex direction="column" align="center">
                <Button size="xs" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                <Text mx={2}>{item.quantity}</Text>
                <Button size="xs" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                <Button colorScheme="red" size="xs" onClick={() => removeItem(item.id)} mt={2}>Remove</Button>
            </Flex>
            </Flex>
        </Box>
    );
   };
   export default CartItem;
