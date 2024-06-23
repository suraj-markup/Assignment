import React, { useEffect } from 'react';
import ProfileCard from './ProfileCard';
import useOnlineStatus from '../hooks/useOnlineStatus';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfiles } from '../redux/profileSlice';
import {
  Box,
  Flex,
  Spinner,
  Text,
  Heading,
  Divider,
  useColorMode,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

const Profile = () => {

  const dispatch = useDispatch();
  const { items: profiles, loading, error } = useSelector(state => state.profiles);
  const { colorMode } = useColorMode();
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    dispatch(fetchProfiles());
  }, [dispatch]);

  const colorsLight = {
    primary: '#363062',
    secondary: '#435585',
    tertiary: '#818FB4',
    quaternary: '#F5E8C7',
  };

  const colorsDark = {
    primary: 'rgb(54, 48, 98)',
    secondary: 'rgb(67, 85, 133)',
    tertiary: 'rgb(129, 143, 180)',
    quaternary: 'rgb(245, 232, 199)',
  };

  const gradientLight = `linear(to-r, ${colorsLight.primary}, ${colorsLight.secondary})`;
  const gradientDark = `linear(to-r, ${colorsDark.primary}, ${colorsDark.secondary})`;

  if (loading === 'loading') {
    return (
      <Flex justify='center' align='center' minH='100vh' bgGradient={gradientLight}>
        <Spinner size='xl' color='blue.500' thickness='4px' speed='0.65s' />
      </Flex>
    );
  }

  if (!onlineStatus) {
    return (
      <Alert
        mt={16}
        status='error'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
          Looks like you are not connected to the internet.
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          Please check your Internet connection.
        </AlertDescription>
      </Alert>
    );
  }

  if (error) {
    return (
      <Alert
        mt={16}
        status='error'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
          {error.status}
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          Something wrong from the API server side.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Box mt={5} bg={useColorModeValue('gray.100', 'gray.800')} p={4} minH='100vh' bgGradient={colorMode === 'light' ?"linear(to-r, blue.700, blue.900)" : "linear(to-r, blue.900, gray.700)"}>
      <Heading as='h1' textAlign='center' color={colorMode === 'light' ? 'white' : 'gray.200'} mt={12} mb={8}>
        Profile List
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} wrap='wrap' justify='center' align='center' gap={4} p={4}>
        {profiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </Flex>
      <Divider mt={8} borderColor='gray.300' />
      <Box textAlign='center' mt={4}>
        <Text color={colorMode === 'light' ? 'white' : 'gray.200'}>Made By Suraj Kumar © 2024</Text>
      </Box>
    </Box>
  );
};

export default Profile;
