import { Box, Icon } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const ShoppingCartIcon = ({ itemCount, func }) => {
    return (
        <Box
          as="button"
          aria-label="Shopping cart"
          onClick={func}
          position="relative"
          boxSize="4rem"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          bg="transparent"
          border="none"
          _hover={{ bg: "gray.200" }}
          _active={{ bg: "gray.300" }}
        >
          <Icon color="white" as={FaShoppingCart} boxSize={'3em'}/>
          <Box
            position="absolute"
            top="4px"
            right="2px"
            fontSize="0.8rem"
            bgColor="red.600"
            borderRadius="full"
            zIndex={11}
            color="white"
            p="1px"
            w="1.5em"
            h="1.7em"
          >
            {itemCount}
          </Box>
        </Box>
     );
};

export default ShoppingCartIcon;
