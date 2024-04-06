import { IconButton } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = ({ onClick }) => (
  <IconButton
    aria-label="Back"
    icon={<FaArrowLeft />}
    onClick={onClick}
    position="fixed"
    ml={8}
    mt={8}
    zIndex="20"
  />
);

export default BackButton;