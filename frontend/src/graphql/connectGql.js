import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";

export default function ConnectGql() {
  const makeClient = () => {
    return createClient({
      url: "http://host.docker.internal:3000/graphql",
      exchanges: [cacheExchange, fetchExchange],
    });
  };

  const { getClient } = registerUrql(makeClient);

  return getClient;
}
