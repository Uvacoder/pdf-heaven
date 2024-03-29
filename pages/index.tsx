import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box, Container, Heading, Image, HStack, VStack, Text, SimpleGrid, Divider } from "@chakra-ui/react";
import { useColorMode } from '@chakra-ui/react';

// @ts-nocheck
const HomePage: NextPage = () => {

    const { colorMode } = useColorMode()

    return (
        <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
                // @ts-ignore
                <Box bg="transparent">
                    <VStack>
                        <Heading as="h2" color={colorMode === "light" ? 'deepBlue' : 'lightBg'} variant={"section-title"} mt={30}> Home </Heading>
                    </VStack>
                </Box>
            </Box>
        </Box>
    )
}

export default HomePage;