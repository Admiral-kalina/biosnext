import React, {useRef, useState} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'

import Event from "./components/Event"

// styles
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.scss";
import CustomToolbar from "./CustomCalendar";
import * as styles from "../Home/home.module.scss";
import 'moment/locale/uk'
import 'moment/locale/ru'
import {createCalendarEvents} from "@/helpers/createCalendarEvents";
import {useSelector} from "react-redux";

const localizer = momentLocalizer(moment)

const MyCalendar = ({general, userPrograms = [], globalPrograms = []}) => {
    const [isAllRecords, setIsAllRecords] = useState(true)
    const {language} = useSelector(state => state.user.user)
    const [date, setDate] = useState(new Date());

    moment.locale(language === 'ua' ? 'uk' : language);

    const ref = useRef()


    const events = createCalendarEvents(isAllRecords ? globalPrograms : userPrograms)

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
                    events={events}
                    localizer={localizer}
                    startAccessor="start"
                    endAccessor="end"
                    components={{
                        event: Event,
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

