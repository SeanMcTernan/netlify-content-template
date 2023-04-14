const EXPERIENCE_GRAPHQL_FIELDS = `
slug
description
excerpt
company {
  name
  logo {
    url
  }
}
`

const PROFILE_GRAPHQL_FIELDS = `
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
  if (collectionName === 'profile') {
    return fetchResponse?.data?.profileCollection?.items?.[0]
  }
  return fetchResponse?.data?.experienceCollection?.items?.[0]
}

function extractEntries(fetchResponse) {
  return fetchResponse?.data?.experienceCollection?.items
}



export async function getAllExperiencesWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      experienceCollection(where: { slug_exists: true }) {
        items {
          ${EXPERIENCE_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractEntries(entries)
}

export async function getAllExperiencessForHome() {
  const entries = await fetchGraphQL(
    `query {
      experienceCollection(order: slug_ASC) {
        items {
          ${EXPERIENCE_GRAPHQL_FIELDS}
        }
      }
    }`,
  )
  return extractEntries(entries)
}

export async function getExperience(slug) {
  const entry = await fetchGraphQL(
    `query {
      experienceCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          ${EXPERIENCE_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return {
    experience: extractEntry(entry, 'experience')
  }
}


export async function getProfileForHome() {
  const entry = await fetchGraphQL(
    `query {
      profileCollection(limit: 1) {
        items {
          ${PROFILE_GRAPHQL_FIELDS}
        }
      }
    }`,
  )
  return extractEntry(entry, 'profile')
}
