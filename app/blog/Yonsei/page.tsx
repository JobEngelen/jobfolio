import { IBlogElements } from "@/interfaces/blogElementsInterface";
import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Yonsei University 🇰🇷 | JOBENGELEN.COM',
}

const YonseiPage = () => {

    const blogElements: IBlogElements = {
        name: 'YONSEI UNIVERSITY',
        greyText: 'Exchange student | Fall Semester 2023',
        image: '/images/blog/yonsei.jpg',
        lede: 'During the fall semester of 2023, I studied as an exchange student at Yonsei University, renowned as the leading university in South-Korea. I followed the courses Compiler Design, Marketing, Neuroscience, Psychology, and Korean, gaining top-notch academic and cultural experience.',
        contents: [
            {
                paragraph: `In my fourth and final year of my studies I wanted to study abroad for a semester and felt that Europe was too close to home; I wanted to experience a completely different culture and climate. I haven't been in Asia all that much, so I felt studying in South-Korea would be a great way to experience more of Asian culture. I learned a lot and had a lot of amazing experiences while attending Yonsei University, which made studying there incredibly rewarding.`,
            },
            {
                heading: 'About Yonsei University',
                paragraph: `Yonsei University is a highly reputable university located in Seoul, South-Korea. Founded in 1885, it's one of the top universities in the country, often referred to as part of the "SKY" universities, which also includes Seoul National University and Korea University.`,
            },
            {
                paragraph: `The university is huge! I found Yonsei's campus reminiscent of Disneyland with it's main street in the middle surrounded by school buildings, leading to the iconic Underwood Hall (the Disney castle). The campus is also equipped with numerous sports facilities, an amphitheatre and even a mountain which is excellent for hiking with beautiful views from its top.`,
            },
            {
                heading: 'Academic highlights',
                paragraph: 'At Yonsei University I followed the courses Compiler Design, Marketing, Neuroscience, Psychology and Korean.'
            },
            {
                paragraph: `Compiler Design gave me valuable insights into how programming languages are translated into machine code. It gave me a better understanding of the intricate process of software development.`,
            },
            {
                paragraph: `I studied a variety of marketing techniques in the marketing course, and I learned how to effectively promote products and engage with target audiences.`,
            },
            {
                paragraph: `Yonsei University's Neuroscience and Psychology courses were focused on figuring out how our brains work and why we do certain things. I learned how biology and psychology are related and overall it was a fascinating learning experience.`,
            },
            {
                paragraph: `I took an intensive Korean language course where I learned how to read, write and speak Korean. Having a basic understanding of Korean was useful during my time in Korea, as it helped me in everyday situations.`,
            },
            {
                heading: 'Cultural Immersion',
                paragraph: 'Apart from my studies, I explored historically significant sites such as palaces and fortresses, enjoyed various Korean dishes (I love gimbap), and went on numerous hikes with stunning views.'
            },
        ]
    }

    return <Blog blogElements={blogElements} />
}

export default YonseiPage;
