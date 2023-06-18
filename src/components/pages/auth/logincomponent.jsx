
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState , useEffect } from 'react';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import { useLoginUserMutation } from '../../../store/reducer/authslice.jsx'; 
import Swal from "sweetalert2";



  let loginSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  })

 function Logincomponent () {
             const [loginUser] = useLoginUserMutation();
             const {register, handleSubmit,formState:{errors}}=
             useForm({
              resolver:yupResolver(loginSchema)
             })

             let pStyle = {
              color: "#f60000",
          }
          let loginForm = (data) => {
            loginUser(data).unwrap().then((response) => {
                if (response.success) {
                    localStorage.setItem("token", response.token);
                    window.location.href = "/admin";
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: response.error,
                    })
    
                }
            }).catch((error) => {
                console.log(error);
            });
    
        }      


    // const [formData, setFormData] = useState({
    //   email:'',
    //   password:'',
    // });
    // const {  email,password}= formData

    // const onChange = (e) =>{
    //   setFormData((prevState)=>({
    //     ...prevState,
    //     [e.target.name]:e.target.value
    // //   }))
    // // }
    // const onSubmit = (e) =>{
    //   e.preventDefault()
    // }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              login to enjoy <Link color={'blue.400'}>Warmly welcome</Link> 
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack onSubmit={handleSubmit(loginForm)} spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address:{errors.email && <a style={pStyle}>{errors.email.message}</a>}
</FormLabel>
                <Input type='text' {...register('email')} id="email" name='email'   />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password:{errors.password && <a style={pStyle}>{errors.password.message}</a>}</FormLabel>
                <Input type='password' {...register('password')} name='password' id="password"/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button 
                type='submit'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                    <Link to='/home'>Log in</Link>
                  
                 
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }

  export default Logincomponent



// function Logincomponent(){

//   return (
//     <div>
//       <h1>Login page</h1>
//     </div>
//   )

// }

// export default Logincomponent;