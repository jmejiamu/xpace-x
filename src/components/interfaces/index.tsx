export interface LaunchesPast {
  id: string;
  mission_name: string;
  rocket: Rocket;
  launch_date_local: Date;
}

export interface Launches {
  launchesPast: LaunchesPast[];
}

export interface Rocket {
  rocket_name: string;
  rocket: RocketRocket;
  second_stage: SecondStage;
}

export interface RocketRocket {
  company: string;
  name: string;
  mass: Mass;
}

export interface Mass {
  kg: number;
}

export interface SecondStage {
  payloads: Payload[];
}

export interface Payload {
  payload_type: string;
  payload_mass_kg: number;
  payload_mass_lbs: number;
}
