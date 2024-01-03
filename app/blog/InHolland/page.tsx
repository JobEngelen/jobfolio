import { IBlogElements } from "@/interfaces/blogElementsInterface";
import Blog from "@/components/Blog";

const InHollandPage = () => {

    const blogElements: IBlogElements = {
        name: 'InHolland University of Applied Sciences',
        greyText: 'Bachelor Informatics | 2020 - Today',
        image: '/images/blog/inholland.png',
        lede: 'Studied Information Technology at InHolland, a four-year program in Haarlem, Netherlands. Covered software development, interaction design, and more. Emphasized hands-on learning and followed minors in Security and User Experience Design.',
        contents: [
            {
                paragraph: 'Praesent mauris quam, blandit quis dapibus vel, semper eget dui. Duis tincidunt facilisis eros vel scelerisque. Maecenas vel hendrerit turpis. Cras non dui vitae dolor feugiat ultrices non et quam. Nunc auctor ultrices ornare. Nulla dignissim lectus vitae ullamcorper sollicitudin. Etiam tincidunt, velit sit amet mollis sagittis, elit ex consectetur nunc, vitae aliquet metus metus nec est. Morbi vel neque et arcu tincidunt rutrum. Maecenas ullamcorper urna mollis mi tristique interdum.'
            },
            {
                heading: 'Subtitle or smth',
                paragraph: 'Phasellus efficitur id elit eget auctor. Donec odio risus, efficitur ullamcorper augue nec, consectetur tincidunt erat. Vivamus suscipit leo posuere metus hendrerit maximus. Praesent vulputate ante quam, id egestas sapien sodales vitae. Suspendisse ac dignissim dolor. Nulla vitae tristique sapien, nec mollis magna. Suspendisse lorem purus, rhoncus at elit quis, pellentesque egestas quam.'
            },  
            {
                paragraph: 'Praesent mauris quam, blandit quis dapibus vel, semper eget dui. Duis tincidunt facilisis eros vel scelerisque. Maecenas vel hendrerit turpis. Cras non dui vitae dolor feugiat ultrices non et quam. Nunc auctor ultrices ornare. Nulla dignissim lectus vitae ullamcorper sollicitudin. Etiam tincidunt, velit sit amet mollis sagittis, elit ex consectetur nunc, vitae aliquet metus metus nec est. Morbi vel neque et arcu tincidunt rutrum. Maecenas ullamcorper urna mollis mi tristique interdum.'
            }
        ]
    }

    return <Blog blogElements={blogElements} />
}

export default InHollandPage;
