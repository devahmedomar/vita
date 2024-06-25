export interface IAddress {
  regionId: number;
  zipCode: number;
  description: string;
}

export interface ICountry {
  id: number;
  en: string;
  ar: string;
  fr: string;
  cities: ICity[];
}

export interface ICity {
  id: number;
  en: string;
  ar: string;
  fr: string;
  regions: IRegion[];
}

export interface IRegion {
  id: number;
  en: string;
  ar: string;
  fr: string;
}
export interface IShippingAddress {
  addressId: number;
  country: string;
  city: string;
  region: string;
  description: string;
  zipCode: number;
}
