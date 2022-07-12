import { AssetAndTextType, ProjectType } from 'types';
import Image from 'next/image';
import styles from './AssetAndText.module.scss';

const AssetAndText:React.FC<{data:AssetAndTextType, project:ProjectType}> = ({data, project}) => {
    return (
        <section className={styles.AssetAndText}>
            <div className={styles.asset}>
                <Image
                src={`/${data.asset.src}`}
                alt={data.text.title}
                width={data.asset.width}
                height={data.asset.height}
                />
            </div>
            <div className={styles.text}>
                <h3 className={styles.title}>{data.text.title}</h3>
                <p className={styles.description}>{data.text.description}</p>
            </div>
        </section>
    )
}

export default AssetAndText;