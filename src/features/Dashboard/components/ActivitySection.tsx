import type { SystemStatus } from "@/types/Dashboard";

import {
    formatUtcDateTime,
    formatRelativeTime,
} from "@/lib/datetime";

type Props = {
    systemStatus: SystemStatus;
};

const ActivitySection = ({ systemStatus }: Props) => {
    return (
        <section className="space-y-4">
            <div>
                <h2 className="text-xl font-semibold">
                    Activity
                </h2>

                <p className="text-muted-foreground">
                    Recent background worker activity.
                </p>
            </div>

            <div className="rounded-lg border p-6 space-y-3">
                <div>
                    Last successful import
                </div>

                <div className="font-medium">
                    {formatUtcDateTime(
                        systemStatus.lastSuccessfulRunUtc
                    )}
                </div>

                <div className="text-sm text-muted-foreground">
                    {formatRelativeTime(
                        systemStatus.lastSuccessfulRunUtc
                    )}
                </div>
            </div>
        </section>
    );
};

export default ActivitySection;