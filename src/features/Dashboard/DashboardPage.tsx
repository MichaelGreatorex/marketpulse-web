import { useDashboard } from "./hooks/useDashboard";

const DashboardPage = () => {
    const { data, isLoading } = useDashboard();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Tracked Instruments: {data?.trackedInstruments}</p>
            <p>Market Prices: {data?.marketPrices}</p>
            <p>Last Import: {data?.lastImportUtc}</p>
            <p>Status: {data?.status}</p>
            <ul>
                {data?.instruments.map((instrument) => (
                    <li key={instrument.ticker}>
                        {instrument.ticker} - {instrument.name} ({instrument.exchange})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DashboardPage;