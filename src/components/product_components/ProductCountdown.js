import React, { useState, useEffect } from "react";

const ProductCountdown = ({ initialTimeInSeconds }) => {
    const [time, setTime] = useState(initialTimeInSeconds);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Function to convert seconds into days, hours, minutes, and seconds
    const formatTime = (seconds) => {
        const days = Math.floor(seconds / (3600 * 24));
        const hours = Math.floor((seconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);

        return {
            days: days.toString().padStart(2, "0"),
            hours: hours.toString().padStart(2, "0"),
            minutes: minutes.toString().padStart(2, "0"),
            seconds: secs.toString().padStart(2, "0"),
        };
    };

    const { days, hours, minutes, seconds } = formatTime(time);

    return (
        <div className="text-[12px] leading-6 text-black cursor-pointer flex items-center my-2 pr-1">
            {/* Static time bar */}
            <div className="shrink-[99999999] relative h-[4px] min-w-[60px] w-[127px] bg-[rgba(0,0,0,.08)] rounded-[4px]">
                <div className="h-full rounded-full absolute bg-black pl-[65%]"></div>
                <img
                    aria-hidden="true"
                    alt=""
                    src="https://aimg.kwcdn.com/upload_aimg_b/lightningdeal/0b336583-85af-44eb-99bc-0e482fe884db.png?imageView2/2/w/1300/q/80/format/webp"
                    className="absolute w-[17px] h-[17px] top-1/2 -translate-y-1/2 ml-[max(0px,calc(65%-17px))]"
                />
            </div>

            {/* Countdown Timer */}
            <div
                dir="ltr"
                className="text-[12px] font-bold leading-6 ml-[5px] w-[90px] flex items-center"
            >
                {parseInt(days) > 0 && <span>{days}:</span>} {/* Show days only if > 0 */}
                <span>{hours}:</span>
                <span>{minutes}:</span>
                <span>{seconds}</span>
            </div>
        </div>
    );
};

export default ProductCountdown;
