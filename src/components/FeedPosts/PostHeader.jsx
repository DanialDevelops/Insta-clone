import { Flex, Avatar,Text,Box, Link, Button } from '@chakra-ui/react'

const PostHeader = ({username,avatar}) => {
  return (
    <>
    <Flex justifyContent={"space-between"} alignItems={"center"} my={2}>
    <Flex alignItems={"center"} gap={2} >
    <Avatar size='sm' name='Kent Dodds' src={avatar}/> 
    <Text>{username}</Text>
    <Box color={"gray.600"}>• 1w</Box>
    </Flex>
    <Box 
    cursor={"pointer"}
    >
    <Text fontSize={12}color={"blue.500"} fontWeight={"bold"} _hover={{color: "white"}} transition={"0.2s ease-in-out"}>
        Unfollow
    </Text>
    </Box >
    </Flex>
    </>
  )
}

export default PostHeader