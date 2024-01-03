import { archivoBlack, hammersmithOne } from "@/fonts";
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
        src: '/images/coding/typescript.png',
        alt: 'typescript',
        width: 80,
        height: 80,
        tooltip: 'My weapon of choice! TypeScript\nA strict syntactical superset of JavaScript and adds optional static typing to the language'
    },
    {
        name: 'JavaScript',
        src: '/images/coding/javascript.png',
        alt: 'javascript',
        width: 80,
        height: 80,
        tooltip: 'JavaScript\nA high-level, interpreted programming language.'
    },
    {
        name: 'Next.js',
        src: '/images/coding/nextjs.png',
        alt: 'nextjs',
        width: 80,
        height: 80,
        tooltip: 'Next.js\nThe React Framework for Production.'
    },
    {
        name: 'React',
        src: '/images/coding/react.png',
        alt: 'react',
        width: 80,
        height: 80,
        tooltip: 'React\nA JavaScript library for building user interfaces.'
    },
    {
        name: 'Vue.js',
        src: '/images/coding/vue.png',
        alt: 'vuejs',
        width: 80,
        height: 80,
        tooltip: 'Vue.js\nThe Progressive JavaScript Framework.'
    },
    {
        name: 'Material-UI',
        src: '/images/coding/mui.png',
        alt: 'mui',
        width: 80,
        height: 80,
        tooltip: 'Material-UI\nReact components for faster and easier web development.'
    },
    {
        name: 'Bootstrap',
        src: '/images/coding/bootstrap.png',
        alt: 'bootstrap',
        width: 80,
        height: 80,
        tooltip: 'Bootstrap\nThe world’s most popular front-end open source toolkit.'
    },
    {
        name: 'Three.js',
        src: '/images/coding/threejs.png',
        alt: 'threejs',
        width: 80,
        height: 80,
        tooltip: 'Three.js\nJavaScript 3D library.'
    },
];

const backendProwess: TooltipImageProps[] = [
    {
        name: 'nodejs',
        src: '/images/coding/nodejs.png',
        alt: 'nodejs',
        width: 80,
        height: 80,
        tooltip: 'Node.js\nA JavaScript runtime built on Chrome\'s V8 JavaScript engine.'
    },
    {
        name: 'php',
        src: '/images/coding/php.png',
        alt: 'php',
        width: 80,
        height: 80,
        tooltip: 'PHP\nA popular general-purpose scripting language that is especially suited to web development.'
    },
    {
        name: 'swagger',
        src: '/images/coding/swagger.png',
        alt: 'swagger',
        width: 80,
        height: 80,
        tooltip: 'Swagger\nA set of open-source tools built around the OpenAPI Specification that can help you design, build, document and consume REST APIs.'
    },
    {
        name: 'springboot',
        src: '/images/coding/springboot.png',
        alt: 'springboot',
        width: 80,
        height: 80,
        tooltip: 'Spring Boot\nAn open source Java-based framework used to create a micro Service.'
    },
    {
        name: 'django',
        src: '/images/coding/django.png',
        alt: 'django',
        width: 80,
        height: 80,
        tooltip: 'Django\nA high-level Python Web framework that encourages rapid development and clean, pragmatic design.'
    },
    {
        name: 'sql',
        src: '/images/coding/sql.png',
        alt: 'sql',
        width: 80,
        height: 80,
        tooltip: 'SQL\nA domain-specific language used in programming and designed for managing data held in a relational database management system.'
    },
    {
        name: 'mongodb',
        src: '/images/coding/mongodb.png',
        alt: 'mongodb',
        width: 80,
        height: 80,
        tooltip: 'MongoDB\nA source-available cross-platform document-oriented database program.'
    },
];

const additionalProwess: TooltipImageProps[] = [
    {
        name: 'git',
        src: '/images/coding/git.png',
        alt: 'git',
        width: 80,
        height: 80,
        tooltip: 'Git\nA distributed version-control system for tracking changes in source code during software development.'
    },
    {
        name: 'docker',
        src: '/images/coding/docker.png',
        alt: 'docker',
        width: 80,
        height: 80,
        tooltip: 'Docker\nA set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.'
    },
    {
        name: 'figma',
        src: '/images/coding/figma.png',
        alt: 'figma',
        width: 80,
        height: 80,
        tooltip: 'Figma\nA vector graphics editor and prototyping tool which is primarily web-based.'
    },
    {
        name: 'csharp',
        src: '/images/coding/csharp.png',
        alt: 'csharp',
        width: 80,
        height: 80,
        tooltip: 'C#\nA general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.'
    },
    {
        name: 'java',
        src: '/images/coding/java.png',
        alt: 'java',
        width: 80,
        height: 80,
        tooltip: 'Java\nA class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.'
    },
    {
        name: 'python',
        src: '/images/coding/python.png',
        alt: 'python',
        width: 80,
        height: 80,
        tooltip: 'Python\nAn interpreted, high-level and general-purpose programming language.'
    },
];

const TooltipImage = ({ name, src, alt, width, height, tooltip }: TooltipImageProps) => (
    <div className={styles.tooltipContainer}>
        <Image src={src} alt={alt} width={width} height={height} />
        <span className={styles.tooltipText}>
            <p className={hammersmithOne.className}>{name}</p>
            {tooltip}
        </span>
    </div>
);

const ShowOffSection = ({ name, toolTipImageProps }: { name: string, toolTipImageProps: TooltipImageProps[] }) => (
    <>
        <p className={`${archivoBlack.className} fs-24 mt-50`}>{name}</p>
        {toolTipImageProps.map((props: TooltipImageProps) => (
            <TooltipImage key={props.name} {...props} />
        ))
        }
    </>
);

const CodingSkills = () => {
    return (
        <section id="skills" className="container mt-250">
            <FadeInOnScroll>
                <p className={`${archivoBlack.className} fs-78 mb-50`}>
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