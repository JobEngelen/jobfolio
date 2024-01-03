import Image from 'next/image';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import styles from '@/styles/aboutMe.module.css';
import { Blob } from '@/components/svg/blob';
import { archivoBlack, hammersmithOne, pressStart2P } from '@/fonts';
import ColourBlobs from './colourBlobs';
import { ISchoolDisplay } from '@/interfaces/schoolDisplayInterface';
import SchoolDisplay from './schoolDisplay';
import Link from 'next/link';
import Eyes from './eyes';
import FadeInOnScroll from '../FadeInOnScroll';

const inholland: ISchoolDisplay = {
    name: 'InHolland University of Applied Sciences',
    image: '/images/logo_inholland.png',
    dateOfAttendance: '2020 - Today',
    description: `Studied Information Technology at InHolland, a four-year program 
    in Haarlem, Netherlands. Covered software development, interaction design, and more. 
    Emphasized hands-on learning and followed minors in Security and User Experience Design.`,
    level: 'Bachelor',
    link: '/blog/InHolland',
}
const yonsei: ISchoolDisplay = {
    name: 'Yonsei University, Seoul, Korea 🇰🇷',
    image: '/images/logo_yonsei.png',
    dateOfAttendance: '2023 Fall Semester',
    description: `
    Studied as an exchange student at Yonsei University, renowned as the leading university 
    in Korea, during the fall semester of 2023. Followed courses Compiler Design, 
    Marketing, Neuroscience, Psychology, and Korean, gaining top-notch academic and cultural experience.`,
    level: 'Exchange',
    link: '/blog/Yonsei',
}
const novaCollege: ISchoolDisplay = {
    name: 'Nova College Haarlem',
    image: '/images/logo_nova.png',
    dateOfAttendance: '2017 - 2020',
    description: `
    Followed the Application and Media Developer program at Nova College, exploring coding languages. Internships at various companies shaped my practical coding skills in real-world scenarios.`,
    level: 'MBO4',
    link: '/blog/NovaCollege',
}


const AboutMe = () => {
    return (
        <section>
            <div className='container-flex'>

                <div className={`${styles.picContainer} flex-1`}>
                    <div>
                        <span className={`${styles.pictureBgBlob} p-absolute`}>
                            <Blob />
                        </span>
                        <Image
                            className={`${styles.jobPicture}`}
                            src="/images/job_photo.png"
                            alt="Job Engelen"
                            width={1170}
                            height={780}
                        />

                        <Eyes />
                    </div>
                </div>

                <div className={`${hammersmithOne.className} ${styles.introduction} flex-1 fs-28`}>
                    <div>
                        <p className='m-0'>
                            <span className={pressStart2P.className}>Hello world!</span> <span>I'm</span>
                        </p>
                        <h1 className='m-0'>
                            <span className={`${archivoBlack.className} gradient-text`}>JOB ENGELEN</span>
                        </h1>
                        <p className='m-0'>
                            <span>A Webdeveloper weaving the web of tomorrow. 💻✨</span>
                        </p>

                        <p className={styles.links}>
                            <Link href='https://github.com/JobEngelen' target='_blank'><FaGithubSquare /></Link>
                            <Link href='https://www.linkedin.com/in/jobengelen/' target='_blank'><FaLinkedin /></Link>
                        </p>
                    </div>
                </div>
            </div>

            <ColourBlobs />

            <div className='container'>
                <FadeInOnScroll>
                    <p className={`${archivoBlack.className} fs-78 mt-250 mb-50`}>
                        I STUDY <span className='gradient-stroke-text' data-text='INFORMATICS'>INFORMATICS</span>
                    </p>
                </FadeInOnScroll>

                <SchoolDisplay school={inholland} align={'left'} />
                <SchoolDisplay school={yonsei} align={'right'} />
                <SchoolDisplay school={novaCollege} align={'left'} />

            </div>

        </section>
    );
}

export default AboutMe;