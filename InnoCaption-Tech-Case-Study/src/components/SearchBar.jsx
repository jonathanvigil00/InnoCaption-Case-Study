import { HStack, Input, Button } from "@chakra-ui/react";
import {SearchIcon} from '@chakra-ui/icons'; 
import { useState, useEffect } from 'react';

export default function SearchBar(){
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
   
    // Function to handle the search input change
    const handleInputChange = (event) => {
       setSearchTerm(event.target.value);
       console.log(searchTerm);
    };
   
    // Function to perform the API call
    useEffect(() => {
       const fetchData = async () => {
         if (searchTerm) {
           try {
             const response = await fetch(`YOUR_API_ENDPOINT?query=${searchTerm}`);
             const data = await response.json();
             setSearchResults(data);
           } catch (error) {
             console.error('Error fetching data: ', error);
           }
         }
       };
   
       fetchData();
    }, [searchTerm]);

    return(
        <HStack p="10px">
        <SearchIcon />
        <Input
            placeholder="Search for product"
            // value={searchTerm}
            // onChange={handleInputChange}
        />
        <Button onClick={handleInputChange}>Search</Button>
        </HStack>
 );
}