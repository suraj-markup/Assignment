import React from 'react';
import { Avatar, Box, Center, Flex, IconButton, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const ProfileCard = ({ profile }) => {
  const handleBookmark = () => {
    // Implement your bookmark logic here
    console.log('Bookmark clicked for:', profile.id);
  };

  const iconColor = useColorModeValue('gray.400', 'gray.500');

  return (
    <Box w={{base:"300px",md:"500px",sm:"400px"}} p={5}>

    <Flex
      direction={{ base: 'column', md: 'row' }} 
      // wrap={'wrap'} 
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="md"
      mb={4}
      mx={4}
      flex="1"
      _hover={{ shadow: 'lg' }} // Add hover effect
      transition="all 0.3s"
      align="center"
      >
      <Avatar size={{base:"lg",md:"xl"}} name={`${profile.first_name} ${profile.last_name}`} src={profile.image || ''} />
      <Box ml={{ base: 0, md: 4 }} mt={{ base: 4, md: 0 }} flex="1">
        <Text fontWeight="bold">{`${profile.first_name} ${profile.last_name}`}</Text>
        <Text>{profile.email}</Text>
        <Text as='b'>Association</Text>
        <Text>{profile.association.name}</Text>
        <Text>{profile.association.address}</Text>
        {profile.association.logo && (
          <Image src={profile.association.logo} alt="Association Logo" w={20} h={14} mt={2} />
        )}
      </Box>
      <IconButton
        icon={<StarIcon />}
        onClick={handleBookmark}
        aria-label="Bookmark"
        colorScheme="yellow"
        variant="ghost"
        size="lg"
        ml="auto"
        mt={{ base: 4, md: 0 }} 
        />
    </Flex>
    </Box>
  );
};

export default ProfileCard;
