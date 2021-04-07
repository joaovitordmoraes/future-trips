import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import client from 'graphql/client'
import { GetPlaceQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const { places } = await client.request<GetPlaceQuery>(GET_PLACES)

  const fields = places.map(({ slug }) => ({
    loc: `https://future-trips-joaovitordmoraes.vercel.app/${slug}`,
    lastmod: new Date().toISOString()
  }))

  fields.push(
    {
      loc: `https://future-trips-joaovitordmoraes.vercel.app/`,
      lastmod: new Date().toISOString()
    },
    {
      loc: `https://future-trips-joaovitordmoraes.vercel.app/about`,
      lastmod: new Date().toISOString()
    }
  )

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {}
