import heroImg from "@/assets/hero-gold.jpg";
import heroImgNew from "@/assets/maroon.jpg";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from 'react';
import './index.css';
import ComexSpot from './ComexSpot';
import { ref, onValue } from 'firebase/database';
import { db } from '@/firebase';

const Hero = () => {

const isValidNumber = (val: string | number) => val !== '-' && !isNaN(parseFloat(val as string));
const prevPricesRef = useRef<{
  goldBid?: number;
  goldAsk?: number;
  silverBid?: number;
  silverAsk?: number;
}>({});

    const [prices, setPrices] = useState({
        goldBid: '-',
        goldAsk: '-',
        goldHigh: '-',
        goldLow: '-',
        goldBidChange: '',
        goldAskChange: '',
        goldAMFix: '-',
        goldPMFix: '-',

        silverBid: '-',
        silverAsk: '-',
        silverHigh: '-',
        silverLow: '-',
        silverBidChange: '',
        silverAskChange: '',
        silverFix: '-',
    });

    useEffect(() => {
        const pricesRef = ref(db, 'liverates');

        const unsubscribe = onValue(pricesRef, (snapshot) => {
            const data = snapshot.val();
            if (!data) return;

            const gold = data.GOLD;
            const silver = data.SILVER;

            const goldAMFix = data.GOLDAMFIX;
            const goldPMFix = data.GOLDPMFIX;
            const silverFix = data.SILVERFIX;

            const prev = prevPricesRef.current;

            const updatedPrices = {
                goldBid: gold ? gold.Bid.toFixed(2) : "-",
                goldAsk: gold ? gold.Ask.toFixed(2) : "-",
                goldHigh: gold ? gold.High.toFixed(2) : "-",
                goldLow: gold ? gold.Low.toFixed(2) : "-",

                goldBidChange:
                    prev.goldBid && gold && prev.goldBid < gold.Bid ? "up" :
                    prev.goldBid && gold && prev.goldBid > gold.Bid ? "down" : "",

                goldAskChange:
                    prev.goldAsk && gold && prev.goldAsk < gold.Ask ? "up" :
                    prev.goldAsk && gold && prev.goldAsk > gold.Ask ? "down" : "",

                goldAMFix: goldAMFix ? goldAMFix.Bid.toFixed(2) : "-",
                goldPMFix: goldPMFix ? goldPMFix.Bid.toFixed(2) : "-",

                silverBid: silver ? silver.Bid.toFixed(2) : "-",
                silverAsk: silver ? silver.Ask.toFixed(2) : "-",
                silverHigh: silver ? silver.High.toFixed(2) : "-",
                silverLow: silver ? silver.Low.toFixed(2) : "-",

                silverBidChange:
                    prev.silverBid && silver && prev.silverBid < silver.Bid ? "up" :
                    prev.silverBid && silver && prev.silverBid > silver.Bid ? "down" : "",

                silverAskChange:
                    prev.silverAsk && silver && prev.silverAsk < silver.Ask ? "up" :
                    prev.silverAsk && silver && prev.silverAsk > silver.Ask ? "down" : "",

                silverFix: silverFix ? silverFix.Bid.toFixed(2) : "-",
            };

            prevPricesRef.current = {
                goldBid: gold?.Bid,
                goldAsk: gold?.Ask,
                silverBid: silver?.Bid,
                silverAsk: silver?.Ask
            };

            setPrices((old) => {
                if (JSON.stringify(old) === JSON.stringify(updatedPrices)) return old;
                return updatedPrices;
            });
        });

        return () => unsubscribe();
    }, []);

    const goldData = useMemo(
        () => [
            { label: 'Bid', value: prices.goldBid, change: prices.goldBidChange },
            { label: 'Ask', value: prices.goldAsk, change: prices.goldAskChange },
            {
                label: 'High',
                value: prices.goldHigh,
                change: isValidNumber(prices.goldHigh) ? 'up' : '',
            },
            {
                label: 'Low',
                value: prices.goldLow,
                change: isValidNumber(prices.goldLow) ? 'down' : '',
            },
            {
                label: 'Gold AM',
                value: prices.goldAMFix,
                change: '',
            },
            {
                label: 'Gold PM',
                value: prices.goldPMFix,
                change: '',
            },
        ],
        [
            prices.goldBid,
            prices.goldAsk,
            prices.goldHigh,
            prices.goldLow,
            prices.goldBidChange,
            prices.goldAskChange,
            prices.goldAMFix,
            prices.goldPMFix,
        ]
    );

    const silverData = useMemo(
        () => [
            { label: 'Bid', value: prices.silverBid, change: prices.silverBidChange },
            { label: 'Ask', value: prices.silverAsk, change: prices.silverAskChange },
            {
                label: 'High',
                value: prices.silverHigh,
                change: isValidNumber(prices.silverHigh) ? 'up' : '',
            },
            {
                label: 'Low',
                value: prices.silverLow,
                change: isValidNumber(prices.silverLow) ? 'down' : '',
            },
            {
                label: 'Silver Fix',
                value: prices.silverFix,
                change: '',
            },
        ],
        [
            prices.silverBid,
            prices.silverAsk,
            prices.silverHigh,
            prices.silverLow,
            prices.silverBidChange,
            prices.silverAskChange,
            prices.silverFix,
        ]
    );


  return (
    <section id="home" className="relative min-h-[100vh] w-full overflow-hidden">
      <img src={heroImgNew} alt="Gold bars" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1088} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
      <div className="relative z-10 flex min-h-[100vh] items-center px-6 md:px-8 lg:px-16 pt-32">
        <div className="max-w-2xl text-white">
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] gold-text font-bold">
            Trusted Gold Bar Supplier in UAE
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/80 max-w-lg leading-relaxed">
            We serve gold traders with high-purity gold bars, transparent pricing, and trusted long-term partnerships.
          </p>
          <a href="#contact" className="mt-10 inline-flex items-center gap-3 rounded-full border border-[color:var(--gold)] px-8 py-3.5 text-sm font-medium text-white hover:bg-[color:var(--gold)] hover:text-[color:var(--ink)] transition-all">
            Get a Quote
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--gold)] text-[color:var(--ink)]">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
        <div className="home-hero-section">
          <ComexSpot title="Gold Spot" data={goldData} titleStyle="text-[#E4DE8C]" />
          <ComexSpot title="Silver Spot" data={silverData} titleStyle="text-gray-300" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
export { Hero };
