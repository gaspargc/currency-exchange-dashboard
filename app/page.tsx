import CurrencyConverter from "@/components/CurrencyConverter"; 

export default async function Home() {
  const base = process.env.API_BASE_URL!;
  const res = await fetch(`${base}/currencies`);
  if (!res.ok) throw new Error("Failed to load currencies");

  const data = await res.json();
  const currencies = Object.entries(data).map(([symbol, name]) => ({
    symbol: symbol,
    name,
  }));


  return (
    <section>
      <h1 className="text-center text-4xl font-bold">Welcome to your Currency Exchange Dashboard</h1>
      <p className="text-center mt-5 text-lg">Use this dashboard to convert and track currency exchange rates.</p>
      <div className="mt-10 flex justify-center">
        <CurrencyConverter currencies={currencies} />
      </div>
    </section>
  );
}
