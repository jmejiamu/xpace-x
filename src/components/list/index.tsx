import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import { Launches, LaunchesPast, Rocket } from "../interfaces";

interface UserProps {
  id: string;
  mission_name: string;
  launch_date_local: Date;
  rocket: Rocket;
}

interface Data {
  data: [];
}

const List = (props: any) => {
  return (
    <div className="container">
      {props.data.map((item: any) => {
        return (
          <Link to={`/details/${item.id}`}>
            <p className="list-styles">
              <strong>Mission Name:</strong> {item.mission_name}
              <br />
              <strong>Lunch Date:</strong>
              {item.launch_date_local}
              <br />
              <strong>Rocket Name: </strong>
              {item.rocket.rocket.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default List;
