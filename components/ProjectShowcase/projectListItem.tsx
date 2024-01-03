import { hammersmithOne } from '@/fonts';
import Image from 'next/image';
import styles from '@/styles/projectShowcase.module.css';
import { IProjectDisplay } from '@/interfaces/projectDisplayInterface';
import Link from 'next/link';
import FadeInOnScroll from '../FadeInOnScroll';

const ProjectListItem = ({ project }: { project: IProjectDisplay }) => {
    return (
        <FadeInOnScroll>
            <div className={styles.projectListItem}>
                <Image src={project.image} alt={'test'} width={475} height={185} />

                <div className="p-14 pt-0">
                    <p className={`${hammersmithOne.className} fs-24 m-0 py-10`}>{project.name}</p>
                    <p className='m-0'>{project.description}</p>

                    <div className={styles.usedTechDisplay}>
                        {
                            project.usedTech.map((tech, index) => {
                                return (
                                    <Link href={tech.link} key={index} passHref={true} target='_blank'>
                                        <Image src={tech.image} alt={tech.name} width={42} height={42} />
                                    </Link>
                                );
                            })
                        }
                    </div>

                    <p className='text-grey m-0'>
                        <small>
                            <i>{project.date}</i>
                        </small>
                    </p>
                </div>
            </div>
        </FadeInOnScroll>
    );
}

export default ProjectListItem;