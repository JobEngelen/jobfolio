import { IBlogElements } from "@/interfaces/blogElementsInterface";
import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Banking Website | JOBENGELEN.COM',
}

const FloppaBankPage = () => {

    const blogElements: IBlogElements = {
        name: 'Banking website',
        greyText: 'Project InHolland University of Applied Sciences | 2022',
        image: '/images/blog/floppabank.webp',
        lede: 'In our second-year group project, we developed a banking website using Vue.js for the frontend and Java with Swagger and Spring Boot for the backend. Notably, we employed code generation to streamline backend development.',
        contents: [
            {
                paragraph: 'The frontend, built on Vue.js, delivered a functional user interface for banking operations. Meanwhile, the backend, powered by Java, Swagger, and Spring Boot, ensured robust security measures. Code generation with Spring Boot streamlined our backend development, enabling a more efficient and organized coding process. Extensive testing of API endpoints using Cucumber solidified the reliability and security of the system.'
            },
            {
                heading: 'Individual Contribution',
                paragraph: `In my role for this project, I focused on handling transactions between bank accounts, making sure to enforce restrictions in cases like insufficient funds. I took worked on the transaction history feature where a user can view their past transactions made.`,
            },
            {
                heading: 'Challenges and Solutions',
                paragraph: 'Throughout the project, we addressed integration issues and tackled challenges related to data security. Regular team meetings and code reviews played a crucial role in collaborative problem-solving.'
            },  
        ]
    }

    return <Blog blogElements={blogElements} />
}

export default FloppaBankPage;
