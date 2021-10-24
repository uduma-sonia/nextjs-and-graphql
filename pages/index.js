import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Countries from "../components/countries";

export default function Home(results) {
  return (
    <section className="bg-gray-700 font-manrope text-gray-100">
      <div className="container mx-auto">
        <div className="text-center py-14">
          <h1 className="text-4xl font-bold">Countries Data</h1>
        </div>

        <Countries countries={results} />
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        countries {
          name
          native
          capital
          currency
          continent {
            name
          }
          phone
          languages {
            name
          }
        }
      }
    `,
  });

  return {
    props: {
      data: data.countries,
    },
  };
}
