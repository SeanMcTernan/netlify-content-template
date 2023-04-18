const FEATURE_GRAPHQL_FIELDS = `
featureName
featureGraphic {
  url
}
slug
description
excerpt
company {
  name
  featureGraphic {
    url
  }
}
`

const UNIT_GRAPHQL_FIELDS = `
unitDescription
url
unitInformation {
  unitName
  image {
    url
  }
  leasingManagerName
  email
}
`

async function fetchGraphQL(query) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractEntry(fetchResponse, collectionName) {
  if (collectionName === 'unit') {
    return fetchResponse?.data?.unitCollection?.items?.[0]
  }
  return fetchResponse?.data?.experienceCollection?.items?.[0]
}

function extractEntries(fetchResponse) {
  return fetchResponse?.data?.experienceCollection?.items
}



export async function getAllFeaturessWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      experienceCollection(where: { slug_exists: true }) {
        items {
          ${FEATURE_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractEntries(entries)
}

export async function getAllFeaturesForHome() {
  const entries = await fetchGraphQL(
    `query {
      experienceCollection(order: slug_ASC) {
        items {
          ${FEATURE_GRAPHQL_FIELDS}
        }
      }
    }`,
  )
  return extractEntries(entries)
}

export async function getFeature(slug) {
  const entry = await fetchGraphQL(
    `query {
      experienceCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          ${FEATURE_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return {
    experience: extractEntry(entry, 'experience')
  }
}


export async function getUnitForHome() {
  const entry = await fetchGraphQL(
    `query {
      unitCollection(limit: 1) {
        items {
          ${UNIT_GRAPHQL_FIELDS}
        }
      }
    }`,
  )
  return extractEntry(entry, 'unit')
}
