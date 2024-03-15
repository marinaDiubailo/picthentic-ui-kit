import { ComponentPropsWithoutRef, ElementType, ForwardedRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

type ButtonVariant = 'outlined' | 'primary' | 'secondary' | 'text'
type InferType<T> = T extends ElementType<infer U> ? U : never

type Props<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef(
  <T extends ElementType = 'button'>(props: Props<T>, ref: ForwardedRef<InferType<T>>) => {
    const {
      as: Component = 'button',
      children,
      className,
      fullWidth = false,
      variant = 'primary',
      ...rest
    } = props

    const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth, className)

    return (
      <Component className={classNames} ref={ref} {...rest}>
        {children}
      </Component>
    )
  }
)
