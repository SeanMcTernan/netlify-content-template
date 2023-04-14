import Container from '../components/container'
import FeatureList from '../components/feature-list'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllFeaturesForHome, getUnitForHome } from '../lib/api'
import Head from 'next/head'


export default function Index({ allExperience, unit }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{unit.unitInformation.unitName}</title>
        </Head>
        <Container>
          <Intro unit={unit} />
          <FeatureList features={allExperience} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const unit = await getUnitForHome()
  const allExperience = await getAllFeaturesForHome()
  return {
    props: { allExperience, unit },
  }
}
