export default function InputField({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  icon,
  rightAction,
}) {
  return (
    <div className={`field-group ${error ? "field-error" : ""}`}>
      <label className="field-label" htmlFor={name}>
        {label}
      </label>
      <div className="field-wrapper">
        <span className="field-icon" aria-hidden="true">
          {icon}
        </span>
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className="field-input"
          autoComplete={
            type === "password"
              ? "current-password"
              : type === "email"
              ? "email"
              : "off"
          }
        />
        {rightAction && <div className="field-right">{rightAction}</div>}
      </div>
      {error && (
        <span className="field-error-msg" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}