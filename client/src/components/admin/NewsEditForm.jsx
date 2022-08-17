import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { MainLayout } from "../../layouts";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateNews } from "../../reducers/newsSlice";

export const NewsEditForm = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [title, setTitle] = useState(state.title);
  const [body, setBody] = useState(state.body);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onBodyChanged = (e) => setBody(e.target.value);

  const onSaveEdit = () => {
    dispatch(updateNews({ ...state, title, body, accessToken: "" }));
    navigate("/admin");
  };

  return (
    <MainLayout>
      <Container maxWidth={"6xl"}>
        <Box backgroundColor={"rgba(255,255,255, 0.7)"} padding={5}>
          <Stack>
            <FormControl>
              <FormLabel>Post header</FormLabel>
              <Textarea value={title} onChange={onTitleChanged} />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Post text</FormLabel>
              <Textarea
                resize={"vertical"}
                value={body}
                onChange={onBodyChanged}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Post Image</FormLabel>
              <input
                my={"2"}
                px={"1"}
                type={"file"}
                variant="unstyled"
                accept="image/*"
                id="imageUrl"
                name="imageUrl"
              />
              <Button type={"submit"}>Upload</Button>
            </FormControl>
            <Button
              type={"submit"}
              colorScheme="blue"
              mr={3}
              onClick={onSaveEdit}
            >
              Save
            </Button>
          </Stack>
        </Box>
      </Container>
    </MainLayout>
  );
};
