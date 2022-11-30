import styles from "./header.module.scss";
import { Logo } from "../../../shared/ui/components/logo/logo";
import { Navbar } from "../../navbar/ui/navbar";
import { Subheader } from "../../subheader/subheader";

const Header = () => (
  <div className={styles.header}>
    <div className={styles.headerContent}>
      <Logo />
    </div>
    <Navbar />
    <Subheader />
  </div>
);

export default Header;
