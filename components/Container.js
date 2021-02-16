import { Box, Container as ContentContainer } from '@chakra-ui/react';
import Nav from '@/components/Nav';
import Head from 'next/head';

const Container = ({ children }) => {
  return (
    <ContentContainer
      maxW="95%"
      height="100vh"
      flex={1}
      justifyContent="space-between"
      flexDirection="column"
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Everledger Diamond uploader</title>
      </Head>
      <Nav />
      <Box
        display="flex"
        flex={1}
        alignItems={['center', 'flex-start']}
        h="calc(100% - 6rem)"
        justifyContent="center"
        flexDirection="column"
      >
        {children}
      </Box>
    </ContentContainer>
  );
};

export default Container;
