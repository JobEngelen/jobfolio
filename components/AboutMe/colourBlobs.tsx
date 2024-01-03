import { ColourBlob } from '@/components/svg/colourBlob';
import styles from '@/styles/aboutMe.module.css';

const ColourBlobs = () => {
    return (
        <div className={styles.blobContainer}>

            <span className={`${styles.firstBlob} p-absolute`}>
                <ColourBlob />
            </span>

            <span className={`${styles.secondBlob} p-absolute`}>
                <ColourBlob />
            </span>

            <span className={`${styles.thirdBlob} p-absolute`}>
                <ColourBlob />
            </span>

            <span className={`${styles.fourthBlob} p-absolute`}>
                <ColourBlob />
            </span>

            <span className={`${styles.fifthBlob} p-absolute`}>
                <ColourBlob />
            </span>

            <span className={`${styles.sixthBlob} p-absolute`}>
                <ColourBlob />
            </span>
        </div>
    );
}

export default ColourBlobs;