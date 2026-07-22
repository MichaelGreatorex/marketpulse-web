import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type MetricCardProps = {
    title: string;
    value: string | number;
};

export default function MetricCard({
    title,
    value,
}: MetricCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent>
                <p className="text-3xl font-bold">
                    {value}
                </p>
            </CardContent>
        </Card>
    );
}