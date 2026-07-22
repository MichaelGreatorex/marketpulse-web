import MetricCard from "./MetricCard";
import { formatUtcDate, relativeTime } from "@/lib/datetime";

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
    const now = new Date();

    const localDate = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    const localTime = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
    });

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-8">
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
                value={formatUtcDate(lastImport)}
                subtitle={relativeTime(lastImport)}
            />

            <MetricCard
                title="Date & Time"
                value={localDate}
                subtitle={localTime}
            />

            <MetricCard
                title="Status"
                value={status}
                subtitle="Last import successful"
            />
        </div>
    );
}