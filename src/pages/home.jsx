import React from 'react'
import SectionNav from '../components/SectionNav'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import SVGSection from '../components/SVGSection'
import BlueCardSmall from '../components/BlueCardSmall'
import { Box, Grid, Stack, Typography } from '@mui/material'
import BlueCardLarge from '../components/BlueCardLarge'
import SearchFilter from '../components/SearchFilter'
import ItemsGrid from '../components/ItemsGrid'
import Timeline from '../components/Timeline'
import ComplexGrid from '../components/ComplexGrid'
import SimpleGrid from '../components/SimpleGrid'
import SimpleCard from '../components/SimpleCard'
import AccordionComp from '../components/AccordionComp'
import TabTables from '../components/TabTables'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <SectionNav sections={5} />
      <Hero />
      <Box width={'85%'} mx={'auto'}>
        <SectionTitle title={'Section 1'} />
        <SVGSection />
        <SectionTitle title={'Section 2'} />
        <Grid container spacing={2}>
          <Grid size={6}>
            <BlueCardLarge />
          </Grid>
          <Grid size={3}>
            <BlueCardSmall />
          </Grid>
          <Grid size={3}>
            <BlueCardSmall />
          </Grid>
        </Grid>
        <Typography variant='h6' fontWeight={800} textTransform={'uppercase'} color='primary' pt={10} pb={5}> LOREM IPSUMLOREM IPSUM </Typography>
        <Stack direction={'row'} minHeight={'80vh'}>
          <SearchFilter />
          <ItemsGrid />
        </Stack>
      </Box>
      <SectionTitle title={'Section 3'} />
      <Timeline />
      <Box width={'85%'} mx={'auto'} mt={10}>
        <ComplexGrid />
        <SectionTitle title={'Section 4'} />
        <Box display={'flex'}>
          <SimpleCard />
          <AccordionComp />
        </Box>
        <TabTables />
        <SectionTitle title={'Section 5'} />
        <SimpleGrid />
        <SocialMedia />
      </Box>
      <Footer />
    </>
  )
}

export default Home