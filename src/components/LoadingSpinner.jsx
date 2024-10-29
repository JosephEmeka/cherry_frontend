import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingSpinner = ({ size = 50, color = "#4A90E2" }) => (
    <div className="flex justify-center items-center h-full">
        <ClipLoader size={size} color={color} />
    </div>
);

export default LoadingSpinner;
