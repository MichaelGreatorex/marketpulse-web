import DashboardHeader from "./components/DashboardHeader";
import OverviewSection from "./components/OverviewSection";
import LiveMarketSection from "./components/LiveMarketSection";
import ActivitySection from "./components/ActivitySection";

import { useDashboard } from "./hooks/useDashboard";

const DashboardPage = () => {
    const {
        data,
        isPending,
        isFetching,
    } = useDashboard();

    if (isPending) {
        return (
            <div className="p-8 text-muted-foreground">
                Loading dashboard...
            </div>
        );
    }

    if (!data) {
        return (
            <div className="p-8 text-muted-foreground">
                Unable to load dashboard.
            </div>
        );
    }

    return (
        <main className="mx-auto max-w-7xl space-y-10 p-8">

            <DashboardHeader
                refreshing={isFetching}
                marketStatus={data.marketStatus}
            />

            <OverviewSection
                overview={data.overview}
                systemStatus={data.systemStatus}
                marketStatus={data.marketStatus}
            />

            <LiveMarketSection
                overview={data.overview}
            />

            <ActivitySection
                systemStatus={data.systemStatus}
            />

        </main>
    );
};

export default DashboardPage;