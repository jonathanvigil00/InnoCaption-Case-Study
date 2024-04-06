import { Container, Button, Image, VStack, HStack, Text, Grid } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import Rating from "../components/Rating";
import { useCart } from '../context/CartContext';
import BackButton from "../components/BackButton";
import { ProductItem } from "../layouts/product";

export default function ProductPage(){
    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart, recentItems } = useCart();
    const product = location.state.product;
    console.log(recentItems);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <>
        <BackButton onClick={handleBack} />
        <Container  mt={{ base: 4, md: 10 }} p={{ base: 2, md: 4 }} alignItems="center" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <VStack spacing={4} align="start">
            <Text fontSize="xl" fontWeight="bold">{product.title}</Text>
            <HStack>
              <Rating value={product.rating} max={5} />
              <Text>{product.rating.toFixed(1)}</Text>
            </HStack>
            <HStack spacing={4} size={{base: 'md', md: 'lg'}} overflowX="scroll">
              {product.images.map((image, index) => (
                <Image
                    px={4}
                    key={index} 
                    src={image} 
                    alt={`Product Image ${index + 1}`} 
                    boxSize={{ base: "75px", md: "200px", lg: "300px" }} 
                    objectFit="cover"
                />
              ))}
            </HStack>
            <Text fontSize="lg" fontWeight="bold">${product.price}</Text>
            <Text>{product.description}</Text>
            <Text fontSize="md">Brand: {product.brand}</Text>
            <Button onClick={()=>addToCart(product)}>Add to Cart</Button>

          </VStack>
        </Container>
        {recentItems.length > 1 && (<Container my={10}>
          <Text>Recently Viewed</Text>
          <Grid p={3} templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={5}>
          {recentItems.map(otherProduct => (
             product.id !== otherProduct.id && (
              <ProductItem key={otherProduct.id} product={otherProduct} />
           )
          ))}
          </Grid>
        </Container>
        )}
        </>
     );
}