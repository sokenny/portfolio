import Image from "next/image";
import { project } from "@/utils/content/mytaggie";
import { ProjectType } from "types";
import Skill from "@/components/elements/Skill/Skill";
import styles from './HeaderProject.module.scss';

const HeaderProject:React.FC<{project:ProjectType}> = () => {
    return (
        <div className={styles.HeaderProject}>
            <div className={styles.texts}>
                <h1>{project.name}</h1>
                <h2>{project.description}</h2>
            </div>
            <div className={styles.slider}>
                <Image 
                src={`/${project.name}/${project.headerAsset[0]}`} 
                width={1500} 
                height={700} 
                priority={true} 
                objectFit={"cover"} />
            </div>        
            <div className={styles.skills}>
                {project.skills.map((skill)=>
                    <Skill skill={skill} key={skill} />
                )}
            </div>
        </div>
    )
}

export default HeaderProject;