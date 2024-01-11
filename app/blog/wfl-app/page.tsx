import { IBlogElements } from "@/interfaces/blogElementsInterface";
import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Internship MadX / WFL | JOBENGELEN.COM',
}

const WorldFightingLeaguePage = () => {

    const blogElements: IBlogElements = {
        name: 'World Fighting League App',
        greyText: 'Internship WFL / MadX | 2020',
        image: '/images/blog/wfl.webp',
        lede: 'In my last year at Nova College, I interned at MadX and worked on a project for World Fighting League (WFL), where I worked on developing a kickboxing app. I used Flutter for the frontend and PHP for the backend, and also integrated a comprehensive CMS into the system.',
        contents: [
            {
                paragraph: `In my internship, I worked on a project for WFL, dealing with several new aspects. I had to learn Dart and Flutter for coding, and I had to delve into the world of kickboxing, expanding my skills in both technology and sports. `,
            },
            {
                heading: `Content Management System`,
                paragraph: `Since I wasn't familiar with Dart and Flutter for app development, I decided to kick off the project by building a content management system using PHP, a language I was already familiar with from working on previous projects in my study at the time. I created a website where admins could easily add athletes, providing details like name, weight class, and coach. They could also initiate new competitions, add athletes to these events, and keep track of their current standings. Admins had the flexibility to create events, assign competitions to them, document athlete matchups, and manage event outcomes, including recording match scores and updating participants' standings and stats within the competition. All this data would be accessible through the app for users to view.`,
            },
            {
                heading: `Flutter App`,
                paragraph: `I learned how to code with Dart to build the Flutter app. The app allowed users to check upcoming events, buy tickets, see participating athletes and matchups, review past events with match outcomes, check current standings in competitions, and browse a list of all athletes. Users could filter athletes based on age class, weight class, and gender for a personalized experience. Additionally, the app featured the option to view live streams and YouTube videos.`,
            },
        ]
    }

    return <Blog blogElements={blogElements} />
}

export default WorldFightingLeaguePage;
