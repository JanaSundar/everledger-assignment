import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/utils/index';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS {...{ theme }}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
