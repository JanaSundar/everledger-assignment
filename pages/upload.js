import Container from '@/components/Container';
import { Box, Button, Input, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const upload = () => {
  const { open, getRootProps, getInputProps, acceptedFiles } = useDropzone({
    noClick: true,
    noDrag: true,
    noKeyboard: true,
    accept: 'image/jpeg, image/png',
    maxFiles: 1,
  });
  const toast = useToast();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (acceptedFiles.length) {
      const uploadImage = async () => {
        try {
          setLoading(true);
          const formData = new FormData();
          formData.append('file', acceptedFiles[0]);
          formData.append('expires', '1h');

          const { data } = await axios.post(
            'https://api.anonymousfiles.io/',
            formData,
            {
              headers: {
                'content-type': 'multipart/form-data',
              },
            }
          );

          acceptedFiles.splice(0, 1);
          await navigator.clipboard.writeText(data.url);

          setLoading(false);

          toast({
            title: 'File uploaded and Url Copied Successfully',
            status: 'success',
            duration: 3000,
          });
        } catch (err) {
          setLoading(false);
          acceptedFiles.splice(0, 1);
          toast({
            title: 'Error Occurred',
            status: 'error',
            duration: 3000,
          });
        }
      };

      uploadImage();
    }
  }, [acceptedFiles]);

  return (
    <Container>
    
      <Box
        className="content"
        p={4}
        borderRadius="10px"
        shadow="lg"
        textTransform="capitalize"
        color="white"
        w={['250px', '350px', '450px']}
      >
        <Text fontWeight="bold" fontSize="2xl">
          upload image
        </Text>
        <Box>
          <Image
            src="/Files.png"
            width="150px"
            height="150px"
            priority="high"
            alt="Files"
          />
        </Box>
        <Box {...getRootProps({ className: 'dropzone' })}>
          <Input {...getInputProps()} />
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
            onClick={open}
            isLoading={loading}
          >
            browse
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default upload;
