import { IBlogElements } from "@/interfaces/blogElementsInterface";
import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Minor UXD | JOBFOL.IO',
}

const MinorUXDPage = () => {

    const blogElements: IBlogElements = {
        name: 'User Experience Design',
        greyText: 'Minor InHolland University of Applied Sciences | 2023',
        image: '/images/blog/uxd.webp',
        lede: 'During my third year of study at InHolland Haarlem, I undertook a course in User Experience Design (UXD), focusing on the practical implementation of UXD principles in a business environment.',
        contents: [
            {
                paragraph: `The course provided a comprehensive exploration of the user experience design process. Emphasizing practical applications, we actively engaged with real products for actual companies, gaining hands-on experience in the field.`,
            },
            {
                heading: `Key Learnings`,
                paragraph: `The curriculum extensively covered the user experience design process, including research and interviews with end-users to identify pain points and understand their preferences regarding existing applications. This user-centric approach aimed to gather insights for informed decision-making.`,
            },
            {
                heading: `Practical Applications`,
                paragraph: `A notable component of the course involved practical applications, including the execution of AB tests to assess design effectiveness. Additionally, we conducted interviews with existing end-users, utilizing their feedback to inform an iterative process for enhancing our designs. This ensured that the final solutions not only met aesthetic standards but were also user-friendly and aligned with end-user preferences.`,
            }
        ]
    }

    return <Blog blogElements={blogElements} />
}

export default MinorUXDPage;
