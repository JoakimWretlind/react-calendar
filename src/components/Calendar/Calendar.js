import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Section, Header } from './style';

const MyCalendar = () => {
    const [value, onChange] = useState(new Date());

    return (
        <>
            <Section>
                <Header>Calendar</Header>
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </Section>
        </>
    )
}

export default MyCalendar
