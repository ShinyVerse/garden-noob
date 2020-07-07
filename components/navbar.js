import { siteTitle } from "./layout";
import Link from "next/link";

export default function NavBar({ navItems, subNavItems }) {
  console.log("nav", navItems);
  console.log("subnav", subNavItems);
  return (
    <ul>
      {navItems.map((topItem, index) => (
        <li key={topItem}>
          {topItem}
          <ul>
            {subNavItems[index].map((subItem) => (
              <li key={subItem.name}>
                <Link href="/[type]/[id]" as={`/${topItem}/${subItem.id}`}>
                  <a>{subItem.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
