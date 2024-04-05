import { Box, Button, Image, Text, Center } from '@chakra-ui/react';
import { useCart } from '../context/CartContext';


export const ProductItem = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <Box p={4} borderWidth="1px" borderRadius="lg" textAlign="center" overflow="hidden">
            <Text fontSize="xl" fontWeight="bold">{product.title}</Text>
            <Center>
                <Image src={product.thumbnail} alt={`${product.title} image`} boxSize="200px" objectFit="cover" mt={4} />
            </Center>
            <Text fontSize="medium">${product.price}</Text>
            <Button onClick={()=>addToCart(product)}>Add to Cart</Button>
        </Box>
    );
};

