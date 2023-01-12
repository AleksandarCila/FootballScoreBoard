import { useState, useEffect } from "react";

export const useValidate = (input: string, label: string) => {
  const [error, setError] = useState("");

  useEffect(
    function validateInput() {
      if (input.length > 0) setError("");
      else setError(`${label} can not be an empty string`);
    },
    [input, label]
  );

  return { error };
};
