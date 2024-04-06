import { Box, Button, Image, Text, Center } from '@chakra-ui/react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';


export const ProductItem = ({ product }) => {
    const { addToCart, viewed } = useCart();
    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate(`/products/${product.id}`, {state: 
            {product: product}
            });
    };

    return (
        <Box 
            p={4} 
            borderWidth="1px" 
            borderRadius="lg" 
            textAlign="center" 
            overflow="hidden"
            onClick={()=>{handleNavigate(); viewed(product);}}
            cursor="pointer"
        >
            <Text fontSize="xl" fontWeight="bold">{product.title}</Text>
            <Center>
                <Image src={product.thumbnail} alt={`${product.title} image`} boxSize="200px" objectFit="cover" mt={4} />
            </Center>
            <Text fontSize="medium">${product.price}</Text>
            <Button onClick={(e)=>{
                            e.stopPropagation(); 
                            addToCart(product);
                            }}
            >Add to Cart</Button>
        </Box>
    );
};

