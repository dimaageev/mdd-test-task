import React, { useEffect, useState } from "react";

export const useValidator = (value) => {
  const [hasError, setHasError] = useState();

  useEffect(() => {
    condition ? setHasError(true) : setHasError(false);
  });
};
