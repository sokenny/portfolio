import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { project } from "@/utils/content/mytaggie";
import { ProjectType } from "types";
import Skill from "@/components/elements/Skill/Skill";
import styles from './HeaderProject.module.scss';

const HeaderProject:React.FC<{project:ProjectType}> = () => {

    const timeoutRef = useRef<number>();
    const [activeAsset, setActiveAsset] = useState<string>(project.headerAsset[0]);

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    } , []);

    useEffect(()=>{
        project.headerAsset.forEach((asset, i) => {
            timeoutRef.current = window.setTimeout(() => {
                if (asset === activeAsset) {
                    const nextIndex = i+1 < project.headerAsset.length ? i + 1 : 0;
                    setActiveAsset(project.headerAsset[nextIndex]);
                }
            }, 2000);
        })
    }, [activeAsset])

    return (
        <div className={styles.HeaderProject}>
            <div className={styles.texts}>
                <h1>{project.name}</h1>
                <h2>{project.description}</h2>
            </div>
            <div className={styles.slider}>
                <div className={styles.slidePlaceholder}>
                    <Image 
                    src={`/${project.name}/${project.headerAsset[0]}`} 
                    width={1500} 
                    height={700} 
                    priority={true} 
                    objectFit={"cover"} />
                </div>
                {project.headerAsset.map((asset, i)=>
                <div
                key={asset}
                className={
                    `
                    ${styles.sliderItem} 
                    ${styles[`sliderItem-${activeAsset === asset ? 'active' : 'inActive'}`]}
                    ${styles[`sliderItem-${project.headerAsset.indexOf(activeAsset) >= i ? 'showed' : 'pending'}`]}
                    `}
                >
                    <Image 
                    src={`/${project.name}/${asset}`} 
                    width={1500} 
                    height={700} 
                    priority={true} 
                    objectFit={"cover"} />
                </div>
                )}
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