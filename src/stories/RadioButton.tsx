import './radio-button.css';

export interface RadioButtonProps {
  /** The label text for the radio button */
  label: string;
  /** The value of the radio button */
  value: string;
  /** The name of the radio button group */
  name: string;
  /** Whether the radio button is checked */
  checked?: boolean;
  /** Whether the radio button is disabled */
  disabled?: boolean;
  /** Optional change handler */
  onChange?: (value: string) => void;
  /** The size of the radio button */
  size?: 'small' | 'medium' | 'large';
}

/** Radio button component for selecting one option from a group */
export const RadioButton = ({
  label,
  value,
  name,
  checked = false,
  disabled = false,
  onChange,
  size = 'medium',
  ...props
}: RadioButtonProps) => {
  return (
    <label className={`radio-button radio-button--${size} ${disabled ? 'radio-button--disabled' : ''}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange?.(value)}
        {...props}
      />
      <span className="radio-button__dot" />
      <span className="radio-button__label">{label}</span>
    </label>
  );
};
