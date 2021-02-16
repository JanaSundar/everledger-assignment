import { Flex, Link, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';

const Nav = () => {
  return (
    <Flex py={4} justifyContent="space-between" alignItems="center">
      <NextLink href="/">
        <Link>
          <Image
            src="/logo.png"
            alt="Everledger logo"
            width="100px"
            height="20px"
            priority="high"
          />
        </Link>
      </NextLink>
    </Flex>
  );
};

export default Nav;
