import { IBlogElements } from "@/interfaces/blogElementsInterface";
import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Internship DotX | JOBENGELEN.COM',
}

const DotXPage = () => {

    const blogElements: IBlogElements = {
        name: '5-Axis-Slicer',
        greyText: 'Internship DotX Control Solutions | 2023',
        image: '/images/blog/5-axis-slicer.webp',
        lede: 'In my third year at InHolland Haarlem, I did an internship at the company DotX Control Solutions. I worked on the front-end of specialized 3D-printing software designed for 3D printers with 5 axes. Using JavaScript, React and Three.js, I had a hands-on role in shaping the user interface and functionality of the software.',
        contents: [
            {
                paragraph: `Before this internship, my experience was limited to Vue.js, with no prior exposure to React. I took a React course to equip myself with the necessary skills and was then ready to tackle the project. Furthermore, while I initially lacked familiarity with three.js, the extensive documentation and online examples proved instrumental in my work with the technology.`,
            },
            {
                heading: 'Functionality Development',
                paragraph: `My primary focus was on developing key functionalities for the software. I implemented a feature allowing users to upload .stl files, storing them locally for display on the website. Subsequently, users could send these files to the backend, developed in Python (though not within my project scope), for slicing into layers. The sliced layers were then seamlessly displayed on the frontend. Users could proceed to convert these layers into gcode toolpaths, enabling the download of a .gcode file for initiating the printing process on the 3D printer.`,
            }
        ]
    }

    return <Blog blogElements={blogElements} />
}

export default DotXPage;
