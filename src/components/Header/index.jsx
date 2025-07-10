import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo-primary.svg";
import styles from "./style.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className="styles.containerLogo">
          <Image src={logo} width={150} height={80} alt="Logo" />
        </div>
        <div className={styles.containerLinks}>
          <Link href="/login" className={styles.links}>
            Entrar
          </Link>
          <Link href="/register" className={styles.links}>
            Criar conta
          </Link>
        </div>
        <div className={styles.containerMenuIcon}>
        <FontAwesomeIcon className={styles.menuIcon} icon={faBars} />
        </div>
      </header>
    </>
  );
};
