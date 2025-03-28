import { useState, useMemo } from "react";
import {
  Box,
  Container,
  Text,
  VStack,
  Button,
  Divider,
  Flex,
  Switch,
} from "@chakra-ui/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
});

function Dashboard() {
  const navigate = useNavigate();
  const [ownedOnly, setOwnedOnly] = useState(true);
  const [activeFilter, setActiveFilter] = useState("proxy");

  type Product = {
    id: string;
    name: string;
    type: string;
    description: string;
    owned: boolean;
    path: string;
  };

  const proxyProducts: Product[] = [
    { id: "https-proxy", name: "HTTPS Proxy API ⚙️", type: "proxy", description: "Reroute any https request in any region", owned: true, path: "/scraping-tools/https-proxy" },
  ];

  const filteredProducts = useMemo(() => {
    return proxyProducts.filter((product) => {
      const matchesFilter =
        activeFilter === "all" ||
        product.type.toLowerCase() === activeFilter.toLowerCase();
      const matchesOwnership = !ownedOnly || product.owned;
      return matchesFilter && matchesOwnership;
    });
  }, [activeFilter, ownedOnly]);

  return (
    <Container maxW="full" bg="gray.50" minH="100vh">
<Flex mt={6} gap={6} justify="space-between">
  <Box flex="1">
    <VStack spacing={6} mt={6} align="stretch">
      {filteredProducts.length === 0 ? (
        <Text textAlign="center" fontSize="lg" color="gray.600">No products match this filter.</Text>
      ) : (
        filteredProducts.map((product) => (
          <Box
            key={product.id}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            borderColor="gray.200"
            cursor="pointer"              // Add cursor pointer to indicate clickability
            _hover={{                    // Add hover effect
              bg: "gray.50",            // Slight shade change on hover
              transition: "background-color 0.2s"  // Smooth transition
            }}
            onClick={() => navigate({ to: product.path })}  // Make entire box clickable
          >
            <Text fontSize="lg" color="gray.800">{product.name}</Text>
            <Text fontSize="sm" color="gray.600">{product.description}</Text>
          </Box>
        ))
      )}
    </VStack>
  </Box>
</Flex>
    </Container>
  );
}

export default Dashboard;