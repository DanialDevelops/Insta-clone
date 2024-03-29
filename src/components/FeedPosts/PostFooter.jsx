import { VStack,Flex,Text,Box, Input, InputGroup, InputRightElement, Button} from "@chakra-ui/react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants";
import { useState } from "react";

const PostFooter = ({username}) => {
  const [liked , setLiked] = useState(false)
  const [likes, setLikes] = useState(1000)
  const handleLike = () => {
    if(liked){
      setLiked(false)
      setLikes(likes - 1)
    }else{
      setLiked(true)
      setLikes(likes + 1)
    }
  }
  return (
    <Box mb={10}>
    <VStack gap={2} alignItems={"flex-start"} >
        <Flex gap={4} my={4} justifyContent={"flex-start"}>
          <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
            {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
          </Box>
          <Box cursor={"pointer"} fontSize={18}>
            <CommentLogo />
          </Box>
        </Flex>
        <VStack alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={"sm"}>{likes} likes</Text>
            <Text fontSize={"sm"} fontWeight={700}>{username}</Text>
            <Text fontWeight={400} as='span'>Feeling Good!!</Text>
        </VStack>
        <Box>
            <Text color={"gray.600"} cursor={"pointer"} _hover={{color:"white"}}>View all 1000 comments</Text>
        </Box>
        
        <InputGroup>
        <Input placeholder="Add a comment..." w={"full"} fontSize={14} variant={"flushed"}/>
        <InputRightElement>
        <Button
        fontSize={14}
        color={"blue.500"}
        fontWeight={600}
        cursor={"pointer"}
        _hover={{color:"white"}}
        bg={"transparent"}
        >
          Post
        </Button>
        </InputRightElement>
        </InputGroup>
    </VStack>
    </Box>
  )
}

export default PostFooter