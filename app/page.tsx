import CurrencyConverter from "@/components/CurrencyConverter"; 
import CurrencySelector from "@/components/CurrencySelector";
import ExchangeRatesOverview from "@/components/ExchangeRatesOverview";

export default async function Home() {
  const base = process.env.API_BASE_URL!;
  const res = await fetch(`${base}/currencies`);
  if (!res.ok) throw new Error("Failed to load currencies");

  const data = await res.json();
  const currencies = Object.entries(data).map(([symbol, name]) => ({
    symbol: symbol,
    name: name as string
  }));


  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-10">
      <h1 className="text-center text-3xl sm:text-4xl font-bold">Welcome to your Currency Exchange Dashboard</h1>
      <p className="text-center mt-4 sm:mt-5 text-base sm:text-lg">Use this dashboard to convert and track currency exchange rates.</p>
      <div className="mt-8 sm:mt-10 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-10">
        <CurrencyConverter currencies={currencies} />
        <ExchangeRatesOverview currencies={currencies} />
      </div>
    </section>
  );
}
