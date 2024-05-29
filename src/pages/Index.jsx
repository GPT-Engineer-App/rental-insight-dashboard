import { Box, Container, Text, VStack, Grid, GridItem, Stat, StatLabel, StatNumber, StatHelpText, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Rental Home Insights Dashboard
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          <GridItem>
            <Stat>
              <StatLabel>Estimated Market Value Rent</StatLabel>
              <StatNumber>$2,500</StatNumber>
              <StatHelpText>Per Month</StatHelpText>
            </Stat>
          </GridItem>
          <GridItem>
            <Stat>
              <StatLabel>Price Trends in the Area</StatLabel>
              <StatNumber>+5%</StatNumber>
              <StatHelpText>Last 6 Months</StatHelpText>
            </Stat>
          </GridItem>
          <GridItem>
            <Stat>
              <StatLabel>Neighborhood Insights</StatLabel>
              <StatNumber>High</StatNumber>
              <StatHelpText>Safety Rating</StatHelpText>
            </Stat>
          </GridItem>
          <GridItem>
            <Stat>
              <StatLabel>Number of Views</StatLabel>
              <StatNumber>1,200</StatNumber>
              <StatHelpText>Last 30 Days</StatHelpText>
            </Stat>
          </GridItem>
          <GridItem>
            <Stat>
              <StatLabel>Number of Applications</StatLabel>
              <StatNumber>15</StatNumber>
              <StatHelpText>Last 30 Days</StatHelpText>
            </Stat>
          </GridItem>
          <GridItem>
            <Stat>
              <StatLabel>Number of Favorites</StatLabel>
              <StatNumber>45</StatNumber>
              <StatHelpText>Last 30 Days</StatHelpText>
            </Stat>
          </GridItem>
          <GridItem>
            <Stat>
              <StatLabel>Price Drops/Increases Over Time</StatLabel>
              <StatNumber>-2%</StatNumber>
              <StatHelpText>Last 6 Months</StatHelpText>
            </Stat>
          </GridItem>
          <GridItem>
            <Stat>
              <StatLabel>Likelihood of Being Taken Off the Market Soon</StatLabel>
              <StatNumber>75%</StatNumber>
              <StatHelpText>Based on Current Trends</StatHelpText>
            </Stat>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;