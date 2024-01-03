import Image from "next/image";
import styles from '@/styles/blog.module.css';
import { archivoBlack, hammersmithOne } from "@/fonts";
import { IBlogElements } from "@/interfaces/blogElementsInterface";
import FadeInOnScroll from "./FadeInOnScroll";

const Blog = ({ blogElements }: { blogElements: IBlogElements }) => {
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
                    <FadeInOnScroll>
                        {
                            content.heading ?
                                <>
                                    <h2 className={`${hammersmithOne.className} mb-0 mt-50`}>{content.heading}</h2>
                                    <p className={styles.paragraph}>
                                        {content.paragraph}
                                    </p>
                                </>
                                :
                                <p className={styles.paragraph}>
                                    {content.paragraph}
                                </p>
                        }
                    </FadeInOnScroll>
                ))
            }

        </div>
    )
}

export default Blog;