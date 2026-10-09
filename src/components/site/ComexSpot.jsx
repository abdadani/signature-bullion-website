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
    if (change === 'up') return <img src={upArrow} className="w-7 h-7 pl-1" alt="up" />;
    if (change === 'down') return <img src={downArrow} className="w-7 h-7 pl-1" alt="down" />;
    return null;
};

const ComexSpot = ({ title, data, titleStyle = '' }) => {
    const items = useMemo(() => data, [data]);

    return (
        <div className="px-8 py-4 rounded-3xl text-white w-fit mx-auto">
            <h2
                className={`xl:text-[60px] md:text-[54px] sm:text-[44px] text-[32px] font-semibold text-center mb-1 ${titleStyle} hero-section-font`}
            >
                {title}
            </h2>
            <div className="bg-gray-400/15 hover:bg-gray-400/20 border-hover transition-all duration-300 ease-in-out px-6 sm:px-10 py-7 lg:rounded-full rounded-2xl flex items-center justify-center gap-6 flex-wrap">
                {items.map((item) => (
                    <div key={item.label} className={`w-[200px] text-center lg:border-l border-[#ffffff33] first:border-none ${item.label === 'Low' ? 'lg:border-none' : ''} first:pl-0`}>
                        <p className="md:text-[44px] md:text-[40px] text-[32px] text-[#fff] hero-section-font">{item.label}</p>
                        <div className="md:text-[22px] xl:text-[34px] text-[16px] flex items-center justify-center gap-1 font-semibold">
                            <span className={`${getTextColorClass(item.change)} hero-section-rate`}>
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
