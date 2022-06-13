import { gql } from "@apollo/client";

export const GET_DATA = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
      rocket {
        rocket_name
        rocket {
          company
          name
          mass {
            kg
          }
        }
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
            payload_mass_lbs
          }
        }
      }

      launch_date_local
    }
  }
`;
