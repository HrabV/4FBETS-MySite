import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MainLayout } from "../../layouts";
import { oneById } from "../../api/news";

export const NewsContainer = () => {
  const { newsId } = useParams();
  const { state } = useLocation();
  const [news, setNews] = useState({ ...state?.news });

  useEffect(() => {
    if (!state) {
      oneById(newsId).then(setNews);
    }
  }, [newsId, state]);

  return (
    <MainLayout>
      <Container maxWidth={"4xl"} backgroundColor={"rgba(255,255,255, 0.7)"}>
        <Box padding={5}>
          <Stack>
            <Box>
              <Heading>{news.title}</Heading>
            </Box>
            <Box>
              <Text fontSize={"15px"}>{news.createdAt}</Text>
            </Box>
            <Box align={"center"}>
              {news.imageUrl && <img src={news.imageUrl} alt={news.title} />}
            </Box>
            <Box>
              <Text textAlign={"justify"}>{news.body}</Text>
            </Box>
          </Stack>
        </Box>
      </Container>
    </MainLayout>
  );
};
