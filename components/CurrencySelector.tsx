'use client';

type Props = {
  value: string;
  onChange: (value: string) => void;
  currencies: { symbol: string; name: string }[];
};

export default function CurrencySelector({
  value,
  onChange,
  currencies,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
    >
      {currencies.map((c) => (
        <option key={c.symbol} value={c.symbol}>
          {c.symbol}
        </option>
      ))}
    </select>
  );
}
