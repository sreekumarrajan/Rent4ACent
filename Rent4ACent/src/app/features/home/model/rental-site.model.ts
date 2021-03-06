import { IAddress } from './address.model';

export interface IRentalSite {
  id: string;
  monthlyRent: number;
  size: number;
  address: IAddress;
}

