import { archivoBlack, redHatDisplay } from "@/fonts";
import styles from '@/styles/codingSkills.module.css';
import Image from "next/image";
import FadeInOnScroll from "../FadeInOnScroll";

interface TooltipImageProps {
    name: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    tooltip: string;
}

const frontendProwess: TooltipImageProps[] = [
    {
        name: 'TypeScript',
        src: '/images/coding/typescript.webp',
        alt: 'typescript',
        width: 80,
        height: 80,
        tooltip: `My weapon of choice! I consistently leverage TypeScript in all my personal projects. Its static typing, code readability improvements, and support for the latest ECMAScript features align seamlessly with my commitment to crafting clean, robust code across my creations.`
    },
    {
        name: 'JavaScript',
        src: '/images/coding/javascript.webp',
        alt: 'javascript',
        width: 80,
        height: 80,
        tooltip: `I love JavaScript, I've successfully navigated diverse frameworks and contributed to various company projects. `
    },
    {
        name: 'Next.js',
        src: '/images/coding/nextjs.webp',
        alt: 'nextjs',
        width: 80,
        height: 80,
        tooltip: `I favor Next.js paired with TypeScript for its simplicity, efficiency, and the robust code it facilitates. This combination accelerates development while ensuring high-quality, maintainable solutions.`
    },
    {
        name: 'React',
        src: '/images/coding/react.webp',
        alt: 'react',
        width: 80,
        height: 80,
        tooltip: `I have a strong affinity for React and have actively contributed to numerous projects, showcasing my expertise and commitment to delivering effective solutions using this powerful library.`
    },
    {
        name: 'Vue.js',
        src: '/images/coding/vue.webp',
        alt: 'vuejs',
        width: 80,
        height: 80,
        tooltip: `I've employed Vue.js in various school projects, demonstrating my proficiency in harnessing this framework to create effective and engaging web solutions.`
    },
    {
        name: 'Material-UI',
        src: '/images/coding/mui.webp',
        alt: 'mui',
        width: 80,
        height: 80,
        tooltip: `I have a strong preference for Material UI and extensively utilized it during one of my internships. This versatile library significantly contributed to crafting visually appealing and user-friendly interfaces in various projects.`
    },
    {
        name: 'Bootstrap',
        src: '/images/coding/bootstrap.webp',
        alt: 'bootstrap',
        width: 80,
        height: 80,
        tooltip: `I have employed Bootstrap extensively in various projects, showcasing a high level of familiarity and practical experience with this popular framework.`
    },
    {
        name: 'Three.js',
        src: '/images/coding/threejs.webp',
        alt: 'threejs',
        width: 80,
        height: 80,
        tooltip: `In a memorable internship, I had the pleasure of immersing myself in the world of Three.js. The love I developed for this framework is profound, and I am genuinely passionate about exploring more opportunities to create captivating and visually enchanting web experiences with Three.js.`
    },
];

const backendProwess: TooltipImageProps[] = [
    {
        name: 'Node.js',
        src: '/images/coding/nodejs.webp',
        alt: 'nodejs',
        width: 80,
        height: 80,
        tooltip: `I am well-versed in Node.js, possessing a strong command of its functionalities. My familiarity with Node.js enables me to work seamlessly, contributing to the development of robust and efficient server-side applications.`
    },
    {
        name: 'PHP',
        src: '/images/coding/php.webp',
        alt: 'php',
        width: 80,
        height: 80,
        tooltip: `Experienced in PHP, I've adeptly developed numerous websites, particularly focusing on content management systems. This background demonstrates my ability to create dynamic and functional web solutions using PHP.`
    },
    {
        name: 'Swagger',
        src: '/images/coding/swagger.webp',
        alt: 'swagger',
        width: 80,
        height: 80,
        tooltip: `I've demonstrated a high level of proficiency with Swagger, particularly in a banking project where I successfully implemented this tool. This experience underscores my ability to adeptly utilize Swagger for comprehensive API documentation and management.`
    },
    {
        name: 'Spring Boot',
        src: '/images/coding/springboot.webp',
        alt: 'springboot',
        width: 80,
        height: 80,
        tooltip: `I've showcased proficiency in Spring Boot through its successful implementation in a banking project. This experience underscores my adeptness in utilizing the framework to create robust, scalable, and efficient backend solutions.`
    },
    {
        name: 'Django',
        src: '/images/coding/django.webp',
        alt: 'django',
        width: 80,
        height: 80,
        tooltip: `During an internship, I gained hands-on experience with Django, showcasing my proficiency in this Python web framework. This practical exposure allowed me to contribute effectively to the development of dynamic and scalable web applications using Django.`
    },
    {
        name: 'SQL',
        src: '/images/coding/sql.webp',
        alt: 'sql',
        width: 80,
        height: 80,
        tooltip: `I am fluent in SQL! Demonstrating a strong command of this essential language for managing and querying databases. This proficiency enables me to design and optimize database structures effectively, ensuring efficient and reliable data management in various projects.`
    },
    {
        name: 'MongoDB',
        src: '/images/coding/mongodb.webp',
        alt: 'mongodb',
        width: 80,
        height: 80,
        tooltip: `I am proficient in MongoDB, demonstrating competence in working with this NoSQL database. My familiarity with MongoDB allows me to effectively design and manage database structures, providing flexibility and scalability in data handling for different projects.`
    },
];

const additionalProwess: TooltipImageProps[] = [
    {
        name: 'Git',
        src: '/images/coding/git.webp',
        alt: 'git',
        width: 80,
        height: 80,
        tooltip: `I possess a strong proficiency in Git, utilizing this version control system seamlessly in various projects. My expertise in Git enables effective collaboration, version tracking, and project management, ensuring streamlined and organized development workflows.`
    },
    {
        name: 'Docker',
        src: '/images/coding/docker.webp',
        alt: 'docker',
        width: 80,
        height: 80,
        tooltip: `I am proficient in Docker, utilizing this platform to efficiently containerize applications. My experience ensures streamlined deployment and consistent performance across diverse environments for robust software solutions.`
    },
    {
        name: 'Figma',
        src: '/images/coding/figma.webp',
        alt: 'figma',
        width: 80,
        height: 80,
        tooltip: `Through my User Experience Design (UXD) minor, I became proficient in Figma—a versatile design tool. Utilizing Figma, I've crafted intuitive and visually appealing user interfaces, facilitating seamless collaboration, prototyping, and design iteration in various projects.`
    },
    {
        name: 'C#',
        src: '/images/coding/csharp.webp',
        alt: 'csharp',
        width: 80,
        height: 80,
        tooltip: `I am proficient in C# and have applied my expertise to a multitude of projects. This experience showcases my ability to effectively leverage C# for diverse applications, contributing to the successful development of numerous projects.`
    },
    {
        name: 'Java',
        src: '/images/coding/java.webp',
        alt: 'java',
        width: 80,
        height: 80,
        tooltip: `I am proficient in Java, having successfully utilized this versatile programming language in various projects. My experience demonstrates my ability to leverage Java effectively, contributing to the development of robust and scalable applications.`
    },
    {
        name: 'Python',
        src: '/images/coding/python.webp',
        alt: 'python',
        width: 80,
        height: 80,
        tooltip: `I am proficient in Python, demonstrating versatility by employing this language across various projects. My experience underscores the effectiveness of Python in developing efficient, readable, and scalable solutions.`
    },
];

const TooltipImage = ({ name, src, alt, width, height, tooltip }: TooltipImageProps) => (
    <div className={styles.tooltipContainer}>
        <Image src={src} alt={alt} width={width} height={height} />
        <span className={styles.tooltipText}>
            <p className={redHatDisplay.className}>{name}</p>
            {tooltip}
        </span>
    </div>
);

const ShowOffSection = ({ name, toolTipImageProps }: { name: string, toolTipImageProps: TooltipImageProps[] }) => (
    <>
        <p className={`${archivoBlack.className} fs-24 w-100 m-0`}>{name}</p>
        <hr className={`${styles.hr} text-white m-0`} />
        <div className={styles.tooltipImageContainer}>
            {toolTipImageProps.map((props: TooltipImageProps) => (
                <TooltipImage key={props.name} {...props} />
            ))
            }
        </div>
    </>
);

const CodingSkills = () => {
    return (
        <section id="skills" className='container'>
            <FadeInOnScroll>
                <p className={`${archivoBlack.className} section-title fs-78`}>
                    CODING <span className='gradient-text'>PROWESS</span>
                </p>
            </FadeInOnScroll>

            <FadeInOnScroll>
                <div className={styles.imageContainer}>
                    <ShowOffSection name='FRONTEND' toolTipImageProps={frontendProwess} />
                    <ShowOffSection name='BACKEND' toolTipImageProps={backendProwess} />
                    <ShowOffSection name='ADDITIONAL' toolTipImageProps={additionalProwess} />
                </div>
            </FadeInOnScroll>
        </section>
    )
}

export default CodingSkills;