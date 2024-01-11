import Image from "next/image";
import styles from '@/styles/blog.module.css';
import { archivoBlack, redHatDisplay } from "@/fonts";
import { IBlogElements } from "@/interfaces/blogElementsInterface";
import FadeInOnScroll from "./FadeInOnScroll";
import Link from "next/link";

const Blog = ({ blogElements }: { blogElements: IBlogElements }) => {


    function parseParagraph(paragraph: string) {
        const linkRegex = /<Link href='(.*?)'>(.*?)<\/Link>/g;
        let match;
        let lastIndex = 0;
        const parts = [];

        while ((match = linkRegex.exec(paragraph)) !== null) {
            if (match.index !== lastIndex) {
                parts.push(paragraph.slice(lastIndex, match.index));
            }

            parts.push({
                href: match[1],
                text: match[2],
            });

            lastIndex = linkRegex.lastIndex;
        }

        if (lastIndex !== paragraph.length) {
            parts.push(paragraph.slice(lastIndex));
        }

        return parts;
    }

    const Paragraph = ({ paragraph }: { paragraph: string }) => {
        return (
            <p className={styles.paragraph}>
                {parseParagraph(paragraph).map((part, index) =>
                    typeof part === 'string' ?
                        <span key={index}>{part}</span> :
                        <Link href={part.href} key={index}>{part.text}</Link>
                )}
            </p>
        );
    }

    return (
        <div className={`${styles.blogContainer} mt-50 container`}>
            <Image src={blogElements.image} alt={blogElements.name} width={1300} height={600} className={styles.img} />

            <div className={styles.title}>
                <h1 className={`${archivoBlack.className} d-inline m-0 me-10 bg-gradient text-dg`}>{blogElements.name}</h1>
                <span className={`${styles.greyText} text-grey pt-5`}>{blogElements.greyText}</span>
            </div>

            <hr />

            <p>
                <b>
                    {blogElements.lede}
                </b>
            </p>

            {
                blogElements.contents.map((content, index) => (
                    <FadeInOnScroll key={index}>
                        {content.heading && <h2 className={`${redHatDisplay.className} mb-0 mt-50`}>{content.heading}</h2>}
                        <Paragraph paragraph={content.paragraph} />
                    </FadeInOnScroll>
                ))
            }

        </div>
    )
}

export default Blog;