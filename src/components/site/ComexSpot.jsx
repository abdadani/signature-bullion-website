import { memo, useMemo } from 'react';
import './index.css';
import downArrow from '../../assets/svg/down.svg';
import upArrow from '../../assets/svg/up.svg';

const getTextColorClass = (change) => {
    if (change === 'up') return 'text-green-500';
    if (change === 'down') return 'text-red-500';
    return 'text-white';
};

const getArrowIcon = (change) => {
    if (change === 'up') return <img src={upArrow} className="h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7 shrink-0" alt="up" />;
    if (change === 'down') return <img src={downArrow} className="h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7 shrink-0" alt="down" />;
    return null;
};

/*
 * Responsive price board.
 *  - phones   : 2 columns
 *  - >=640px  : 3 columns
 *  - sizes are rem based, so on TVs (root font-size scales up from 1536px)
 *    the whole board grows automatically and stays readable from a distance.
 */
// Static class names so Tailwind can see them.
const SPAN_SM = { 1: 'sm:col-span-1', 2: 'sm:col-span-2', 3: 'sm:col-span-3' };

const ComexSpot = ({ title, data, titleStyle = '' }) => {
    const items = useMemo(() => data, [data]);

    // When the number of values doesn't fill the last grid row (e.g. Silver has 5),
    // let the last cell stretch so there is never an empty hole in the board.
    const smRemainder = items.length % 3;
    const lastSpanSm = smRemainder === 0 ? 1 : 3 - smRemainder + 1;
    const lastSpanMobile = items.length % 2 === 0 ? '' : 'col-span-2';

    return (
        <div className="w-full min-w-0 text-white">
            <h2
                className={`mb-2 text-center text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl ${titleStyle} hero-section-font`}
            >
                {title}
            </h2>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 sm:rounded-3xl">
                {items.map((item, idx) => (
                    <div
                        key={item.label}
                        className={`min-w-0 bg-[#3c0813]/70 ${idx === items.length - 1 ? `${lastSpanMobile} ${SPAN_SM[lastSpanSm]}` : ''} px-2 py-3 text-center transition-colors duration-300 hover:bg-gray-400/20 sm:px-3 sm:py-4 xl:py-5`}
                    >
                        <p className="truncate text-sm text-white/90 sm:text-base md:text-lg xl:text-2xl hero-section-font">
                            {item.label}
                        </p>
                        <div className="mt-0.5 flex items-center justify-center gap-1 text-lg font-semibold sm:text-xl md:text-2xl xl:text-3xl">
                            <span className={`${getTextColorClass(item.change)} tabular-nums hero-section-rate`}>
                                {typeof item.value === 'number' ? item.value.toFixed(2) : item.value}
                            </span>
                            {getArrowIcon(item.change)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(ComexSpot);
