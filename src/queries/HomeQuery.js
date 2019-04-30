import React from "react";
import { QueryRenderer, graphql } from "react-relay";

import { HomeScreen } from "../screens";
import env from "../environment";
import Error from "../components/Error";
import Loading from "../components/Loading";

const query = graphql`
  query HomeQuery {
    wines {
      edges {
        node {
          id
          name
          brand
        }
      }
    }
  }
`;

export default ({ navigation }) => (
  <QueryRenderer
    environment={env}
    query={query}
    render={({ error, props }) => {
      if (error) {
        return <Error message={error.message} />;
      } else if (props) {
        return <HomeScreen wines={props.wines.edges} navigation={navigation} />;
      }
      return <Loading />;
    }}
  />
);
