import React, { useEffect, useState } from 'react';
import './Profile.css'; 
import { Avatar, Box, Button, Flex, IconButton, List, ListItem, Spinner, Text, Image, useToast, Heading, Wrap, WrapItem, Container, useColorMode, useColorModeValue, Center } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import ProfileCard from './ProfileCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfiles } from '../utils/profileSlice';

const Profile = () => {
  const [bookmarkedProfiles, setBookmarkedProfiles] = useState([]);
  const toast = useToast();
  const dispatch = useDispatch();
  const { items: profiles, loading, error } = useSelector(state => state.profiles);

  useEffect(() => {
    dispatch(fetchProfiles());
  }, [dispatch]);

  console.log(profiles);

  if (loading === 'loading') {
    return (
      <Center>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Center>
    );
  }

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  return (
    <Box className='container-box'>
      <Heading textAlign='center'>Profile List</Heading>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        wrap="wrap"
        justify="center"
        align="center"
        gap={4}
        p={4}
      >
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </Flex>
    </Box>
  );
};

export default Profile;
