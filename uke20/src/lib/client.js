import sanityClient from '@sanity/client'

const options = {
  projectId: '8e57jokm',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: ProcessingInstruction.env.REACT_APP_SANITY_TOKEN,
}

const client = sanityClient({ ...options, useCdn: false })

export default client
