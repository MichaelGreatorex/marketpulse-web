import MetricCard from "./MetricCard";
import { formatUtcDate, relativeTime } from "@/lib/datetime";
import type { SystemStatus } from "@/types/Dashboard";

type Props = {
    trackedInstruments: number;
    marketPrices: number;
    lastImport: string;
    systemStatus: SystemStatus;
};

export default function MetricsGrid({
    trackedInstruments,
    marketPrices,
    lastImport,
    systemStatus
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

    const lastSync = new Date(systemStatus.lastSuccessfulRunUtc);

        const nextSync = new Date(lastSync);
        nextSync.setHours(nextSync.getHours() + 1);

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
                title="System Health"
                value={systemStatus.healthy ? "🟢 Healthy" : "🔴 Error"}
                subtitle={`Last sync ${lastSync.toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                })}`}
            />
        </div>
    );
}