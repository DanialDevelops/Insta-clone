import { Container, Flex, VStack, SkeletonCircle, Skeleton, Box } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading && [0,1,2,3].map((_,idx) => (
        <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gap={2} >
          <SkeletonCircle size='10' />
          <VStack gap={2} alignItems={"flex-start"}>
            <Skeleton w={"200px"} h={"10px"}/>
            <Skeleton w={"200px"} h={"10px"}/>
          </VStack>
          </Flex>
          <Skeleton w={"full"}>
            <Box h={"500px"}>cotents wrapped</Box>
          </Skeleton>
        </VStack>
      ))}
      {!isLoading && (
        <>
        <FeedPost username="Danial" img="/img1.png" avatar="/img1.png" />
        <FeedPost username="John" img="/img2.png" avatar="/img2.png" />
        <FeedPost username="Billy" img="/img3.png" avatar="/img3.png" />
        <FeedPost username="Rahul" img="/img4.png" avatar="/img4.png" />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
