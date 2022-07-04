import Link from 'next/link';
import { ProjectType } from 'types';
import Skill from '../Skill/Skill';
import styles from './Project.module.scss';

const Project:React.FC<{project:ProjectType}> = ({project}) => {

    return(
        <div className={styles.Project}>

            <div className={styles.poster} style={{backgroundImage: "linear-gradient(var(--"+project.name+"-light), var(--"+project.name+"-dark))"}}>
                <img 
                src={`/${project.name}/logo.png`} 
                height="55px" 
                alt={project.name} 
                style={{filter: "drop-shadow(5px 5px 5px var(--"+project.name+"-dark))"}} />
            </div>

            <div className={styles.info}>
                <div className={styles.name}>{project.name}</div>
                <div className={styles.description}>{project.description}</div>
                <div className={styles.skills}>
                    {project.skills.map((skill)=>
                        <Skill skill={skill} key={skill} />
                    )}
                </div>
                <Link href={`/${project.name.toLowerCase()}`}>
                    <div className={styles.cta}>view project</div>
                </Link>
            </div>
            
        </div>
    )
}

export default Project;