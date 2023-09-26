import React, {useEffect, useState} from 'react';
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';

// styles
import * as styles from "./webinarDesctiption.module.scss";


const mockDataProgram = "1. Понятие и принципы проведения аудита поставщика:\n- регуляторные требования и ожидания;\n- риски, ограничения;\n- виды аудитов поставщика.\n2. Подготовка и проведение:\n- источники информации для аудита;\n- условия и проведение (сфера применения; материально-техническое обеспечение; обмен коммуникациями и документами).\n3. Составление отчета аудита:\n- регуляторные требования и ожидания;\n- структура, содержание и объем отчета;\n- наиболее распространенные ошибки и рекомендации по их предотвращению.\n4. Накопленный опыт и выводы.\n\n\n\n\n\n"
const mockDataDescription = "Вебинар раскрывает следующие пункты:\n\n- Определение фармаконадзора и его роль в медицине и общественном здоровье.\n- Обзор структуры органов и учреждений, отвечающих за фармаконадзор.\n- Роли и обязанности регуляторных органов в области медицинских препаратов и медицинских изделий.\n"


const WebinarDescription = ({type}) => {
    const [markDown, setMarkdown] = useState('');

    useEffect(() => {
        if (type === 'program') {
            setMarkdown(mockDataProgram)
        } else {
            setMarkdown(mockDataDescription)
        }

    }, [])

    return (
        <div className={styles.root}>
            <ReactMarkdown
                className={type === 'program' ? styles.program : styles.description}
                remarkPlugins={[gfm]}
                children={markDown}
            />
        </div>
    );
};

export default WebinarDescription;