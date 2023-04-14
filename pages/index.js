import Container from '../components/container'
import ExperienceList from '../components/experience-list'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllExperiencessForHome, getUnitForHome } from '../lib/api'
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
          <ExperienceList experiences={allExperience} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const unit = await getUnitForHome()
  const allExperience = await getAllExperiencessForHome()
  return {
    props: { allExperience, unit },
  }
}
