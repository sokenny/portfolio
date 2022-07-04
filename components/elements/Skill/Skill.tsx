import styles from './Skill.module.scss';

const Skill:React.FC<{skill:string}> = ({skill}) => {

    return(
        <div className={`${styles.Skill} no-select`}>
            {skill}
        </div>
    )
}

export default Skill;