export interface CountryData {
  flags?: {
    png: string;
    svg: string;
    alt: string;
  };
  name?: {
    common: string;
    official: string;
  };
  cca2?: string;
  idd: {
    root: string;
    suffixes: string[];
  };
  region?: string;
  subregion?: string;
  timezones?: string[];

  currencies?: {
    KES: {
      name: string;
      symbol: string;
    };
  };
  languages?: {
    eng: string;
    swa: string;
  };
}

export interface CountryDataOptions {
  name?: boolean;
  cca2?: boolean;
  currencies?: boolean;
  idd?: boolean;
  region?: boolean;
  subregion?: boolean;
  languages?: boolean;
  timezones?: boolean;
  flags?: boolean;
}
