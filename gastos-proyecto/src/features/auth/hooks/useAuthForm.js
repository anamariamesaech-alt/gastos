import { useState } from "react";

export function useAuthForm(initialValues, validations) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const fieldErrors = validations({ ...values, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || "" }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validations(values);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || "" }));
  };

  const validate = () => {
    const allErrors = validations(values);
    setErrors(allErrors);
    const allTouched = Object.keys(values).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {}
    );
    setTouched(allTouched);
    return Object.values(allErrors).every((e) => !e);
  };

  return { values, errors, touched, handleChange, handleBlur, validate };
}