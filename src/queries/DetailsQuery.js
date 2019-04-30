import React from "react";
import { QueryRenderer, graphql } from "react-relay";

import { DetailsScreen } from "../screens";
import env from "../environment";
import Loading from "../components/Loading";
import Error from "../components/Error";

const query = graphql`
  query DetailsQuery($input: ID!) {
    wine(id: $input) {
      name
      brand
      classification
      color
      sugarTeor
      note
    }
  }
`;

export default ({ params }) => (
  <QueryRenderer
    environment={env}
    query={query}
    variables={{ input: params.id }}
    render={({ error, props }) => {
      if (error) {
        return <Error message={error.message} />;
      } else if (props) {
        return <DetailsScreen {...props.wine} />;
      }
      return <Loading />;
    }}
  />
);
