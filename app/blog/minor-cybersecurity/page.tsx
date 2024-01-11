import { IBlogElements } from "@/interfaces/blogElementsInterface";
import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Minor Cybersecurity | JOBENGELEN.COM',
}

const CyberSecurityPage = () => {

    const blogElements: IBlogElements = {
        name: 'Cyber Security',
        greyText: 'Minor InHolland University of Applied Sciences | 2023',
        image: '/images/blog/cybersecurity.webp',
        lede: 'In my third year at Inholland, I participated in the security minor program to acquire knowledge and skills in computer systems security. The program covered various competencies, assessments, and goals focused on the analysis of security aspects related to networks and software.',
        contents: [
            {
                paragraph: `The security minor at Inholland effectively equipped me with a robust foundation in analyzing, advising, designing, and implementing security measures in computer systems. `,
            },
            {
                heading: `Diverse assessments`,
                paragraph: `Assessments included project evaluations, code assessments, exams, and comprehensive security assessments. Satisfactory completion of each assessment was required.`,
            },
            {
                heading: `Practical experience`,
                paragraph: `As part of the security minor program, I participated in a group project for a real company, where our objective was to assess the security of their website. The task involved using hacking techniques to identify potential vulnerabilities. Following this, we diligently documented our testing procedures, highlighted the identified vulnerabilities, and proposed recommendations for enhancing the website's security. `,
            }
        ]
    }

    return <Blog blogElements={blogElements} />
}

export default CyberSecurityPage;
