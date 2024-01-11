import { archivoBlack } from '@/fonts';
import styles from '@/styles/projectShowcase.module.css';
import ProjectListItem from './projectListItem';
import { IProjectDisplay } from '@/interfaces/projectDisplayInterface';

const cyberSecurity: IProjectDisplay = {
    name: 'Cyber Security',
    description: 'Followed a minor in Cyber Security, learning about security.',
    link: 'minor-cybersecurity',
    usedTech: [
        {
            name: 'Python',
            link: 'https://www.python.org/',
            image: '/images/coding/python.webp',
        },
    ],
    date: '2023 - Minor CS InHolland University of Applied Sciences',
    image: '/images/blog/cybersecurity.webp'
}

const userExperienceDesign: IProjectDisplay = {
    name: 'User Experience Design',
    description: 'Followed a course in User Experience Design, learning and implementing UXD in a business environment.',
    link: 'minor-uxd',
    usedTech: [
        {
            name: 'Figma',
            link: 'https://www.figma.com/',
            image: '/images/coding/figma.webp',
        },
    ],
    date: '2023 - Minor UXD InHolland University of Applied Sciences',
    image: '/images/blog/uxd.webp'
}

const project5AxisSlicer: IProjectDisplay = {
    name: '5-Axis-Slicer',
    description: 'Designed and implemented the front-end of specialized 3D-printing software.',
    link: '5-axis-slicer',
    usedTech: [
        {
            name: 'JavaScript',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            image: '/images/coding/javascript.webp',
        },
        {
            name: 'React',
            link: 'https://react.dev/',
            image: '/images/coding/react.webp',
        },
        {
            name: 'Material-UI',
            link: 'https://mui.com/',
            image: '/images/coding/mui.webp',
        },
        {
            name: 'Three.js',
            link: 'https://threejs.org/',
            image: '/images/coding/threejs.webp',
        },
        {
            name: 'Python',
            link: 'https://www.python.org/',
            image: '/images/coding/python.webp',
        },
        {
            name: 'Django',
            link: 'https://www.djangoproject.com/',
            image: '/images/coding/django.webp',
        },
    ],
    date: '2023 - Internship DotX Control Solutions',
    image: '/images/blog/5-axis-slicer.webp'
}

const projectBankingWebsite: IProjectDisplay = {
    name: 'Banking Website',
    description: 'Developed a banking website, utilizing Vue.js for the frontend and Java for backend.',
    link: 'banking-website',
    usedTech: [
        {
            name: 'JavaScript',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            image: '/images/coding/javascript.webp',
        },
        {
            name: 'Vue.js',
            link: 'https://vuejs.org/',
            image: '/images/coding/vue.webp',
        },
        {
            name: 'Bootstrap',
            link: 'https://getbootstrap.com/',
            image: '/images/coding/bootstrap.webp',
        },
        {
            name: 'Java',
            link: 'https://www.java.com/',
            image: '/images/coding/java.webp',
        },
        {
            name: 'Swagger',
            link: 'https://swagger.io/',
            image: '/images/coding/swagger.webp',
        },
        {
            name: 'Spring Boot',
            link: 'https://spring.io/projects/spring-boot',
            image: '/images/coding/springboot.webp',
        },
    ],
    date: '2022 - Project InHolland University of Applied Sciences',
    image: '/images/blog/floppabank.webp'
}

const projectWFLApp: IProjectDisplay = {
    name: 'World Fighting League App',
    description: 'Developed a kickboxing app with Flutter for frontend and PHP as backend with a comprehensive CMS.',
    link: 'wfl-app',
    usedTech: [
        {
            name: 'PhP',
            link: 'https://www.php.net/',
            image: '/images/coding/php.webp',
        },
        {
            name: 'Flutter',
            link: 'https://flutter.dev/',
            image: '/images/coding/flutter.webp',
        },
        {
            name: 'Dart',
            link: 'https://dart.dev/',
            image: '/images/coding/dart.webp',
        },
    ],
    date: '2020 - Internship WFL & MadX',
    image: '/images/blog/wfl.webp'
}


const ProjectShowcase = () => {
    return (
        <section id="projects" className='container'>
            <p className={`${archivoBlack.className} ${styles.title} section-title fs-78`}>
                <span className='bg-gradient text-dg'>PROJECTS 🧰</span>
            </p>

            <div className={styles.projectListContainer}>
                <ProjectListItem project={cyberSecurity} />
                <ProjectListItem project={userExperienceDesign} />
                <ProjectListItem project={project5AxisSlicer} />
                <ProjectListItem project={projectBankingWebsite} />
                <ProjectListItem project={projectWFLApp} />
            </div>

        </section>
    );
}

export default ProjectShowcase;