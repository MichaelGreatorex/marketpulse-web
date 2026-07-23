import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "../../../api/dashboard";

export function useDashboard() {
   
    return useQuery({
        queryKey: ["dashboard"],
        queryFn: getDashboard,

        // Refresh every minute
        refetchInterval: 60_000,

        // Continue refreshing even if the tab isn't focused
        refetchIntervalInBackground: true,

        // Refresh when returning to the tab
        refetchOnWindowFocus: true,
    });
}