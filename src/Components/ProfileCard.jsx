import React from 'react';
import { Avatar, Box, Flex, IconButton, Image, Text, useColorModeValue, Button,Badge } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import useOnlineStatus from '../hooks/useOnlineStatus';
import { addBookmark, removeBookmark } from '../redux/bookmarkSlice';

const ProfileCard = ({ profile }) => {

  const dispatch = useDispatch();
  const bookmarks = useSelector(state => state.bookmarks.items);
  const isBookmarked = bookmarks.some(bookmark => bookmark.id === profile.id);
  const onlineStatus = useOnlineStatus();


  const handleBookmark = () => {
    if (isBookmarked) {
      dispatch(removeBookmark({ id: profile.id }));
    } else {
      dispatch(addBookmark(profile));
    }
  };

  const lightModeColors = {
    bg: 'white',
    boxShadow: 'lg',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    textColor: 'gray.500',
    hoverBg: 'gray.400',
    hoverColor: 'white',
  };

  const darkModeColors = {
    bg: '#122f56',
    boxShadow: 'lg',
    borderColor: 'rgba(0, 0, 0, 0.3)',
    textColor: 'gray.300',
    hoverBg: 'gray.400',
    hoverColor: 'white',
  };

  
  return (
    <Box
      maxW={'320px'}
      w={'full'}
      bg={useColorModeValue(lightModeColors.bg, darkModeColors.bg)}
      boxShadow={useColorModeValue(lightModeColors.boxShadow, darkModeColors.boxShadow)}
      rounded={'lg'}
      p={6}
      textAlign={'center'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m={2}
      mx={5}
      transition="all 0.3s"
      _hover={{
        transform: 'scale(1.02)',
        boxShadow: 'xl',
        bg: useColorModeValue(lightModeColors.hoverBg, darkModeColors.hoverBg),
        color: useColorModeValue(lightModeColors.hoverColor, darkModeColors.hoverColor),
      }}
      backdropFilter="blur(20px)"
      border="1px solid"
      borderColor={useColorModeValue(lightModeColors.borderColor, darkModeColors.borderColor)}
    >
      <Avatar
        size="xl"
        name={`${profile.first_name} ${profile.last_name}`}
        src={profile.image || ''}
        mb={4}
        _after={{
          content: '""',
          w: 4,
          h: 4,
          bg: onlineStatus ? 'green.300' : 'red.500', 
          border: '2px solid white',
          rounded: 'full',
          pos: 'absolute',
          bottom: 0,
          right: 3,
        }}
      />

      <Text xt fontSize={'2xl'} fontFamily={'body'} fontWeight={'bold'} mb={4} color={useColorModeValue('#1B375F', 'gray.300')}>
        {`${profile.first_name} ${profile.last_name}`}
      </Text>
      <Text fontWeight={600} color={useColorModeValue('gray.500', 'gray.300')} mb={4}>
        {profile.email}
      </Text>
      <Text textAlign={'center'} color={useColorModeValue('gray.500', 'gray.300')} px={3}>
        <Text as='b' fontWeight={700} color={'blue.400'}>
          {profile.association.name}
        </Text>
        <br />
        {profile.association.address}
      </Text>

      <Flex mt={3} justify={'center'}>
        {profile.association.logo ? 
          <Image src={profile.association.logo} alt="Association Logo" w={20} h={10} mt={2} />
      :<Spinner size='xl' color='blue.500' thickness='4px' speed='0.65s' />}
      </Flex>

      <Flex mt={6} justify={'center'}>
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue('gray.50', 'gray.800')}
          fontWeight={'400'}
          mr={2}
        >
          Users: {profile.user}
        </Badge>
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue('gray.50', 'gray.800')}
          fontWeight={'400'}
          mr={2}
        >
          Duration: {profile.average_consultation_duration}s
        </Badge>
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue('gray.50', 'gray.800')}
          fontWeight={'400'}
        >
          Lg: {profile.preferred_language}
        </Badge>
      </Flex>
      <Flex mt={8} direction={'row'} spacing={4} justify={'center'}>
        <Button
          colorScheme={isBookmarked ? 'yellow' : 'blue'}
          onClick={handleBookmark}
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          _hover={{
            bg: isBookmarked ? 'yellow.300' : 'gray.400',
            color: 'white',
          }}
        >
          Bookmark
          <IconButton
            icon={<StarIcon />}
            // colorScheme={isBookmarked ? 'yellow' : 'gray'}
            aria-label="Bookmark"
            variant="ghost"
            size="md"
            ml="2"
          /> 
        </Button>
      </Flex>
    </Box>
  );
};

export default ProfileCard;
