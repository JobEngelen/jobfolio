import { IBlogElements } from "@/interfaces/blogElementsInterface";
import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'InHolland University of Applied Sciences | JOBFOL.IO',
}

const InHollandPage = () => {

    const blogElements: IBlogElements = {
        name: 'InHolland University of Applied Sciences',
        greyText: 'Bachelor Informatics | 2020 - Today',
        image: '/images/blog/inholland.webp',
        lede: 'I studied Information Technology at InHolland, a four-year program in Haarlem, Netherlands. Covered software development, interaction design, and more. Emphasized hands-on learning and followed minors in Security and User Experience Design.',
        contents: [
            {
                paragraph: `After finishing my studies at Nova College, I decided to keep studying IT. Now, I'm working on a Bachelor's degree in Informatics at InHolland University of Applied Sciences in Haarlem, focusing on expanding my knowledge and skills.`,
            },
            {
                heading: 'Year 1 - Propaedeutics',
                paragraph: `During my first year, I went through four semesters, each with its own focus, like web creation and application development. I learned about different aspects of IT, mainly in software development. The courses covered things like programming, web design, databases, project management, and communication.`,
            },
            {
                heading: 'Year 2 - Familiarizing',
                paragraph: `In my second year, we dived deeper into the material, focusing on web programming and JAVA. The projects were hands-on, dealing with NoSQL, web applications, and API programming. <Link href='/blog/banking-website'>One big project about a banking website</Link> required me to integrate both front-end and back-end code generation, for this group project we used Vue.js for the front-end and JAVA for the back-end.`,
            },
            {
                paragraph: `Alongside the technical stuff, we also worked on communication skills, improved English, and explored social, ethical, and legal aspects of software development. The year covered entrepreneurship in IT and also delved into Linux, making it a well-rounded experience that broadened my skills and understanding.`,
            },
            {
                heading: 'Year 3 - Internship & Specialization',
                paragraph: `In my third year, I had a hands-on experience through <Link href='/blog/5-axis-slicer'>an internship at DotX</Link> and focused on two interesting minors: <Link href='/blog/minor-uxd'>UX Design</Link> and <Link href='/blog/minor-security'>Cyber Security</Link>.`,
            },
            {
                heading: 'Year 4 - Specialization & Graduation',
                paragraph: `In my fourth and final year of my study, I studied abroad at the leading university in South-Korea, <Link href='/blog/Yonsei'>Yonsei University 🇰🇷</Link> for a semester as an exchange student.`,
            },
            {
                paragraph: `The initial half of this year has been dedicated to following minors. Following this, the focus shifts to the individual graduation trajectory, typically involving an independent research and development project in collaboration with a company.`,
            },
            {
                paragraph: `Having completed my studies at Yonsei University, I am currently in the process of finding a suitable company for my internship. Feel free to reach out and connect with me to explore potential collaboration opportunities. I'm eager to bring my skills and experiences to contribute to innovative projects. Looking forward to discussing how we can work together!`,
            },
        ]
    }

    return <Blog blogElements={blogElements} />
}

export default InHollandPage;
