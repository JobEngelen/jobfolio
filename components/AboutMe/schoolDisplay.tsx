import { redHatDisplay, nunito } from '@/fonts';
import { ISchoolDisplay } from '@/interfaces/schoolDisplayInterface';
import styles from '@/styles/aboutMe.module.css';
import Image from 'next/image';
import Link from 'next/link';
import FadeInOnScroll from '../FadeInOnScroll';


const SchoolDisplay = ({ school, align }: { school: ISchoolDisplay, align: string }) => {
    return (
        <FadeInOnScroll>
            <div className={styles.desktopSchoolDisplay}>
                <div className={`${styles.schoolWrapper} ${align === 'right' ? styles.rightAligned : ''}`}>
                    <div className={styles.schoolCircle}>
                        <Image src={school.image} alt={school.name} width={180} height={180} />
                    </div>
                    <div className={`${styles.textWrapper} ${align === 'left' ? styles.rightAlignedText : ''}`}>
                        <div className={styles.schoolNameContainer}>
                            <span className={`${redHatDisplay.className} ${styles.schoolName} fs-24`}>
                                {school.name}<br />
                                {school.dateOfAttendance} <small className={`${nunito.className} text-grey`}>{school.level}</small>
                            </span>
                        </div>
                        <div className={styles.line}>
                            <span>
                                <p>
                                    {school.description} <Link href={school.link}>Read more...</Link>
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.phoneSchoolDisplay}>
                <div className={styles.flexContainer}>
                    <Image
                        src={school.image}
                        alt={school.name}
                        width={100}
                        height={100}
                        className='me-10'
                    />
                    <div>
                        <h1 className={`${redHatDisplay.className} fs-24 mb-0`}>{school.name}</h1>
                        <span>{school.dateOfAttendance} | <small className={`${nunito.className} text-grey`}>{school.level}</small></span>
                    </div>
                </div>
                <hr />
                <p>{school.description} <Link href={school.link}>Read more...</Link></p>
            </div>
        </FadeInOnScroll>
    );
}

export default SchoolDisplay;