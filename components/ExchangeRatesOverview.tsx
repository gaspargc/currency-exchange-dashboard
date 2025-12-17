'use client';

import { useState, useEffect, use } from 'react';
import CurrencySelector from './CurrencySelector';
import { IoSwapVertical } from 'react-icons/io5';

type Props = {
  currencies: { symbol: string; name: string }[];
};

const ExchangeRatesOverview = ({ currencies }: Props) => {
  const [baseCurrency, setBaseCurrency] = useState(currencies[0]?.symbol || '');
  const [rates, setRates] = useState<{ [key: string]: number }>({});

  const [topRates, setTopRates] = useState<{ symbol: string; rate: number }[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMajorCurrencies() {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!baseUrl) return;
      setLoading(true);
      try {
        const response = await fetch(`${baseUrl}/latest?base=${baseCurrency}`);
        const data = await response.json();
        const top10 = Object.entries(data.rates)
          .map(([symbol, rate]) => ({
            symbol,
            rate: rate as number,
          }))
          .slice(0, 10);
        setTopRates(top10);
      } catch (e) {
        setTopRates([]);
      } finally {
        setLoading(false);
      }
    }
    fetchMajorCurrencies();
  }, [baseCurrency]);

  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl">
          <h2 className="text-2xl font-semibold">Exchange Rates Overview</h2>
          <div>
            <p className="mt-4 text-slate-400">Stay updated with the latest exchange rates between major currencies.</p>
            <CurrencySelector currencies={currencies} value={baseCurrency} onChange={setBaseCurrency}></CurrencySelector>
            <div className="mt-6 min-h-[180px]">
              {loading ? (
                <div className="flex justify-center items-center h-24 text-slate-400 animate-pulse">
                  Loading exchange rates...
                </div>
              ) : (
                <ul className="space-y-3">
                  {topRates.map(({ symbol, rate }) => (
                    <li key={symbol} className="flex justify-between rounded-lg bg-slate-800/50 px-4 py-2">
                      <span>{symbol}</span>
                      <span>{rate.toFixed(4)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
    </div>
    );
};

export default ExchangeRatesOverview;