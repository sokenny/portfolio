import { TextsType } from 'types';
import styles from './CenteredTexts.module.scss';

const CenteredTexts:React.FC<{texts:TextsType[]}> = ({texts}) => {
    return (
        <section className={styles.CenteredTexts}>
            {texts.map((text, i)=>
            <div key={text.title}>
                <h3 className={styles.title}>{text.title}</h3>
                <p className={styles.description}>{text.description}</p>
            </div>
            )}
        </section>
    )
}

export default CenteredTexts;