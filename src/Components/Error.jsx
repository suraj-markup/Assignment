import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

const Error=({ error })=>{
    
    return (
        <div>
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
        <AlertIcon  boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
        {error.status}: PAGE NOT FOUND
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
        The URL you have entered does not exist. Please enter correct URL.
        </AlertDescription>
        </Alert>

        </div>
      );
    };
    


export default Error;