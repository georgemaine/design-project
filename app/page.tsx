import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.ctas}>
                    <Link className={styles.primary} href="/examples">
                        Examples
                    </Link>
                    <Link className={styles.primary} href="/examples/milele">
                        Example
                    </Link>
                </div>
            </main>
        </div>
    );
}
