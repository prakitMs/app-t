"use client";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import "react-day-picker/style.css";

export function Calendar({ ...props }) {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      className="px-3"
      captionLayout="dropdown"
      defaultMonth={new Date()}
      endMonth={new Date()}
      selected={selected}
      onSelect={setSelected}
      {...props}
    />
  );
}
