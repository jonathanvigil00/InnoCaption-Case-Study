import { Box, Icon } from '@chakra-ui/react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Rating = ({ value }) => {
 const fullStars = Math.floor(value);
 const halfStars = value % 1 !== 0 ? 1 : 0;
 const emptyStars = 5 - fullStars - halfStars;

 return (
    <Box>
      {[...Array(fullStars)].map((_, index) => (
        <Icon as={FaStar} key={index} color="yellow.500" />
      ))}
      {[...Array(halfStars)].map((_, index) => (
        <Icon as={FaStarHalfAlt} key={index + fullStars} color="yellow.500" />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <Icon as={FaStar} key={index + fullStars + halfStars} color="gray.300" />
      ))}
    </Box>
 );
};

export default Rating;
