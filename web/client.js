const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'x4u138g7',
  dataset: 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})

module.exports = client
