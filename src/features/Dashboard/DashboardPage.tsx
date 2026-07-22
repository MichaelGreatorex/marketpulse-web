import { useDashboard } from "./hooks/useDashboard";
import DashboardHeader from "./components/DashboardHeader";
import MetricsGrid from "./components/MetricsGrid";

const DashboardPage = () => {
    const { data, isLoading } = useDashboard();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <main className="mx-auto max-w-7xl p-8">
            <DashboardHeader />
            <MetricsGrid
                trackedInstruments={data?.trackedInstruments ?? 0}
                marketPrices={data?.marketPrices ?? 0}
                lastImport={data?.lastImportUtc ?? ""}
                systemStatus={data?.systemStatus ?? { healthy: false, lastAttemptUtc: "", lastSuccessfulRunUtc: "", lastError: null }}
            />
            <ul>
                {data?.instruments.map((instrument) => (
                    <li key={instrument.ticker}>
                        {instrument.ticker} - {instrument.name} ({instrument.exchange})
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default DashboardPage;