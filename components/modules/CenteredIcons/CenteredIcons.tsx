import { IconType, ProjectType } from 'types';
import styles from './CenteredIcons.module.scss';

const CenteredIcons:React.FC<{icons:IconType[], project:ProjectType}> = ({icons, project}) => {
    return (
        <section className={styles.CenteredIcons}>
            {icons.map((icon, i) => (
                <div className={styles.item} key={icon.title}>
                    <div className={styles.icon}>
                        <div className={styles.iconBorder} />
                        <img src={`${project.name}/${icon.src}`} alt={icon.title} />
                    </div>
                    <h3>{icon.title}</h3>
                    <p>{icon.description}</p>
                </div>
                )
            )}
        </section>
    )
}

export default CenteredIcons;