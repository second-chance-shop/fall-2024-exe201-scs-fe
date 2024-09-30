import React from "react";

const Copyright = () => {
    return (
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
        </div>
    );
};

export default Copyright;
