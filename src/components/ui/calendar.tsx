"use client";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import "react-day-picker/style.css";
import { isAfter } from "date-fns";

export function Calendar({ ...props }) {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      captionLayout="dropdown"
      defaultMonth={new Date(2025, 6)}
      startMonth={new Date(1950, 6)}
      endMonth={new Date()}
      selected={selected}
      onSelect={setSelected}
      showOutsideDays
      disabled={(date) => isAfter(date, new Date())}
      {...props}
    />
  );
}
