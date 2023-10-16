import React, {useEffect, useState} from 'react';
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';

// styles
import * as styles from "./webinarDesctiption.module.scss";



const WebinarDescription = ({type,programDescription, webinarDescription}) => {
    const [markDown, setMarkdown] = useState('');

    useEffect(() => {
        if (type === 'program') {
            setMarkdown(programDescription)
        } else {
            setMarkdown(webinarDescription)
        }

    }, [programDescription,webinarDescription])

    return (
        <div className={styles.root}>
            <ReactMarkdown
                className={type === 'program' ? styles.program : styles.description}
                remarkPlugins={[gfm]}
            >
                {markDown}
            </ReactMarkdown>
        </div>
    );
};

export default WebinarDescription;