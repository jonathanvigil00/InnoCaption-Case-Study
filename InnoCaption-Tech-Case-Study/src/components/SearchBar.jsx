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
            console.log(data.products);
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
        />
        <Button onClick={fetchData}>Search</Button>
        </HStack>
 );
}