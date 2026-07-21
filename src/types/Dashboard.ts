export interface DashboardInstrument {
  ticker: string;
  name: string;
  exchange: string;
}

export interface Dashboard {
  trackedInstruments: number;
  marketPrices: number;
  lastImportUtc: string;
  status: string;
  instruments: DashboardInstrument[];
}