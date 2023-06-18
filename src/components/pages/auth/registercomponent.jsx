import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState, useEffect } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  

  export default function RegisterComponent() {
    const [formData, setFormData] = useState({
      name:'',
      username:'',
      email:'',
      password:'',
      password2:'',
    })
    const { name,username, email,password,password2}= formData
    
    const onChange = (e) =>{
      setFormData((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
      }))
    }

    const onSubmit = (e) =>{
      e.preventDefault()
    }
    return (
      <Flex
      onSubmit={onSubmit}
        minH={'100vh'} 
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              register your account to enjoy ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack  spacing={4}>
              <HStack>
                <Box>
                  <FormControl   id="name" isRequired>
                    <FormLabel> Name</FormLabel>
                    <Input name='name' onChange={onChange} value={name}  type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl  id="username">
                    <FormLabel>username</FormLabel>
                    <Input name="username" onChange={onChange} value={username} type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl  id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input name='email' onChange={onChange}  value={email}  type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input  name='password' onChange={onChange}  value={password}  type={ 'text'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      
                      >
                      
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl  id="password2" isRequired>
                <FormLabel>confirm Password</FormLabel>
                <InputGroup>
                  <Input name='password2' onChange={onChange}  value={password}  type={'text' } />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      >
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button 
                type='submit'
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }