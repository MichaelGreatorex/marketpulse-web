import type { DashboardOverview } from "@/types/Dashboard";

type Props = {
    overview: DashboardOverview;
};

const LiveMarketSection = ({ overview }: Props) => {
    return (
        <section className="space-y-4">
            <div>
                <h2 className="text-xl font-semibold">
                    Live Market
                </h2>

                <p className="text-muted-foreground">
                    Latest instruments currently being monitored.
                </p>
            </div>

            <div className="rounded-lg border p-6">
                <ul className="space-y-2">
                    {overview.instruments.map((instrument) => (
                        <li key={instrument.ticker}>
                            {instrument.ticker} — {instrument.name}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default LiveMarketSection;