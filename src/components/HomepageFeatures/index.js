import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {Icon} from "@iconify/react";

const features = [
    {
        title: 'Lightning-Fast Effects',
        description: 'EffectMaster gives you full control over stunning particle effects, fountains, sounds, lighting and so much more with high performance and minimal setup.',
        icon: 'ph:meteor-bold',
    },
    {
        title: 'Fully Customizable',
        description: 'Change every parameter through every effect, through the in-game editor or YAML. Can\'t find the effect you need? Create it yourself using the Developer API.',
        icon: 'si:dashboard-customize-fill',
    },
    {
        title: 'Integrate your Favorite Plugin',
        description: 'Do you want to extend EffectMaster\'s functionality even further? It can integrate with multiple plugins such as WorldGuard, TrainCarts, Animatronics and ProtocolLib.',
        icon: 'fluent:wrench-settings-24-filled',
    },
];

function Feature({icon, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Icon icon={icon} className={styles.featureIcon} />
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
