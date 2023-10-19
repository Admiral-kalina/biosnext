import React, {useEffect, useState} from 'react';
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';

// styles
import * as styles from "./webinarDesctiption.module.scss";


const WebinarDescription = ({type, programDescription, programTitle, webinarDescription}) => {
    const [markDown, setMarkdown] = useState('');

    useEffect(() => {
        if (type === 'program') {
            setMarkdown(programDescription)
        } else {
            setMarkdown(webinarDescription)
        }

    }, [programDescription, type, webinarDescription])

    return (
        <div className={styles.root}>
            <div className={type === 'program' ? styles.program : styles.description}>
                {programTitle &&
                    <p className={styles.programTitle}>{programTitle}</p>
                }
                <ReactMarkdown
                    remarkPlugins={[gfm]}
                >
                    {markDown}
                </ReactMarkdown>

            </div>
        </div>
    );
};

export default WebinarDescription;