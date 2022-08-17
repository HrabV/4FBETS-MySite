import {MainLayout} from "../layouts";
import {HeroNews, PlayHero, RegistrationHero} from "../components/homepage";
import {Grid, GridItem} from "@chakra-ui/react";

export const IndexPage = () => {
    return (
        <MainLayout>
            <Grid gridTemplateRows={"max-content max-content max-content"}>
                <GridItem>
                    <HeroNews/>
                </GridItem>
                <GridItem>
                    <PlayHero/>
                </GridItem>
                <GridItem>
                    <RegistrationHero/>
                </GridItem>
            </Grid>
        </MainLayout>
    );
};
