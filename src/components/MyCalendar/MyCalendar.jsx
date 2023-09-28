import React, {useRef} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'


// styles
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.scss";
import CustomToolbar from "./CustomCalendar";
import * as styles from "../Home/home.module.scss";
import 'moment/locale/uk'
import 'moment/locale/ru'

const localizer = momentLocalizer(moment)

const events = [
    {
        'title': 'All Day Event very long title',
        'allDay': true,
        'start': new Date(2023, 8, 18),
        'end': new Date(2023, 8, 18),
        'editionData': 'asdf'
    },
    {
        'title': 'Long Event',
        'start': new Date(2023, 8, 20),
        'end': new Date(2023, 8, 20),
        'editionData': 'fasd'
    },
]

const CustomEvent = ({event}) => {
    console.log("prr", event)
    return (
        <div className="event_element">

            {event.editionData}
            {/*{event.title}asdfasdf*/}
        </div>
    )
}

const MyCalendar = ({general}) => {
    moment.locale("ua");
    const ref = useRef()
    console.log(ref)

    return (
        <div className={styles.gridCalendar}>
            <div className={`calendar ${general ? 'generalCalendar' : ''}`}>
                <Calendar
                    ref={ref}
                    events={events}
                    localizer={localizer}
                    startAccessor="start"
                    endAccessor="end"
                    components={{
                        event: CustomEvent,
                        toolbar: CustomToolbar,
                    }}
                />
            </div>
        </div>

    );
};

export default MyCalendar;

