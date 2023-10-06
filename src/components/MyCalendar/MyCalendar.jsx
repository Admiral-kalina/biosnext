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

const localizer = momentLocalizer(moment)

const MyCalendar = ({general, programs = []}) => {
    const [date, setDate] = useState(new Date());

    moment.locale("ua");
    const ref = useRef()

    const events = programs
        .reduce((acc, curr) => acc.concat(curr.webbinarrs?.data || []), [])
        .map(item => ({
            ...item.attributes,
            start: new Date(),
            end: new Date(),
            programLink: "https://codesandbox.io/s/react-big-calendar-example-lrwm4?file=/events.js",
            eventLink: "https://google.com",
            topic: "Фармалкология",
            type: "Вебинар",
            price: 500
        }));

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
                        toolbar: props => <CustomToolbar {...props} setDate={setDate} date={date}/>,
                    }}
                />
            </div>
        </div>

    );
};

export default MyCalendar;

