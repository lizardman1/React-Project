import React from 'react';

export function TipResult({ total, tip }) {
    return (
        <div>
            {total === null || tip === null ? (
                <p><span className="text-[#c5e5e8]">Results will appear here.</span></p>
            ) : (
                <>
                    <p><span className="text-[#c5e5e8]">Total bill: £{total}</span></p>
                    <p><span className="text-[#c5e5e8]">Each person should pay: £{tip}</span></p>
                </>
            )}
        </div>
    );
}
