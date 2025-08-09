import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className={styles.heroTitle}>EffectMaster</h1>
                <p className={styles.heroSubtitle}>Create beautiful visuals for your Minecraft Server</p>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="/docs/getting-started">
                        Get Started
                    </Link>
                    <Link className="button button--secondary button--outline button--lg" to="https://modrinth.com/plugin/effectmaster">
                        Download
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout
            title="EffectMaster Wiki"
            description="The ultimate particle effect plugin for Minecraft servers."
        >
            <div className={styles.landingPage}>
                <HomepageHeader/>
                <main>
                    <HomepageFeatures/>
                </main>
            </div>
        </Layout>
    );
}
