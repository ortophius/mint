import styles from './header.module.scss';
import { Logo } from '../../../shared/ui/components/logo/logo';
import { Ring } from '../../../feature/ring';
import { TableIndicator } from '../../../feature/tableIndicator/tableIndicator';
import { Navbar } from '../../navbar/ui/navbar';

const Header = () =>
  <div className={styles.header}>
    <div className={styles.headerContent}>
      <Logo />
      <div className={styles.ringWrapper}>
        <Ring />
      </div>
      <div className={styles.indicatorWrapper}>
        <TableIndicator />
      </div>
    </div>
  </div>

export default Header;