export interface Dashboard {
    trackedInstruments: number;
    marketPrices: number;
    lastImportUtc: string;
    instruments: DashboardInstrument[];
    systemStatus: SystemStatus;
    marketStatus: MarketStatus;
}

export interface DashboardInstrument {
    ticker: string;
    name: string;
    exchange: string;
}

export interface SystemStatus {
    healthy: boolean;
    lastAttemptUtc: string;
    lastSuccessfulRunUtc: string;
    lastError: string | null;
}

export interface MarketStatus {
    country: string;
    flag: string;
    exchange: string;
    isOpen: boolean;
    nextEvent: string;
}