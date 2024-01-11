'use client';
import styles from '@/styles/aboutMe.module.css';
import FollowingEye from './followingEye';

const Eyes = () => {

    return (
        <div id="red-box" className={styles.eyes} style={{ position: 'relative' }}>
            {/* This is the left eye */}
            <div
                style={{
                    position: 'absolute',
                    marginTop: '-550px',
                    marginLeft: '315px',
                    zIndex: -1,
                }}
            >
                <FollowingEye />
            </div>

            {/* This is the right eye */}
            <div
                style={{
                    position: 'absolute',
                    marginTop: '-570px',
                    marginLeft: '415px',
                    zIndex: -1,
                }}
            >
                <FollowingEye />
            </div>
        </div>
    );
};

export default Eyes;
