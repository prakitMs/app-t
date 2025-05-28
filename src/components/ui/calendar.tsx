"use client";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import "react-day-picker/style.css";

export function Calendar({ ...props }) {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      captionLayout="dropdown"
      defaultMonth={new Date(2024, 6)}
      startMonth={new Date(1950, 6)}
      endMonth={new Date()}
      selected={selected}
      onSelect={setSelected}
      {...props}
    />
  );
}
