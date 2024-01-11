import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const FollowingEye = () => {
    const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
    const eyeSize = 20; // width and height of the eye

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const face = document.getElementById('face');
            if (!face) return;

            const rect = face.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            // Adjust the position of the eye considering its own width and height
            x = Math.max(x - eyeSize / 2, 0);
            y = Math.max(y - eyeSize / 2, 0);

            // Ensure the eye stays within the face
            if (x + eyeSize > rect.width) {
                x = rect.width - eyeSize;
            }
            if (y + eyeSize > rect.height) {
                y = rect.height - eyeSize;
            }

            setEyePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div id="face"
            style={
                {
                    width: '40px',
                    height: '35px',
                    position: 'relative'
                }
            }
        >
            <Image
                src="/images/eye.webp"
                alt='eye'
                style={{
                    position: 'absolute',
                    left: `${eyePosition.x - 60 / 2}px`, // Subtract half of the image's width
                    top: `${eyePosition.y - 60 / 2}px`, // Subtract half of the image's height
                }}

                height={60}
                width={60}
            />
        </div>
    );
};

export default FollowingEye;