export interface Home {
  address: string;
  id: string;
  size?: number;
  rooms?: number;
  rent?: number;
  tenant?: number;
}

export interface NewHome {
  address: string;
}

export interface SearchResult {
  label: string;
  id: string;
}

export interface DawaSearchResult {
  tekst: string;
  adresse: any;
}
