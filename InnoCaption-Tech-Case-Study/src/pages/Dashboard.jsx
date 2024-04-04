import { useState } from 'react';
import { Grid, Button, Flex, Box } from '@chakra-ui/react';
import SearchBar from "../components/SearchBar";
import BackToTop from '../components/BackToTop';
import { ProductItem } from "../layouts/product";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ]
  const handleClick = (category) => {
    if (selectedCategory === category){
      setSelectedCategory(null);
    } else{
      setSelectedCategory(category);
    }
  };

  const handleApply = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/category/${selectedCategory}`); //&limit=10
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
  };
    return (
      <>
        <BackToTop />
        <SearchBar setProducts={setProducts}/>
        <Box p={'15px'} fontSize={'25px'}>Filter by Category</Box>

        <Grid p={3} templateColumns="repeat(auto-fill, minmax(120px, 1fr))" gap={1.5}>
          {categories.map(category => (
            <Button 
              fontSize="sm"
              key={category}
              borderRadius="full"
              size="sm"
              bg={selectedCategory === category ? 'blue.500' : 'gray.100'}
              color={selectedCategory === category ? 'white' : 'black'}
              onClick={() => handleClick(category)}
            >
              {category}
            </Button>
          ))}
        </Grid>

        <Flex px={3} justifyContent="flex-end" width="100%">
          <Button onClick={() => handleApply()} height="30px" colorScheme='blue'>Apply</Button>
        </Flex>
        
        <Grid p={3} templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={2}>
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Grid>
      </>
    )
  }