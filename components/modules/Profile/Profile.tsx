import { getAge } from '@/utils/index';
import styles from './Profile.module.scss'

const Profile:React.FC = () => {

    return(
        <div className={styles.Profile}>
            <div className={styles.info}>
                <div className={styles.main}>
                    <div className="p-name-occupation">
                    <h1>Juan Chaher</h1>
                    <h2>Full stack web developer</h2>
                    </div>
                </div>
                <div className={styles.description}>
                    {getAge('1999-06-01')} y/o. Based in Buenos Aires. I believe limitations grant commitments, and commitments deliver beautiful design systems, that scale. 
                </div>
            </div>
        </div>
    )
}

export default Profile