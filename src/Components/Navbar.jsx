import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Button,
  useColorMode,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const profiles = useSelector(state => state.bookmarks.items);

  // Define colors for light and dark modes
  const colorsLight = {
    primary: '#363062',
    secondary: '#435585',
    tertiary: '#818FB4',
    quaternary: '#F5E8C7',
    textColor: 'black',
  };

  const colorsDark = {
    primary: 'rgb(54, 48, 98)',
    secondary: 'rgb(67, 85, 133)',
    tertiary: 'rgb(129, 143, 180)',
    quaternary: 'rgb(245, 232, 199)',
    textColor: 'white',
  };
  
  const bgColor = useColorModeValue(colorsLight.secondary, colorsDark.primary);
  const textColor = useColorModeValue(colorsLight.textColor, colorsDark.textColor);

  return (
    <Box
      as='nav'
      bg={bgColor}
      boxShadow='md'
      px={4}
      position='fixed'
      w='100%'
      top={0}
      zIndex={5}
    >
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        <HStack spacing={8} alignItems='center' display={{ base: 'none', md: 'flex' }}>
          <Link to='/' style={{ color: textColor, textDecoration: 'none' }}>
            Home
          </Link>
          <Link to='/bookmarks' style={{ color: textColor, textDecoration: 'none' }}>
            Bookmarked ({profiles.length} items)
          </Link>
        </HStack>

        <Flex alignItems='center'>
          <Button onClick={toggleColorMode} mr={4}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          <IconButton
            size='md'
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label='Open Menu'
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as='nav' spacing={4}>
            <Link
              to='/'
              style={{ color: textColor, textDecoration: 'none' }}
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              to='/bookmarks'
              style={{ color: textColor, textDecoration: 'none' }}
              onClick={onClose}
            >
              Bookmarked ({profiles.length} items)
            </Link>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
