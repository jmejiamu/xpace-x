import { useQuery } from "@apollo/client";

import { useParams } from "react-router-dom";
import { GET_DATA } from "../../gql/quiries";
import "./styles.css";

const Details = (props: any) => {
  const { loading, error, data } = useQuery(GET_DATA);

  let { id } = useParams();
  console.log(">>>>>", data?.launchesPast);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <p>
        {data.launchesPast.map(
          (data: any) =>
            data.id === id && (
              <div className="list-styles" key={data.id}>
                {data.mission_name}
              </div>
            )
        )}
      </p>
    </div>
  );
};

export default Details;
