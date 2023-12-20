"use client";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { useClickAway } from "react-use";

export type Option = {
  value: string;
  label: string;
  name?: string;
};
export type OnChangeArgument = Option & { name: string };

type IPropType = {
  options: Option[];
  value?: string;
  placeholder?: string;
  cls?: string | undefined;
  onChange: (item: OnChangeArgument) => void;
  name: string;
};

const NiceSelect = ({
  options,
  value,
  placeholder,
  cls,
  onChange,
  name,
}: IPropType) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(
    options.find((option) => option.value === value)
  );
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);
  const ref = useRef(null);

  useClickAway(ref, onClose);
  useEffect(() => {
    // Update the current selection when value changes
    setCurrent(options.find((option) => option.value === value));
  }, [value, options]);

  const currentHandler = (item: Option) => {
    setCurrent(item);
    onChange({ ...item, name }); // Pass both item properties and the name
    onClose();
  };
  return (
    <div
      className={`nice-select ${cls ? cls : ""} ${open && "open"}`}
      role="button"
      tabIndex={0}
      onClick={() => setOpen((prev) => !prev)}
      ref={ref}
    >
      <span className="current">{current?.label || placeholder}</span>
      <ul
        className="list"
        role="menubar"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxHeight: "200px", // Set a max height for the dropdown
          overflowY: "auto", // Add scroll for overflow content
          display: open ? "block" : "none", // Only show when `open` is true
        }}
      >
        {options?.map((item, i) => (
          <li
            key={i}
            data-value={item.value}
            className={`option ${
              item.value === current?.value && "selected focus"
            }`}
            role="menuitem"
            onClick={() => currentHandler(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NiceSelect;
