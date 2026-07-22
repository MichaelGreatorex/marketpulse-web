# MarketPulse Web

Frontend for the MarketPulse dashboard, built with React, TypeScript, and Vite.

## What Is Implemented

- Single-page dashboard route at `/`.
- Data loading via TanStack Query (`useDashboard`) from `/api/dashboard`.
- API client built with Axios and `VITE_API_URL` base URL.
- Dashboard header plus five metric cards:
  - Tracked Instruments
  - Market Prices
  - Last Import (formatted UTC + relative time)
  - Date & Time (local)
  - Status
- Basic instrument rendering as a list (`ticker - name (exchange)`).

## Tech Stack

- React 19 + TypeScript
- Vite 8
- React Router 7
- TanStack React Query 5
- Tailwind CSS 4 + shadcn UI styles
- Axios
- Oxlint + Prettier

## App Flow

1. `src/main.tsx` mounts the app inside `BrowserRouter`.
2. `src/app/App.tsx` wraps routing with `QueryProvider`.
3. `src/app/router/AppRouter.tsx` maps `/` to `DashboardPage`.
4. `DashboardPage` calls `useDashboard()` and renders metrics + instruments.

## API Contract Used by the UI

The UI expects `/api/dashboard` to return:

```ts
interface DashboardInstrument {
  ticker: string;
  name: string;
  exchange: string;
}

interface Dashboard {
  trackedInstruments: number;
  marketPrices: number;
  lastImportUtc: string;
  status: string;
  instruments: DashboardInstrument[];
}
```

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:5000
```

Use the correct backend URL for your environment.

## Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Type-check and build production assets
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run Oxlint

## Local Setup

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite (usually `http://localhost:5173`).

## Current Implementation Notes

- Loading state is implemented (`Loading...`), but no dedicated error-state UI is rendered yet.
- Instrument data is currently shown as a plain list, not the table component scaffold.
- Some scaffold files currently exist but are empty:
  - `src/app/AppLayout.tsx`
  - `src/app/providers/ThemeProvider.tsx`
  - `src/features/Dashboard/components/DashboardMetrics.tsx`
  - `src/features/Dashboard/components/InstrumentTable.tsx`
