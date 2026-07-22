export function formatUtcDate(date?: string): string {
    if (!date) {
        return "Never";
    }

    return (
        new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "UTC",
        }).format(new Date(date)) + " UTC"
    );
}

export function relativeTime(date: string): string {
    
    if (!date) {
        return "No successful imports";
    }
    
    const diff =
        Date.now() - new Date(date).getTime();

    const minutes = Math.floor(diff / 60000);

    if (minutes < 1)
        return "Just now";

    if (minutes === 1)
        return "1 minute ago";

    if (minutes < 60)
        return `${minutes} minutes ago`;

    const hours = Math.floor(minutes / 60);

    if (hours === 1)
        return "1 hour ago";

    return `${hours} hours ago`;
}