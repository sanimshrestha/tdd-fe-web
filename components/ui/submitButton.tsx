import React from 'react'
import { useFormStatus } from 'react-dom';
import { Button, ButtonProps } from './button';



const SubmitButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    const { pending } = useFormStatus();
    return (
      <Button
        ref={ref}
        type="submit"
        disabled={props.disabled !== undefined ? props.disabled : pending}
        {...props}
      >
        {children}
      </Button>
    )
  })

SubmitButton.displayName = "SubmitButton"

export default SubmitButton