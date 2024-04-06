import { HStack, Input, Button } from "@chakra-ui/react";
import {SearchIcon} from '@chakra-ui/icons'; 
import { useState } from 'react';

export default function SearchBar({ setProducts }){
    const [searchTerm, setSearchTerm] = useState('');
   
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
     };

    const fetchData = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}&limit=10`); //query={searchTerm} &skip=10&select=title,price
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    }

    return(
        <HStack p="15px">
        <SearchIcon />
        <Input
            placeholder="Search for product"
            value={searchTerm}
            onChange={handleInputChange}
            borderColor="#5fa8d3"
            borderWidth="2px"
        />
        <Button 
            bg="#1b4965" 
            color="#Cae9ff" 
            onClick={fetchData}
            _hover={{bg: "#1a3d52"}}
            >Search</Button>
        </HStack>
 );
}