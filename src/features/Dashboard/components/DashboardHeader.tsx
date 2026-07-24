import LiveClock from "./LiveClock";
import type { MarketStatus } from "@/types/Dashboard";

type DashboardHeaderProps = {
    refreshing: boolean;
    marketStatus: MarketStatus;
};

export default function DashboardHeader({
    refreshing,
    marketStatus,
}: DashboardHeaderProps) {
    return (
        <header className="mb-10 flex items-start justify-between border-b pb-6">
            <div>
                <h1 className="text-4xl font-bold tracking-tight">
                    MarketPulse
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Live market intelligence platform
                </p>
            </div>

            <div className="flex flex-col items-end gap-2">
                <LiveClock />

                <div className="flex items-center gap-3 text-sm">
                    {refreshing && (
                        <span className="text-muted-foreground">
                            Refreshing...
                        </span>
                    )}

                    <span>
                        {marketStatus.flag}{" "}
                        {marketStatus.exchange}
                    </span>

                    <span
                        className={
                            marketStatus.isOpen
                                ? "font-medium text-green-600"
                                : "font-medium text-red-600"
                        }
                    >
                        {marketStatus.isOpen
                            ? "OPEN"
                            : "CLOSED"}
                    </span>
                </div>
            </div>
        </header>
    );
}