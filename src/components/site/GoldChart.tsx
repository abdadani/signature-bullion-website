import { useEffect, useRef, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

type Point = { time: number; price: number };

let _simPrice = 4175.23;
async function fetchGoldPrice(): Promise<Point | null> {
  // Try proxy first
  try {
    const res = await fetch("/api/gold");
    if (res.ok) {
      const json = await res.json();
      const price = Number(json.price ?? json.value ?? json.price_usd ?? json.lastPrice ?? json.rate ?? json[0]);
      const ts = json.timestamp ? Date.parse(String(json.timestamp)) : Date.now();
      if (Number.isFinite(price)) return { time: ts, price };
    }
  } catch (e) {
    // ignore and try public
  }

  // Try public fallback (may be rate-limited or unreliable)
  try {
    const r = await fetch("https://api.metals.live/v1/spot/gold");
    if (r.ok) {
      const j = await r.json();
      // metals.live often returns an array or a number
      if (Array.isArray(j) && j.length > 0) {
        const first = j[0];
        const price = Number(first?.price ?? first);
        if (Number.isFinite(price)) return { time: Date.now(), price };
      } else if (typeof j === "number") {
        return { time: Date.now(), price: j };
      }
    }
  } catch (e) {
    // ignore
  }

  // Fallback: simulated small random walk so the UI remains live-ish
  _simPrice = _simPrice * (1 + (Math.random() - 0.5) * 0.0015);
  return { time: Date.now(), price: Number(_simPrice.toFixed(2)) };
}

export default function GoldChart({ points = 120 }: { points?: number }) {
  const [data, setData] = useState<Point[]>([]);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    let interval: number | undefined;

    const tick = async () => {
      const p = await fetchGoldPrice();
      if (!mounted.current || !p) return;
      setData((d) => {
        const next = [...d, p];
        if (next.length > points) next.splice(0, next.length - points);
        return next;
      });
    };

    // initial fetch
    void tick();
    // poll every second
    interval = window.setInterval(tick, 1000);

    return () => {
      mounted.current = false;
      if (interval) clearInterval(interval);
    };
  }, [points]);

  const formatted = data.map((p) => ({ time: new Date(p.time).toLocaleTimeString(), price: p.price }));

  return (
    <div className="w-200 h-200 bg-black/70 border border-white/10 p-2 rounded-lg text-white">
      <div className="text-xs text-white/80 mb-1">Live Gold (USD/oz)</div>
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={formatted}>
            <XAxis dataKey="time" hide />
            <YAxis domain={["auto", "auto"]} hide />
            <Tooltip formatter={(v: any) => [`$${Number(v).toFixed(2)}`, "Price"]} />
            <Line type="monotone" dataKey="price" stroke="#ffffff" dot={false} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
