import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav:React.FC = () => {

    return(
        <nav className={styles.Nav}>
            <div className={styles.domain}>
            <Link href="/">
                <a>
                    <div>artesano.dev</div>
                </a> 
            </Link>
            </div>
            <ul className={styles.links}>
                <li>GH</li>
                <li>LI</li>
                <li>IG</li>
            </ul>
        </nav>
    )
}

export default Nav;