import { NavLink } from 'react-router-dom';
import paths from '../../../shared/config/paths';
import Button from '../../../shared/ui/components/button/ui/button';
import TextButton from '../../../shared/ui/components/button/ui/textButton';
import styles from './header.module.scss';
import { Logo } from './logo/logo';

const Header = () => <div className={styles.header}>
  <div className={styles.headerContent}>
    <Logo />
</div>
</div>

export default Header;