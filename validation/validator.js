import React, { useState } from "react";

export const useValidator = () => {
  const [name, setName] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [hasError, setHasError] = useState(false);

  const nameRegex = /[^A-Za-z, ""]/g;
  const tempRegex = /[^0-9, "."]/g;

  let handleChange = (value, type) => {
    if (type === "name") {
      const nameCondition = value.length === 25;
      nameCondition ? setHasError(true) : setHasError(false);
      setName(value.replace(nameRegex, ""));
    }
    if (type === "temperature") {
      const tempCondition = (value && value < 34) || value > 42;
      tempCondition ? setHasError(true) : setHasError(false);
      setTemperature(value.replace(tempRegex, ""));
    }
  };
  return [hasError, handleChange, name, temperature];
};
