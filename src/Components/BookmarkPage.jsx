import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Heading, Text, Flex, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import ProfileCard from './ProfileCard';
import { clearBookmarks } from '../redux/bookmarkSlice';

const BookmarkPage = () => {

  const dispatch = useDispatch();
  const bookmarks = useSelector(state => state.bookmarks.items);
  const { colorMode } = useColorMode(); 

  const handleClearBookmarks = () => {
    dispatch(clearBookmarks());
  };

  return (
    <Box
      p={4}
      mt={14}
      bg={useColorModeValue('gray.100', 'gray.900')}
      minH='100vh'
      bgGradient={colorMode === 'light' ? "linear(to-r, blue.700, blue.900)" : "linear(to-r, blue.900, gray.700)"}
    >
      <Heading as='h1' textAlign='center' color={colorMode === 'light' ? 'white' : 'gray.100'} mb={8}>
        Bookmarked Profiles
      </Heading>
      
      {bookmarks.length > 0 && (
        <Flex justify="center" mt={4}>
          <Button onClick={handleClearBookmarks} colorScheme="red">
            Clear Bookmarks
          </Button>
        </Flex>
      )}

      <Flex wrap="wrap" justify="center" mt={4}>
        {bookmarks.length > 0 ? (
          bookmarks.map(profile => (
            <ProfileCard key={profile.id} profile={profile} />
          ))
        ) : (
          <Text textAlign="center" color={colorMode === 'light' ? 'black' : 'gray.100'}>
            No bookmarks available.
          </Text>
        )}
      </Flex>
    </Box>
  );
};

export default BookmarkPage;
