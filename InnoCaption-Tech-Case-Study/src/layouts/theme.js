import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
 colors: {
    brand: {
      500: "#1b4965",
    },
 },
 fonts: {
    heading: "Arial, sans-serif",
    body: "Arial, sans-serif",
 },
 components: {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
      color: "blue"
    },
    sizes: {
      xl: {
        h: '56px',
        fontSize: 'lg',
        px: '32px',
      },
    },
  },
},
 styles: {
    global: {
      body: {
        color: "gray.800",
      },
    },
 },
});

export default theme;
