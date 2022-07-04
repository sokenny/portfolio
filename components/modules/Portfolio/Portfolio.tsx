import Link from 'next/link';
import { projects } from '@/utils/index';
import Project from '@/components/elements/Project/Project';
import styles from './Portfolio.module.scss';

const Portfolio:React.FC = () => {

    return(
        <div className={styles.Portfolio}>
            <h3>Latest Projects</h3>
            <div>
                {projects.map((project)=>
                <div key={project.name}>
                    <Link href={`/${project.name}`} passHref>
                        <a>
                            <Project project={project} />
                        </a>
                    </Link>
                </div>
                )}
            </div>
        </div>
    )
}

export default Portfolio;