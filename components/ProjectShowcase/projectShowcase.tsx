import { archivoBlack } from '@/fonts';
import styles from '@/styles/projectShowcase.module.css';
import ProjectListItem from './projectListItem';
import { IProjectDisplay } from '@/interfaces/projectDisplayInterface';

const cyberSecurity: IProjectDisplay = {
    name: 'Minor Cyber Security',
    description: 'Followed a minor in Cyber Security, learning about security.',
    usedTech: [
        {
            name: 'Python',
            link: 'https://www.python.org/',
            image: '/images/coding/python.png',
        },
    ],
    date: '2023 - Minor CS InHolland University of Applied Sciences',
    image: '/images/testimg.png'
}

const userExperienceDesign: IProjectDisplay = {
    name: 'User Experience Design',
    description: 'Followed a course in User Experience Design, learning and implementing UXD in a business environment.',
    usedTech: [
        {
            name: 'Figma',
            link: 'https://www.figma.com/',
            image: '/images/coding/figma.png',
        },
    ],
    date: '2023 - Minor UXD InHolland University of Applied Sciences',
    image: '/images/testimg.png'
}

const project5AxisSlicer: IProjectDisplay = {
    name: '5-Axis-Slicer',
    description: 'Designed and implemented the front-end of specialized 3D-printing software.',
    usedTech: [
        {
            name: 'JavaScript',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            image: '/images/coding/javascript.png',
        },
        {
            name: 'React',
            link: 'https://react.dev/',
            image: '/images/coding/react.png',
        },
        {
            name: 'Material-UI',
            link: 'https://mui.com/',
            image: '/images/coding/mui.png',
        },
        {
            name: 'Three.js',
            link: 'https://threejs.org/',
            image: '/images/coding/threejs.png',
        },
        {
            name: 'Python',
            link: 'https://www.python.org/',
            image: '/images/coding/python.png',
        },
        {
            name: 'Django',
            link: 'https://www.djangoproject.com/',
            image: '/images/coding/django.png',
        },
    ],
    date: '2023 - Internship DotX Control Solutions',
    image: '/images/testimg.png'
}

const projectBankingWebsite: IProjectDisplay = {
    name: 'Banking Website',
    description: 'Developed a banking website, utilizing Vue.js for the frontend and Java for backend.',
    usedTech: [
        {
            name: 'JavaScript',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            image: '/images/coding/javascript.png',
        },
        {
            name: 'Vue.js',
            link: 'https://vuejs.org/',
            image: '/images/coding/vue.png',
        },
        {
            name: 'Bootstrap',
            link: 'https://getbootstrap.com/',
            image: '/images/coding/bootstrap.png',
        },
        {
            name: 'Java',
            link: 'https://www.java.com/',
            image: '/images/coding/java.png',
        },
        {
            name: 'Swagger',
            link: 'https://swagger.io/',
            image: '/images/coding/swagger.png',
        },
        {
            name: 'Spring Boot',
            link: 'https://spring.io/projects/spring-boot',
            image: '/images/coding/springboot.png',
        },
    ],
    date: '2022 - Project InHolland University of Applied Sciences',
    image: '/images/testimg.png'
}

const projectWFLApp: IProjectDisplay = {
    name: 'World Fighting League App',
    description: 'Developed a kickboxing app with Flutter for frontend and PHP as backend with a comprehensive CMS.',
    usedTech: [
        {
            name: 'PhP',
            link: 'https://www.php.net/',
            image: '/images/coding/php.png',
        },
        {
            name: 'Flutter',
            link: 'https://flutter.dev/',
            image: '/images/coding/flutter.png',
        },
        {
            name: 'Dart',
            link: 'https://dart.dev/',
            image: '/images/coding/dart.png',
        },
    ],
    date: '2020 - Internship WFL & MadX',
    image: '/images/testimg.png'
}


const ProjectShowcase = () => {
    return (
        <section id="projects" className='container'>
            <p className={`${archivoBlack.className} fs-78 mt-250 mb-50`}>
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