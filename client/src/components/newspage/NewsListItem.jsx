import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  LinkBox,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../reducers/newsSlice";
import { Link } from "react-router-dom";

const NewsOption = ({ news }) => {
  return (
    <Link to={`/news/${news.id}`} state={{ news }}>
      <LinkBox
        bgColor={"white"}
        boxShadow={"base"}
        _hover={{ boxShadow: "dark-lg" }}
        ml={5}
        as="article"
        p="2"
        borderWidth="1px"
        rounded="md"
        width={"150px"}
        height={"250px"}
      >
        <VStack>
          <Box key={news.id}>
            <Image
              alt={"ItemNews Image"}
              fit={"cover"}
              align={"center"}
              src={news.imageUrl}
              rounded="md"
            ></Image>
          </Box>
          <Box p="2">
            <Text
              fontWeight={"semibold"}
              textAlign={"justify"}
              fontSize={"9px"}
            >
              {news.createdAt}
            </Text>
          </Box>
          <Box maxHeight={"120px"}>
            <Heading textAlign={"justify"} fontSize={"10px"}>
              {news.title}
            </Heading>
          </Box>
        </VStack>
      </LinkBox>
    </Link>
  );
};

export const NewsListItem = () => {
  const dispatch = useDispatch();
  const { news, status } = useSelector((state) => state.news);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNews());
    }
  }, [status, dispatch]);

  let content;

  if (status === "success") {
    const orderedNews = news
      .slice()
      .sort((a, b) => b.createdAt.localeCompare(a.title));

    content = orderedNews.map((news) => (
      <NewsOption key={news.id} news={news} />
    ));
  }

  return (
    <Container maxWidth={"7xl"}>
      <Wrap>{content}</Wrap>
    </Container>
  );
};
