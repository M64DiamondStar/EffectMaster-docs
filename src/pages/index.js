import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {Icon} from '@iconify/react';
import {useEffect, useState} from 'react';

import styles from './index.module.css';

const DISCORD_INVITE = 'https://discord.com/invite/Scv9afJwXp';
const DISCORD_GUILD_ID = '1061267552661155891';

function DiscordOnlineCount() {
    const [online, setOnline] = useState(null);

    useEffect(() => {
        fetch(`https://discord.com/api/guilds/${DISCORD_GUILD_ID}/widget.json`)
            .then(res => res.json())
            .then(data => setOnline(data.presence_count))
            .catch(() => setOnline(null));
    }, []);

    if (online === null) return null;

    return (
        <span className={styles.discordOnline}>
            <span className={styles.onlineDot}/>
            {online.toLocaleString()} online
        </span>
    );
}

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
                    <Link className="button button--secondary button--outline button--lg"
                          to="https://modrinth.com/plugin/effectmaster">
                        Download
                    </Link>
                </div>
                <div className={styles.buttons}>
                    <Link className={clsx('button button--lg', styles.discordButton)} to={DISCORD_INVITE}>
                        <Icon icon="ic:baseline-discord" className={styles.discordIcon}/>
                        Discord
                        <DiscordOnlineCount/>
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