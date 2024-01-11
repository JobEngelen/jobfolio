import { redHatDisplay } from "@/fonts";
import styles from "@/styles/footer.module.css";
import Link from "next/link";


const Footer = () => {
    return (
        <footer className={`${styles.footer} bg-dark mt-200`}>
            <section id="contact" className="container">
                <p className={`${redHatDisplay.className} fs-24`}>Contact</p>

                <Link href="mailto:jobengelen@yahoo.nl" passHref>jobengelen@yahoo.nl</Link>

            </section>
        </footer>
    )
}

export default Footer;