'use client';
import Link from 'next/link';
import { ReactNode } from 'react';
import { sendFlowers, hammersmithOne } from '@/fonts';
import styles from '@/styles/nav.module.css';
import { usePathname } from 'next/navigation';

type NavItemProps = {
    children: ReactNode;
    href: string;
    className?: string;
};


const NavItem = ({ children, href, className }: NavItemProps) => {
    return (
        <li className={className}>
            <Link href={href}>{children}</Link>
        </li>
    );
};

const NavBar = () => {
    const pathName = usePathname();

    return (
        <nav className={styles.nav}>
            <div>
                <p className={`${sendFlowers.className} gradient-text fs-78 m-0`}>
                    <Link href='/'>JobFol.io</Link>
                </p>
            </div>
            <div>
                <ul className={`${styles.ul} ${hammersmithOne.className} fs-24`}>
                    <NavItem href='/' className={styles.responsiveNav}><span className={`${pathName === '/' && 'gradient-text'}`}>About me</span></NavItem>
                    <NavItem href='/#skills' className={styles.responsiveNav}>Skills</NavItem>
                    <NavItem href='/#projects' className={styles.responsiveNav}>Projects</NavItem>
                    <NavItem href='#contact'>Contact</NavItem>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
