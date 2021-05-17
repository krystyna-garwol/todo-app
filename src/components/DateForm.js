import React from 'react';

const DateForm = ({ tasks }) => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const dayName = date.toLocaleString('default', { weekday: 'long' });
    const dayNo = date.getDate();

    const getOrdinal = (dayNo) => {
        if (dayNo === 1) return 'st';
        else if (dayNo === 2) return 'nd';
        else if (dayNo === 3) return 'rd';
        else return 'th';
    }

    const tasksLen = () => {
        if (tasks.length === 0) return 'No Tasks';
        else if (tasks.length === 1) return `${tasks.length} Task`;
        else return `${tasks.length} Tasks`;
    }

    return (
        <div id="date-items" data-testid="date-items">
            <div>
                <h1>{dayName + ', ' + dayNo + getOrdinal(dayNo)}</h1>
                <p id="month">{month}</p>
            </div>
            <p data-testid="date-tasks" id="date-tasks">{tasksLen()}</p>
        </div>
    )
}

export default DateForm;
