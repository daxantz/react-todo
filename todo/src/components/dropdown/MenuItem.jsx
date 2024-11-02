export default function MenuItem({ option, type, handleChange }) {
  return (
    <div className="MenuItem">
      <label htmlFor={option.name}>{option.name}</label>
      <input
        onChange={(e) => handleChange(e)}
        type={type}
        name={"item"}
        id={option.name}
        value={option.value}
      />
    </div>
  );
}
