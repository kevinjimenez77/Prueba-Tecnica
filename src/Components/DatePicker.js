import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export function NewDatePicker(){
    const [startDate, setStartDate] = useState(new Date());
    return(
        <div className="container">
            <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
        </div>
    )
}