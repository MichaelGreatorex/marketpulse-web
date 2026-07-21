import AppRouter from "./router/AppRouter";
import QueryProvider from "./providers/QueryProvider";

export default function App() {
    return (
        <QueryProvider>
            <AppRouter />
        </QueryProvider>
    );
}