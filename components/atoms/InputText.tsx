import InputTextBasic from './InputTextBasic';
import InputTextContext from './InputTextContext';

export const InputText = ({
  className,
  id,
  inputType,
  type = 'basic',
  title,
  placeholder,
  disabled = false,
}: {
  className?: string;
  id: string;
  inputType: 'email' | 'text' | 'password' | 'phone' | 'birth' | 'card';
  type?: 'basic' | 'form';
  title: string;
  placeholder: string;
  disabled?: boolean;
}) => {
  const focusColor = 'focus-visible:shadow-[0_0_0_2px_#1101ff]';
  switch (type) {
    case 'basic': {
      return (
        <InputTextBasic
          className={className}
          id={id}
          inputType={inputType}
          title={title}
          placeholder={placeholder}
          disabled={disabled}
        />
      );
    }
    case 'form': {
      return (
        <InputTextContext
          className={className}
          id={id}
          inputType={inputType}
          title={title}
          placeholder={placeholder}
          disabled={disabled}
        />
      );
    }
  }
};
