import { Button, Heading, Text } from '@chakra-ui/react';
import Container from '@/components/Container';
import { useRouter } from 'next/router';

export default function Home() {
  const Router = useRouter();
  return (
    <Container>
      <Heading
        as="h1"
        size="xl"
        isTruncated
        color="var(--primary)"
        textTransform="capitalize"
      >
        Make your files
        <Text fontSize={['5xl', '5xl', '6xl']}>Accessible</Text>
      </Heading>
      <Button
        textTransform="capitalize"
        bg="var(--button)"
        color="var(--primary)"
        rounded="full"
        shadow="lg"
        px="2rem"
        py="1rem"
        my={2}
        isActive={false}
        _active={{
          outline: 'none',
          bg: 'var(--button)',
        }}
        _focus={{
          outline: 'none',
        }}
        _hover={{
          bg: 'var(--button)',
        }}
        outline="none"
        border="none"
        onClick={() => {
          Router.push('/upload');
        }}
      >
        upload file
      </Button>
    </Container>
  );
}
