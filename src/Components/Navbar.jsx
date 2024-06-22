// src/Navbar.jsx
import React from 'react';
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link,
  Button,
  useColorMode,
  useColorModeValue,
  Spacer,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';




const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as='div' bg={useColorModeValue('gray.100', 'gray.900')} px={4} position="fixed" w="100%" top={0} zIndex={5}>

      <Flex h={16} alignItems={'center'}>
        
        {/* <Box >Logo</Box> */}
        
        <Spacer />
        
        <HStack spacing={8} alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
        <Link px={2} py={1}  rounded={'md'} _hover={{ bg: useColorModeValue('gray.200', 'gray.700'),}} href='/'> Home </Link>
   
        <Link px={2} py={1}  rounded={'md'} _hover={{ bg: useColorModeValue('gray.200', 'gray.700'),}} href='/bookmarks'> Book Marked </Link>
        
        
        </HStack>
        
        <Spacer />
        
        <Flex alignItems={'center'}>
          <Button onClick={toggleColorMode} mr={4}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          /> 
        </Flex>
      
        </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4} >
            <Link px={2} py={1}  rounded={'md'} _hover={{ bg: useColorModeValue('gray.200', 'gray.700'),}} href='/'> Home </Link>
            <Link px={2} py={1}  rounded={'md'} _hover={{ bg: useColorModeValue('gray.200', 'gray.700'),}} href='/about'> About </Link>
            <Link px={2} py={1}  rounded={'md'} _hover={{ bg: useColorModeValue('gray.200', 'gray.700'),}} href='/services'> Services </Link>
            <Link px={2} py={1}  rounded={'md'} _hover={{ bg: useColorModeValue('gray.200', 'gray.700'),}} href='/contact'> Contact </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
