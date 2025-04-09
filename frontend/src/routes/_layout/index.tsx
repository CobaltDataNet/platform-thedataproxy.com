import React from "react";
import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
});

function Dashboard() {
  const navigate = useNavigate();

  const products = [
    {
      id: "https-proxy",
      name: "HTTPS Proxy",
      description: "Route HTTPS requests globally",
      path: "/scraping-tools/https-proxy",
      isActive: true,
    },
    {
      id: "http-tunneling",
      name: "HTTP Tunneling",
      description: "Securely tunnel HTTP traffic",
      path: "",
      isActive: false,
    },
    {
      id: "socks5-proxy",
      name: "SOCKS5 Proxy",
      description: "Flexible protocol routing",
      path: "",
      isActive: false,
    },
    {
      id: "web-scraper",
      name: "Web Scraper",
      description: "Extract data from websites",
      path: "",
      isActive: false,
    },
    {
      id: "rotating-proxy",
      name: "Rotating Proxy",
      description: "Dynamic IP rotation",
      path: "",
      isActive: false,
    },
    {
      id: "geo-spoofing",
      name: "Geo-Spoofing",
      description: "Simulate locations worldwide",
      path: "",
      isActive: false,
    },
    {
      id: "api-rate-limiter",
      name: "API Rate Limiter",
      description: "Control API request rates",
      path: "",
      isActive: false,
    },
    {
      id: "data-cache",
      name: "Data Cache",
      description: "Store and retrieve data fast",
      path: "",
      isActive: false,
    },
    {
      id: "vpn-service",
      name: "VPN Service",
      description: "Private network access",
      path: "",
      isActive: false,
    },
  ];

  return (
    <Container maxW="5xl" py={12}>
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6}>
        {products.map((product) => (
          <Box
            key={product.id}
            p={5}
            bg="white"
            borderRadius="md"
            boxShadow="sm"
            opacity={product.isActive ? 1 : 0.5}
            cursor={product.isActive ? "pointer" : "not-allowed"}
            _hover={
              product.isActive
                ? { boxShadow: "md", transform: "translateY(-2px)", transition: "all 0.2s" }
                : {}
            }
            onClick={product.isActive ? () => navigate({ to: product.path }) : undefined}
          >
            <Text fontSize="xl" fontWeight="semibold" color={product.isActive ? "gray.800" : "gray.500"} mb={2}>
              {product.name}
            </Text>
            <Text fontSize="sm" color={product.isActive ? "gray.500" : "gray.400"}>
              {product.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Dashboard;