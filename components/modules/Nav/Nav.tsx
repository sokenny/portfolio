import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav:React.FC = () => {

    return(
        <nav className={styles.Nav}>
            <Link href="/">
                <a>
                    <div>artesano.dev</div>
                </a> 
            </Link>
        </nav>
    )
}

export default Nav;