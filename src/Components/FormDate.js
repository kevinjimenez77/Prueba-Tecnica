import React, { useState } from "react";
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css'

export function SelectDate() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <form>
            <div className="mb-3">
                Fecha Inicial:
                <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
            </div>
            <div className="mb-3">
                Fecha Final:
                <DatePicker selected={endDate} onChange={(date: Date) => setEndDate(date)} />
            </div>
        </form>
    )
}