export enum Countries {
  US = "US",
  Brazil = "Brazil",
  Global = "Global",
}

export interface ICountry {
  name: string;
  code: string;
}

export interface ICountryCity {
  country: {
    name: string;
    code: string;
  };
  cities: string[];
}
