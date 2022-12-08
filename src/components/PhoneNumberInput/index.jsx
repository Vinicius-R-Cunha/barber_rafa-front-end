import { useState } from "react";
import { Input } from "./style";

export default function PhoneNumberInput({ placeholder, reference, disabled }) {
  const [inputValue, setInputValue] = useState("");

  function mask(e) {
    let value = e.target.value;
    value = value.replace(/[^\d]/g, "");
    if (value.length === 3) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      e.target.value = value;
      return e;
    }
    if (value.length === 8) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(
        7,
        11
      )}`;
      e.target.value = value;
      return e;
    }

    return e;
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <Input
      maxLength={15}
      placeholder={placeholder}
      ref={reference}
      onChange={(e) => handleChange(mask(e))}
      value={reference?.current?.value === "" ? "" : inputValue}
      disabled={disabled}
    />
  );
}
