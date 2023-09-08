'use client';
import CheckboxBasic from './CheckboxBasic';
import CheckboxBasicSingle from './CheckboxBasicSingle';
import CheckboxContext from './CheckboxContext';

export const Checkbox = ({
  className,
  id,
  name,
  type = 'basic-single',
  children,
}: {
  className?: string;
  id: string;
  name: string;
  type?: 'basic-single' | 'basic-multi' | 'form';
  children?: React.ReactNode;
}) => {
  const checked =
    "before:bg-[url('/images/check_mark.png')] before:bg-no-repeat before:bg-center before:bg-[length:12px_auto] before:bg-black";

  switch (type) {
    case 'basic-single': {
      return (
        <CheckboxBasicSingle className={className} id={id} name={name} checkedStyle={checked}>
          {children}
        </CheckboxBasicSingle>
      );
    }

    case 'basic-multi': {
      return (
        <CheckboxBasic className={className} id={id} name={name} checkedStyle={checked}>
          {children}
        </CheckboxBasic>
      );
    }
    case 'form': {
      return (
        <CheckboxContext className={className} id={id} name={name} checkedStyle={checked}>
          {children}
        </CheckboxContext>
      );
    }
  }
};
