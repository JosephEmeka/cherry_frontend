import React from 'react';

export default function PrimaryButton({ text, onClick, bgColor = 'bg-rose-600', hoverColor = 'hover:bg-rose-700', textColor = 'text-white' }) {
    return (
        <button
            className={`w-full ${bgColor} ${hoverColor} ${textColor} rounded-lg py-2 font-semibold transition duration-300`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
