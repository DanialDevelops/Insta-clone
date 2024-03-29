import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  Input,
  Button,
  Text,
  Image,
  VStack,
  Flex,
} from "@chakra-ui/react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const naviagte = useNavigate();
  const [inputs, setInputs] = useState({ email: "", password: "", confirmPassword: ""});

  const handleAuth = () => {
    if(!inputs.email || !inputs.password) {
      alert("Email and Password are required");
      return;
    } 
    
    naviagte("/");
  }

  return <>
    <Box border="1px" borderColor="gray.200" p={5} borderRadius={4}>
      <VStack spacing={4}>
        <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram Logo" />
        <FormControl isRequired>
          <Input type="email" fontSize={14} placeholder="Email" value={inputs.email} onChange={(e) => setInputs({...inputs,email:e.target.value})}/>
        </FormControl>
        <FormControl isRequired>
          <Input type="password" fontSize={14} placeholder="Password" value={inputs.password} onChange={(e) => setInputs({...inputs,password:e.target.value})}/>
        </FormControl>
        {!isLogin ? (
          <FormControl isRequired>
            <Input
              type="password"
              fontSize={14}
              placeholder="Confirm Password"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}
            />
          </FormControl>
        ) : null}
        ;
        <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={handleAuth}>
          {isLogin ? "Log in" : "Sign Up"}
        </Button>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          my={4}
          gap={1}
          w={"full"}
        >
          <Box flex={2} h={1} bg={"gray.400"} />
          <Text mx={1} color={"white"}>
            OR
          </Text>
          <Box flex={2} h={1} bg={"gray.400"} />
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          cursor={"pointer"}
        >
          <Image src="/google.png" w={5} alt="Google Logo" />
          <Text mx={2} color={"blue.500"}>
            Login With Google
          </Text>
        </Flex>
      </VStack>
    </Box>

    <Box border="1px" borderColor="gray.200" p={5} borderRadius={4}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Box mx={2} fontSize={14}>

              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </Box>
            <Box onClick={()=> setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
              {isLogin ? "Sign Up" : "Log in"}
            </Box>
          </Flex>
    </Box>
    </>
};

export default AuthForm;
