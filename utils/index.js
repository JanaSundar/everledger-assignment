import { extendTheme } from '@chakra-ui/react';

const styles = {
  global: {
    ':root': {
      '--primary': '#1F1235',
      '--button': '#F5D09D',
    },
    'html, body': {
      width: '100vw',
      height: '100vh',
      background: 'url("/bg.png")',
      backgroundPosition: 'left center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    '.content': {
      backdropFilter: 'blur(50px) opacity(0.2)',
      background: 'rgba(31,18,53,0.4)',
      textAlign: 'center',
    },
  },
};

const theme = extendTheme({ styles });

export { theme };
