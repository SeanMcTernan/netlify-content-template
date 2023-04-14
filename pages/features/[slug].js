import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import FeatureBody from '../../components/feature-body'
import Header from '../../components/header'
import FeatureHeader from '../../components/feature-header'
import Layout from '../../components/layout'
import { getAllFeaturessWithSlug, getFeature } from '../../lib/api'
import FeatureTitle from '../../components/feature-title'

export default function Experience({ experience }) {
  const router = useRouter()

  if (!router.isFallback && !experience) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <FeatureTitle>Loading…</FeatureTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {experience.company.name}
                </title>
              </Head>
              <FeatureHeader
                featureName={experience.featureName}
                company={experience.company}
              />
              <FeatureBody description={experience.description} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const data = await getFeature(params.slug)

  return {
    props: {
      experience: data?.experience ?? null
    },
  }
}

export async function getStaticPaths() {
  const allExperiences = await getAllFeaturessWithSlug()
  return {
    paths: allExperiences?.map(({ slug }) => `/features/${slug}`) ?? [],
    fallback: true,
  }
}
