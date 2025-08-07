import styles from './styles.module.css';
import {Icon} from "@iconify/react";

export default function DocHeading({title, description, icon}) {
    return (
        <div className={"doc-heading"}>
            <h1 className={styles.headerSpacing}>
                <Icon icon={icon} inline className={styles.icon} />
                {` ${title}`}
            </h1>
            <h3 className={styles.subHeader}>{description}</h3>
        </div>
    );
}
