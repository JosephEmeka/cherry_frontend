import React from 'react';

const VectorCircles = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">

            {[...Array(20).keys()].map((index) => {
                const size = Math.random() * 50 + 20; // Random size between 20 and 70 pixels
                const left = Math.random() * 100; // Random horizontal position (0% to 100%)
                const top = Math.random() * 100; // Random vertical position (0% to 100%)
                const opacity = Math.random(); // Random opacity (0 to 1)

                const styles = {
                    position: 'absolute',
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: '50%', // Makes the div circular
                    backgroundColor: 'rgba(255, 255, 255, 0.25)', // Circle color
                    left: `${left}%`,
                    top: `${top}%`,
                    opacity: opacity,
                };

                return (
                    <div
                        key={index}
                        style={styles}
                        className="pointer-events-none" // Prevent interaction
                    />
                );
            })}
        </div>
    );
};

export default VectorCircles;
