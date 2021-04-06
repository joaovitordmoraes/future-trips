import HomeTemplate from 'templates/Home'
import { MapProps } from 'components/Map'
import client from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import { GetPlaceQuery } from 'graphql/generated/graphql'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlaceQuery>(GET_PLACES)

  return {
    revalidate: 5,
    props: {
      places
    }
  }
}
