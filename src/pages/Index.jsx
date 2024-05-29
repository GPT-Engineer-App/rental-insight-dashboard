import { Box, Container, Text, VStack, Grid, GridItem, Stat, StatLabel, StatNumber, StatHelpText, Heading } from "@chakra-ui/react";
import { Line } from 'react-chartjs-2';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Index = () => {
  const priceTrendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Price Trends',
        data: [2000, 2100, 2200, 2300, 2400, 2500],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const priceTrendOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

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
          <GridItem colSpan={{ base: 1, md: 3 }}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Heading as="h2" size="md" mb={4}>Price Trends Over Time</Heading>
              <Line data={priceTrendData} options={priceTrendOptions} />
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 3 }}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Heading as="h2" size="md" mb={4}>Map of Rental Properties</Heading>
              <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </Box>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;