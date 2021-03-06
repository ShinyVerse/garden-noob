import { siteTitle } from "./layout";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function NavBar({ navItems, subNavItems }) {
  return (
    <ul className={styles.navbar}>
      <div className="logo-container">
        <Link href="/">
          <a>
            <img className="logo" src="/gardenNoob.png" />
          </a>
        </Link>
      </div>
      {navItems.map((topItem, index) => {
        return (
          <li className={styles.category} key={topItem}>
            {topItem} <span className={styles.entity}></span>
            <ul className={styles.subcategoryContainer}>
              {subNavItems[index].map((subItem) => (
                <li className={styles.subcategory} key={subItem.name}>
                  <Link href="/[type]/[id]" as={`/${topItem}/${subItem.id}`}>
                    <a>{subItem.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
