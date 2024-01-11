import { IBlogElements } from "@/interfaces/blogElementsInterface";
import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Nova College | JOBFOL.IO',
}

const NovaCollegePage = () => {

    const blogElements: IBlogElements = {
        name: 'Nova College',
        greyText: 'MBO4 Application and Media Developer | 2017 - 2020',
        image: '/images/blog/nova.webp',
        lede: 'I followed the Application and Media Developer program at Nova College, exploring coding languages. Internships at various companies shaped my practical coding skills in real-world scenarios.',
        contents: [
            {
                paragraph: `I enrolled in Nova College's Application and Media Developer program because I felt passionate about technology and want to create. Over three years, I studied the entire software design process, including documentation, design, development, and final product realization. The program also emphasized project management skills, including application development, implementation, and maintenance. In addition, I learned valuable skills in client communication and collaborative teamwork.`
            },
        ]
    }

    return <Blog blogElements={blogElements} />
}

export default NovaCollegePage;
