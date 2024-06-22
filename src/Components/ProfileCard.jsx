import React from 'react';
import { Avatar, Box, Flex, IconButton, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../utils/bookmarkSlice'; // Ensure the path is correct

const ProfileCard = ({ profile }) => {
  const dispatch = useDispatch();
  const bookmarks = useSelector(state => state.bookmarks.items);

  const isBookmarked = bookmarks.some(bookmark => bookmark.id === profile.id);

  const handleBookmark = () => {
    if (isBookmarked) {
      dispatch(removeBookmark({ id: profile.id }));
    } else {
      dispatch(addBookmark(profile));
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="md"
      transition="all 0.3s"
      _hover={{ shadow: 'lg' }}
      width={{ base: '100%', md: '45%', lg: '30%' }}
      m={2}
    >
      <Flex align="center" direction={{ base: 'column', md: 'row' }}>
        <Avatar size="xl" name={`${profile.first_name} ${profile.last_name}`} src={profile.image || ''} />
        <Box ml={{ base: 0, md: 4 }} mt={{ base: 4, md: 0 }} flex="1">
          <Text fontWeight="bold">{`${profile.first_name} ${profile.last_name}`}</Text>
          <Text>{profile.email}</Text>
          <Text as='b'>Association</Text>
          <Text>{profile.association.name}</Text>
          <Text>{profile.association.address}</Text>
          {profile.association.logo && (
            <Image src={profile.association.logo} alt="Association Logo" boxSize="50px" mt={2} />
          )}
        </Box>
        <IconButton
          icon={<StarIcon />}
          onClick={handleBookmark}
          aria-label="Bookmark"
          colorScheme={isBookmarked ? "yellow" : "gray"}
          variant="ghost"
          size="sm"
          ml="auto"
          mt={{ base: 4, md: 0 }}
        />
      </Flex>
    </Box>
  );
};

export default ProfileCard;
