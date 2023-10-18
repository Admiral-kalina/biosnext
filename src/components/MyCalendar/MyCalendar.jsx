import React, {useRef, useState} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';

import 'moment/locale/uk';
import 'moment/locale/ru';
import moment from 'moment';

const localizer = momentLocalizer(moment);

import {useSelector} from "react-redux";
// components
import Event from "./components/Event";
import CustomToolbar from "./CustomCalendar";

// helpers
import {createCalendarEvents} from "@/helpers/createCalendarEvents";

// styles
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.scss";
import * as styles from "../Home/home.module.scss";
import {useTranslation} from "react-i18next";
import {removeDuplicates} from "@/helpers/getNearestEventsByKey";


const MyCalendar = ({general, userPrograms = [], globalPrograms = []}) => {
    const {t} = useTranslation()
    const [isAllRecords, setIsAllRecords] = useState(true)
    const {language} = useSelector(state => state.user.user)
    const [date, setDate] = useState(new Date());

    moment.locale(language === 'ua' ? 'uk' : language);

    const ref = useRef()

    const records = isAllRecords ? globalPrograms : userPrograms;

    const events = createCalendarEvents(records, general,t)
const eventsWithoutDuplicates = removeDuplicates(events)
    const handleClick = (bool) => {
        setIsAllRecords(bool)
    }

    return (
        <div className={styles.gridCalendar}>
            <div className={`calendar ${general ? 'generalCalendar' : ''}`}>
                <Calendar
                    selectable
                    steps={60}
                    date={date}
                    resourceIdAccessor="resourceId"
                    resourceTitleAccessor="resourceTitle"
                    ref={ref}
                    events={eventsWithoutDuplicates}
                    localizer={localizer}
                    startAccessor="start"

                    endAccessor="end"
                    components={{
                        event: props =>
                            <Event
                                {...props}
                                general={general}
                            />,
                        toolbar: props =>
                            <CustomToolbar
                                {...props}
                                setDate={setDate}
                                date={date}
                                isAllRecords={isAllRecords}
                                handleClick={handleClick}
                            />,
                    }}
                />
            </div>
        </div>

    );
};

export default MyCalendar;

