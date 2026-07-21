import { api } from "./client";
import type { Dashboard } from "@/types/Dashboard";

export async function getDashboard(): Promise<Dashboard> {
    const response = await api.get<Dashboard>("/api/dashboard");

    return response.data;
}