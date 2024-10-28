/* eslint-disable react/prop-types */
export default function MenuItem({ option }) {
  return (
    <div className="MenuItem">
      <label htmlFor={option.name}>{option.name}</label>
      <input type="radio" name="item" id={option.name} value={option.name} />
    </div>
  );
}
