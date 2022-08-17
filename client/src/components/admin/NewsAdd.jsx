import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { addNewNews } from "../../reducers/newsSlice";
import { useProtectedApiCall } from "../../hooks/useProtectedApiCall";

export const NewsAdd = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date());
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const pac = useProtectedApiCall();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onBodyChanged = (e) => setBody(e.target.value);
  const onImageChanged = (e) => setImage(e.target.files[0]);
  const canSave = [title, body].every(Boolean) && addRequestStatus === "idle";

  const clearState = () => {
    setTitle("");
    setBody("");
    setImage(null);
  };

  const onSaveNews = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        pac(addNewNews, { title, body, image, createdAt });
        setCreatedAt();
        clearState();
      } catch (err) {
        console.error("Failed to save the post: ", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <>
      <Box
        width={"150px"}
        height={"250px"}
        rounded={"10%"}
        boxShadow={"5px 5px 10px gray"}
        bg={"blackAlpha.100"}
        _hover={{ boxShadow: "10px 10px 10px gray" }}
      >
        <Grid
          w={"full"}
          h={"full"}
          p={2}
          align={"center"}
          gridTemplateRows={"20% 1fr max-content "}
        >
          <GridItem alignSelf={"center"} p={2}>
            <Heading size={"sm"}> Add New Post </Heading>
          </GridItem>
          <GridItem
            rounded={"50%"}
            p={"2"}
            m={"2"}
            bgColor={"white"}
            boxShadow={"1px 1px 10px gray"}
          >
            <Image
              rounded={"50%"}
              height={"full"}
              width={"full"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo1RXypIY-h7VsxjMWDbCZrcBtQJg7Jb7z0VV27bujmqAoqsWsvKafyhuZpJkZqDtvVyE&usqp=CAU"
            />
          </GridItem>
          <GridItem m={2} rounded={"20%"}>
            <Button w={"70%"} h={"full"} onClick={onOpen} p={2} fontSize={15}>
              Add
            </Button>
          </GridItem>
        </Grid>
      </Box>
      <Modal
        closeOnOverlayClick={false}
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        backdropFilter="blur(20px)"
        size={"lg"}
        scrollBehavior="outside"
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent rounded={0} bgColor={"rgba(255, 255, 255, 0.75)"}>
          <ModalHeader>Add new Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Post header</FormLabel>
              <Input
                type={"text"}
                ref={initialRef}
                name="title"
                id="title"
                value={title}
                onChange={onTitleChanged}
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Post text</FormLabel>
              <Textarea
                resize={"none"}
                id="newsBody"
                name="newsBody"
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
                onChange={onImageChanged}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              type={"submit"}
              onClick={onSaveNews}
              disabled={!canSave}
              colorScheme="blue"
              mr={3}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
