import './button.css';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  variant?: 'primary' | 'secondary' | 'error';
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'secondary',
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const mode = variant === 'primary' ? 'ds-button--primary' : variant === 'secondary' ? 'ds-button--secondary' : 'ds-button--error';
  return (
    <button
      type="button"
      className={['ds-button', `ds-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
