import { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';

const BackToTop = () => {
 const [isVisible, setIsVisible] = useState(false);

 const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
 };

 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
 };

 useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
 }, []);

 return (
    <div>
      {isVisible && (
        <Button onClick={scrollToTop} position="fixed" bottom="30px" right="30px" zIndex="10">
          Back to top
        </Button>
      )}
    </div>
 );
};

export default BackToTop;
