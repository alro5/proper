export interface Home {
  address: string;
  id: string;
  size?: number;
  rooms?: number;
  rent?: number;
  tenant?: number;
}

export interface SearchResult {
  label: string;
  id: string;
}
