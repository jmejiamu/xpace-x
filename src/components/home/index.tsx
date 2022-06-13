import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
// import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import { GET_DATA } from "../../gql/quiries";
import List from "../list";
import { Launches, LaunchesPast } from "../interfaces/index";

const Home = () => {
  const { loading, error, data } = useQuery<Launches>(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <div>
        <List data={data?.launchesPast} />
      </div>
    </div>
  );
};

export default Home;
