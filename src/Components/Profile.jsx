// src/ProfileList.jsx
import React, { useEffect, useState } from 'react';
import './Profile.css'; 
import axios from 'axios';
import { Avatar, Box, Button, Flex, IconButton, List, ListItem, Spinner, Text, Image, useToast, Heading, Wrap, WrapItem,Container,useColorMode,useColorModeValue, Center, } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import ProfileCard from './ProfileCard';

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  const [bookmarkedProfiles, setBookmarkedProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const toast = useToast();

  useEffect(() => {
    axios.get('https://core.dev.kiido.app/collaboration-api/collaborator/')
      .then(response => {
        setProfiles(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch profiles');
        setLoading(false);
      });
  }, []);

    console.log(profiles);
  

  if (loading) {
    return <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  />;
  }

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  return (
    <div className='container-box'>
      <Heading textAlign={'center'} >Profile List</Heading>
    <Wrap >
    <Flex
        direction={{ base: 'column', md: 'row' }}
        wrap="wrap"
        justify={{base:"center",md: 'center'}}
        align={{base:"center",md: 'center'}}
        gap={4}
      >
        {profiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </Flex>
    </Wrap>
    </div>
  );
};

export default Profile;
