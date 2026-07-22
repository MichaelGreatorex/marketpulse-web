import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type MetricCardProps = {
    title: string;
    value: string | number;
    subtitle?: string;
};

export default function MetricCard({
    title,
    value,
    subtitle,
}: MetricCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent>
                <p className="text-2xl font-bold">
                    {value}
                </p>
                {subtitle && (
                    <p className="text-sm text-muted-foreground">
                        {subtitle}
                    </p>
                )}
            </CardContent>
        </Card>
    );
}