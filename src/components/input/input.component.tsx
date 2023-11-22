import './input.module.css';
import '../../index.css';
import { User, LockKey, PaperPlaneRight } from '@phosphor-icons/react';

import styles from './input.module.css';
import { ChangeEvent, useState } from 'react';

type Props = {
  value?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  icon?: 'user' | 'lock';
  validator?: any;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  buttonIcon?: 'send';
};

function Input({
  placeholder,
  icon,
  validator,
  type,
  onChange,
  buttonIcon,
}: Props) {
  const [errorMessage, setErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  function getLeftIcon() {
    const size = 25;
    switch (icon) {
      case 'user':
        return <User className={styles.icon} weight="fill" size={size} />;
      case 'lock':
        return <LockKey className={styles.icon} weight="fill" size={size} />;
      default:
        return <></>;
    }
  }

  function getButtonIcon() {
    const size = 25;
    switch (buttonIcon) {
      case 'send':
        return (
          <PaperPlaneRight
            className={styles.buttonIcon}
            weight="fill"
            size={size}
          />
        );
      default:
        return <></>;
    }
  }

  function validateInput(inputValue: string) {
    if (validator) {
      try {
        validator.validateSync(inputValue);
        setErrorMessage('');
      } catch (err: any) {
        setErrorMessage(err.errors[0]);
      }
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    validateInput(event.target.value);
    if (onChange) {
      onChange(event);
    }
  }

  function createInputContainerClass() {
    if (!errorMessage) return styles.inputContainer;
    else return styles.inputContainerError;
  }

  return (
    <div className={styles.mainContainer}>
      <div className={createInputContainerClass()}>
        {getLeftIcon()}
        <input
          className={styles.input}
          placeholder={placeholder}
          type={type}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleInputChange}
        />
        {getButtonIcon()}
      </div>
      {errorMessage ? (
        <div className={styles.errorContainer}>
          <label
            className={
              isFocused && errorMessage ? styles.errorVisible : styles.error
            }
          >
            {errorMessage}
          </label>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Input;
