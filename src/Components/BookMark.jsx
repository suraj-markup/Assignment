import React from 'react';
import { useSelector } from 'react-redux';
import ProfileCard from './ProfileCard';
import { Box, Text } from '@chakra-ui/react';

const Bookmark = () => {
  const bookmarks = useSelector(state => state.bookmarks.items);

  return (
    <Box>
        <Text>Hello</Text>
      {bookmarks.length > 0 ? (
        <ProfileCard profiles={bookmarks} />
      ) : (
        <Text>No bookmarks added yet.</Text>
      )}
    </Box>
  );
};

export default Bookmark;
