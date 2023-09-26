import * as React from 'react';


export interface ICustomTooolbarProps {
    view: string;
    views: string[];
    label: any;
    localizer: any;
    onNavigate: (action: any) => void;
    onView: (view: any) => void;
    onViewChange: (view: any) => void;
    messages: any;
}

export const navigateContants = {
    PREVIOUS: 'PREV',
    NEXT: 'NEXT',
    TODAY: 'TODAY',
    DATE: 'DATE'
};

export const views = {
    MONTH: 'month',
    WEEK: 'week',
    WORK_WEEK: 'work_week',
    DAY: 'day',
    AGENDA: 'agenda'
};

const CustomToolbar = (props) => {
    function navigate(action) {
        props.onNavigate(action);
    }

    function viewItem(view) {
        props.onViewChange(view);
    }

    function viewNamesGroup(messages) {
        const viewNames = props.views;
        const view = props.view;

        if (viewNames.length > 1) {
            return viewNames.map((name) => (
                <button
                    type="button"
                    key={name}

                    onClick={viewItem.bind(null, name)}>

                </button>
            ));
        }
    }

    return (
        <div className="rbc-toolbar">
            <span className='back_block'>
                <button className='back'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none"><path
                    d="M18 1L6 13L18 25" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>
                   <span className='back-text'> Назад</span>
                </button>
            </span>
            <span className="rbc-btn-group">
                {/*<button type="button" onClick={navigate.bind(null, navigateContants.TODAY)}>*/}
                {/*    Current month*/}
                {/*</button>*/}

                <button className='btn-prev' type="button" onClick={navigate.bind(null, navigateContants.PREVIOUS)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none"><path
                        d="M18 1L6 13L18 25" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>
                </button>
                <span className="rbc-toolbar-label">{props.label}</span>
                <button className='btn-next' type="button" onClick={navigate.bind(null, navigateContants.NEXT)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none"><path
                        d="M6 25L18 13L6 1" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>
                </button>
            </span>
            <span className="records_block">
                <button className='all-records'>Все</button>
                <button className='my-records'>Только мои</button>
            </span>
        </div>
    );
};

export default CustomToolbar;