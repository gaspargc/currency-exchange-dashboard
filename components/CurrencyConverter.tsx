'use client';
import { useState, useEffect } from "react";
import CurrencySelector from "./CurrencySelector";
import { IoSwapVertical } from "react-icons/io5";

type Props = {
  currencies: { symbol: string; name: string }[];
};

const CurrencyConverter = ({ currencies }: Props) => {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState(currencies[0]?.symbol || "");
  const [to, setTo] = useState(currencies[1]?.symbol || "");
  const [rate, setRate] = useState("");
  const [converted, setConverted] = useState("");

  useEffect(() => {
    async function fetchRate() {
      if (!from || !to) return;
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!baseUrl) return;

      if (from === to) {
        setRate("1");
        return;
      }
      
      await fetch(`${baseUrl}/latest?base=${from}&symbols=${to}`)
        .then((resp) => resp.json())
        .then((data) => {
          setRate(data.rates[to].toFixed(4));
        });
    }

    fetchRate();
  }, [from, to]);
  
  useEffect(() => {

    if (!rate || !amount) return;

    async function convert() {
      const convertedAmount = (Number(amount) * parseFloat(rate)).toFixed(2);
      setConverted(convertedAmount);
    }

    convert();
  }, [amount, rate, from, to]);

  const handleInput = (input: string) => {
    if (/^\d*([.]\d*)?$/.test(input)) {
        setAmount(input);
    }
  };

  function swap() {
    setFrom(to);
    setTo(from);
  }

  return (
      <div className="self-start rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl">
        <div className="space-y-3">
          {/* Amount */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
            <h3 className="text-sm text-slate-400">Input amount</h3>
              <div className="mt-1 flex items-baseline gap-2">
                <input
                  value={amount}
                  onChange={(e) => handleInput(e.target.value)}
                  inputMode="decimal"
                  placeholder="0"
                  className="text-2xl font-semibold mt-1 w-full bg-transparent outline-none placeholder:text-slate-600"
                />
                <div className="w-24">
                  <CurrencySelector value={from} onChange={setFrom} currencies={currencies} />
                </div>
              </div>
            </div>

          {/* Rate and Swap*/}
          <div className="flex items-center justify-between">
            <label className="text-sm text-slate-300">Rate — 1 {from} = {rate} {to}</label>
            <div className="mx-4 cursor-pointer rounded-full bg-slate-800 p-2 hover:bg-slate-700" onClick={swap} title="Swap currencies">
              <IoSwapVertical />
            </div>
          </div>

          {/* Result */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
            <div className="text-sm text-slate-400">You get</div>
            <div className="mt-1 flex items-baseline gap-2">
              <div className="text-2xl font-semibold mt-1 w-full">
                {converted || "0"}
              </div>
              <div className="w-24">
                <CurrencySelector value={to} onChange={setTo} currencies={currencies} />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CurrencyConverter;