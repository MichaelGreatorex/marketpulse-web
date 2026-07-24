import type {
    DashboardOverview,
    MarketStatus,
    SystemStatus,
} from "@/types/Dashboard";

import MetricsGrid from "./MetricsGrid";

type Props = {
    overview: DashboardOverview;
    marketStatus: MarketStatus;
    systemStatus: SystemStatus;
};

const OverviewSection = ({
    overview,
    marketStatus,
    systemStatus,
}: Props) => {
    return (
        <section className="space-y-4">
            <div>
                <h2 className="text-xl font-semibold">
                    System Overview
                </h2>

                <p className="text-muted-foreground">
                    Operational health of the MarketPulse platform.
                </p>
            </div>

            <MetricsGrid
                trackedInstruments={overview.trackedInstruments}
                marketPrices={overview.marketPrices}
                lastImport={overview.lastImportUtc}
                marketStatus={marketStatus}
                systemStatus={systemStatus}
            />
        </section>
    );
};

export default OverviewSection;