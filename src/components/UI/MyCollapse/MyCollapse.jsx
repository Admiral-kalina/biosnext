'use client'
// import React from 'react';
// import {Collapse} from 'antd';
//
// // styles
// import "./myCollapse.scss"
//
//
// const children = (text) => {
//     return (
//         <div className="collapse_content">
//             <span>Критерии уровня:</span>
//
//             {text.map(el =>
//                 <p>{el}</p>
//             )}
//         </div>
//     )
// }
//
// const items = [
//     {
//         key: '1',
//         label: '1. Beginner (Начальный уровень)',
//         children: children(['Отсутствуют знания о фармаконадзоре', ' Интерес и мотивация к освоению новой специальности в данной сфере.'])
//     },
//     {
//         key: '2',
//         label: '2. Elementary (Элементарный уровень)',
//         children: children(['Присутствует понимание понятия фармаконадзора', ' Опыт в построении системы фармаконадзора', ' Мотивация к развитию и карьерному росту в фармацевтической компании.'])
//     },
//     {
//         key: '3',
//         label: '3. Intermediate (Средний уровень)',
//         children: children(['Знания и опыт работы в фармаконадзоре', ' Способность презентовать и/или оценить систему фармаконадзора', ' Мотивация к развитию и карьерному росту в фармацевтической или смежной отраслях.'])
//     },
//     {
//         key: '4',
//         label: '4. Advanced (Продвинутый уровень)',
//         children: children(['Знание ключевых аспектов фармаконадзора', ' Способность использования риск-ориентированного подхода', ' Готовность к внедрению лучших практик фармаконадзора.'])
//     },
//     {
//         key: '5',
//         label: '5. Extra (Специализированный уровень)',
//         children: children(['Знание ключевых аспектов фармаконадзора', ' Заинтересованность в отдельных, узкоспециализированных темах фармаконадзора', ' Мотивация к освоению и применению трендовых и инновационных направлений фармаконадзора.'])
//     },
//
// ];
//
// const MyCollapse = () => {
//     const onChange = (key) => {
//         console.log(key);
//     };
//     return (<div className="collapse">
//             <Collapse items={items}  onChange={onChange}/>
//         </div>
//     )
// };
// export default MyCollapse;




import React from 'react';
import {Collapse} from 'antd';

// styles
import "./myCollapse.scss"


const children = (text) => {

    return (
        <div className="collapse_content">
            <span>Критерии уровня:</span>

            {/*{text.map(el =>*/}
            {/*    < p>{el}</p>*/}
            {/*)}*/}
        </div>
    )
}

const itemsNest = [
    {
        key: '1',
        label: 'This is panel nest panel',
        children: children(['Клинические испытания']),
    },
];

const items = [
    {
        key: '1',
        label: '1. Beginner (Начальный уровень)',
        children: <Collapse items={itemsNest} />
    },
    {
        key: '2',
        label: '2. Elementary (Элементарный уровень)',
        children: children(['Присутствует понимание понятия фармаконадзора', ' Опыт в построении системы фармаконадзора', ' Мотивация к развитию и карьерному росту в фармацевтической компании.'])
    },
    {
        key: '3',
        label: '3. Intermediate (Средний уровень)',
        children: children(['Знания и опыт работы в фармаконадзоре', ' Способность презентовать и/или оценить систему фармаконадзора', ' Мотивация к развитию и карьерному росту в фармацевтической или смежной отраслях.'])
    },
    {
        key: '4',
        label: '4. Advanced (Продвинутый уровень)',
        children: children(['Знание ключевых аспектов фармаконадзора', ' Способность использования риск-ориентированного подхода', ' Готовность к внедрению лучших практик фармаконадзора.'])
    },
    {
        key: '5',
        label: '5. Extra (Специализированный уровень)',
        children: children(['Знание ключевых аспектов фармаконадзора', ' Заинтересованность в отдельных, узкоспециализированных темах фармаконадзора', ' Мотивация к освоению и применению трендовых и инновационных направлений фармаконадзора.'])
    },

];

const MyCollapse = () => {
    const onChange = (key) => {
        console.log(key);
    };
    return (<div className="collapse">
            <Collapse items={items}  onChange={onChange}/>
        </div>
    )
};
export default MyCollapse;