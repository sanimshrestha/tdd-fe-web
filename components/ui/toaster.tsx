"use client"
import {
  Toast,
  ToastClose,
  ToastIcon,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from "@ui/toast"
import { TOAST_REMOVE_DELAY, useToast } from "@ui/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider duration={TOAST_REMOVE_DELAY}>
      {toasts.map(function (
        { id, title, description, action, variant, ...props }
      ) {
        return (
          <Toast key={id} {...props}>
            <div className="relative flex flex-col sm:flex-row sm:items-center">
              <ToastIcon variant={variant} />
              {title && <ToastTitle>{title}</ToastTitle>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider >
  )
}
