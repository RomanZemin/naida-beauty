export interface ServiceDetails {
  name: string;
  price?: string;
  options?: ServiceOptions[];
}

export interface ServiceOptions {
  name: string;
  price?: string;
  hasDash?: boolean;
}
