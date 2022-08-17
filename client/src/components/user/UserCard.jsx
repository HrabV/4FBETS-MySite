import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import { UserProfile } from "./UserProfile";
import { UserMenu } from "./UserMenu";

export const UserCard = () => {
  return (
    <Center py={"4"}>
      <Box height={"auto"} width={"auto"} bgColor={"rgba(255, 255, 255, 0.5)"}>
        <Grid gridTemplateColumns={"1fr 2fr"}>
          <GridItem margin={"3"}>
            <UserProfile></UserProfile>
          </GridItem>
          <GridItem maxHeight={"max-content"} margin={"3"}>
            <UserMenu></UserMenu>
          </GridItem>
        </Grid>
      </Box>
    </Center>
  );
};
