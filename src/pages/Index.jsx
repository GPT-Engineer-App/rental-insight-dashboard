import { Box, Container, Text, VStack, Grid, GridItem, Stat, StatLabel, StatNumber, StatHelpText, Heading } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 2210 },
  { name: 'Mar', value: 2290 },
  { name: 'Apr', value: 2000 },
  { name: 'May', value: 2181 },
  { name: 'Jun', value: 2500 },
];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
        <Box>
          <Heading as="h2" size="lg" textAlign="center" mb={4}>
            Market Value Rent Over Time
          </Heading>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </Box>
        <Box>
          <Heading as="h2" size="lg" textAlign="center" mb={4}>
            Applications and Favorites
          </Heading>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Box>
          <Heading as="h2" size="lg" textAlign="center" mb={4}>
            Neighborhood Insights
          </Heading>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value" label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;