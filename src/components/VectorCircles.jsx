import React from 'react';

const VectorCircles = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">

            {[...Array(20).keys()].map((index) => {
                const size = Math.random() * 50 + 20;
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                const opacity = Math.random();

                const styles = {
                    position: 'absolute',
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    left: `${left}%`,
                    top: `${top}%`,
                    opacity: opacity,
                };

                return (
                    <div
                        key={index}
                        style={styles}
                        className="pointer-events-none"
                    />
                );
            })}
        </div>
    );
};

export default VectorCircles;
