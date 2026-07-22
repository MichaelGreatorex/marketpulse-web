import MetricCard from "./MetricCard";

type Props = {
    trackedInstruments: number;
    marketPrices: number;
    lastImport: string;
    status: string;
};

export default function MetricsGrid({
    trackedInstruments,
    marketPrices,
    lastImport,
    status,
}: Props) {
    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 mb-8">
            <MetricCard
                title="Tracked Instruments"
                value={trackedInstruments}
            />

            <MetricCard
                title="Market Prices"
                value={marketPrices}
            />

            <MetricCard
                title="Last Import"
                value={lastImport}
            />

            <MetricCard
                title="Status"
                value={status}
            />
        </div>
    );
}