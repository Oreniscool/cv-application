/* eslint-disable react/prop-types */
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  pattern = null,
  min,
  max,
}) {
  return (
    <label>
      {label}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        pattern={pattern}
        min={min}
        max={max}
        step="0.01"
        required
      />
    </label>
  );
}

function TextArea({ label, value, onChange }) {
  return (
    <label>
      {label}
      <textarea
        type="text"
        value={value}
        onChange={onChange}
        rows={5}
        cols={40}
      />
    </label>
  );
}

export { Input, TextArea };
