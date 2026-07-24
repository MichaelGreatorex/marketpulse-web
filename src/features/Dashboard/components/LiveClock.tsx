import { useEffect, useState } from "react";

export default function LiveClock() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="text-3xl font-semibold">
                {now.toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })}
            </div>

            <div className="text-sm text-muted-foreground">
                {now.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })}
            </div>
        </>
    );
}