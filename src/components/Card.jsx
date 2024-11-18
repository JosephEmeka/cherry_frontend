import React from 'react';

export function Card({ children, className = '' }) {
    return (
        <div className={`p-6 rounded-lg shadow-md ${className}`}>
            {children}
        </div>
    );
}

export function CardHeader({ children }) {
    return <div className="mb-4">{children}</div>;
}

export function CardTitle({ children, className = '' }) {
    return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
}

export function CardContent({ children }) {
    return <div className="text-sm text-gray-600">{children}</div>;
}
