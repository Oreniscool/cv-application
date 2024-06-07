/* eslint-disable react/prop-types */
function Input({ label, value, onChange }) {
  return (
    <label>
      {label}
      <input type="text" value={value} onChange={onChange} />
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
