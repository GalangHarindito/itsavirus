import React from 'react';
import RadioCustom from '../RadioCustom';

export default function RadioGroupCustom(props) {
  const { className, disabled, input, label, options } = props;
  const classes = ["radio-group", className].filter(Boolean).join(" ");
  return(
    <section>
      {options.map((option, idx) => {
        const { onChange, value: inputValue } = input;
        const { label, value} = option;
        const handleChange = () => onChange(value);
        const checked = inputValue === value;

        return(
          <div key={idx}>
            <RadioCustom label={label} onChange={handleChange} checked={checked} />
          </div>
        )
      })}
    </section>
  )
}