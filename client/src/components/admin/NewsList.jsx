import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNews, removeNews } from "../../reducers/newsSlice";

const NewsOption = ({ news }) => {
  const { onOpen } = useDisclosure();
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(
      removeNews({
        id: news.id,
        accessToken: "",
      })
    );
  };

  return (
    <Tr key={news.id}>
      <Td>
        <Box>
          <img alt="" src={news.imageUrl}></img>
        </Box>
      </Td>
      <Td>
        <Text>{news.title}</Text>
      </Td>
      <Td>
        <Text>{news.createdAt}</Text>
      </Td>
      <Td>
        <Button onClick={onOpen}>
          <Link to={`/admin/editnews/${news.id}`} state={news}>
            Edit
          </Link>
        </Button>
      </Td>
      <Td>
        <Button onClick={removeHandler}>Delete</Button>
      </Td>
    </Tr>
  );
};

export const NewsList = ({ ref }) => {
  const dispatch = useDispatch();
  const { news, status } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  let content;

  if (status === "success") {
    const orderedNews = news
      .slice()
      .sort((a, b) => b.title.localeCompare(a.title));

    content = orderedNews.map((news) => (
      <NewsOption key={news.id} news={news} />
    ));
  }
  return (
    <TableContainer ref={ref}>
      <Table>
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Title</Th>
            <Th>Date</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>{content}</Tbody>
      </Table>
    </TableContainer>
  );
};
