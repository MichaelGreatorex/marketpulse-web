import { useDashboard } from "./hooks/useDashboard";
import DashboardHeader from "./components/DashboardHeader";
import MetricsGrid from "./components/MetricsGrid";
import { useEffect, useState } from "react";
import LiveClock from "@/components/ui/LiveClock";

const DashboardPage = () => {

    const {
        data,
        isPending,
        isFetching,
    } = useDashboard();

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (isPending) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>No data.</div>;
    }

    return (
        <main className="mx-auto max-w-7xl p-8">
            <DashboardHeader />
            <LiveClock />
            {isFetching && (
                <span className="text-sm text-muted-foreground">
                    Refreshing...
                </span>
            )}  
            <MetricsGrid
                trackedInstruments={data.overview.trackedInstruments ?? 0}
                marketPrices={data.overview.marketPrices ?? 0}
                lastImport={data.overview.lastImportUtc ?? ""}
                systemStatus={data.systemStatus}
                marketStatus={data.marketStatus}
            />
            <ul>
                {data.overview.instruments.map((instrument) => (
                    <li key={instrument.ticker}>
                        {instrument.ticker} - {instrument.name} ({instrument.exchange})
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default DashboardPage;