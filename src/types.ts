export interface Airline {
    _id: string;
    name: string;
    country: string;
    logo: string;
    slogan: string;
    head_quarters: string;
    website: string;
    established: string;
}

export interface Passenger {
    _id: string;
    name: string;
    trips: number;
    airline: Airline[];
}
