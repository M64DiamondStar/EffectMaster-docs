import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const features = [
    {
        title: 'Lightning-Fast Effects',
        description: 'EffectMaster gives you full control over stunning particle effects with high performance and minimal setup.',
        Svg: require('@site/static/img/particles.svg').default,
    },
    {
        title: 'Event-Driven Triggers',
        description: 'Trigger effects through commands, region flags, mob events, or even custom scripts — all with ease.',
        Svg: require('@site/static/img/events.svg').default,
    },
    {
        title: 'Fully Customizable',
        description: 'Design your own effects using YAML or API calls. Every detail — from timing to targeting — is in your hands.',
        Svg: require('@site/static/img/customize.svg').default,
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <>
            <main className={styles.features}>
                <div className="container">
                    <div className="row">
                        {features.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
