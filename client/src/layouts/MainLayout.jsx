import { Box, Center, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import { Footer, Nav } from "../components";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Box
        backgroundPosition={"center"}
        backgroundAttachment={"fixed"}
        backgroundImage={
          "https://lexinform.com.ua/wp-content/uploads/2020/10/football-stadium-shiny-lights-view-from-field-PWS5ZD9-min.jpg"
        }
        bgSize={"cover"}
        minHeight={"100vh"}
        maxHeight={"full"}
      >
        <Grid
          gridTemplateRows={"max-content max-content 1fr max-content"}
          h={"full"}
          w={"full"}
        >
          <GridItem>
            <Box
              bgColor={"black"}
              height={"12"}
              textAlign={"center"}
              paddingY={1}
            >
              <Text
                fontWeight={"bold"}
                fontFamily={"sans-serif"}
                fontSize={{ base: "10px", sm: "15px", lg: "30px" }}
                bgGradient="linear(to-t, yellow.500 50%, blue.500 50%)"
                bgClip="text"
              >
                #STAND WITH UKRAINE!!!
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box w={"100%"} zIndex={2} backdropFilter="blur(10px)">
              <Nav />
            </Box>
          </GridItem>
          <GridItem>
            <VStack></VStack>
            <Box paddingY={"10"}>
              <Center>{children}</Center>
            </Box>
          </GridItem>
          <GridItem h={12}>
            {" "}
            <Box
              position={"fixed"}
              w={"100%"}
              zIndex={3}
              bottom={0}
              backdropFilter="blur(2px)"
            >
              <Footer />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
