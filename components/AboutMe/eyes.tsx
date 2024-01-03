'use client';
// Eyes.tsx
import { useState } from 'react';
import FollowingEye from './followingEye';

const Eyes = () => {
    const [leftEyePosition, setLeftEyePosition] = useState({ x: 0, y: 0 });
    const [rightEyePosition, setRightEyePosition] = useState({ x: 0, y: 0 });

    return (
        <div id="red-box" style={{ position: 'relative', backgroundColor: 'red' }}>
            <div
                style={{
                    position: 'absolute',
                    marginTop: '-580px',
                    marginLeft: '285px',
                      zIndex: -1,
                }}
            >
                <FollowingEye />
            </div>

            <div
                style={{
                    position: 'absolute',
                    marginTop: '-600px',
                    marginLeft: '385px',
                    zIndex: -1,
                }}
            >
                <FollowingEye />
            </div>
        </div>
    );
};

export default Eyes;
