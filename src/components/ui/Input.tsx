import * as React from 'react'

import { cn } from '@/libs/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: React.HTMLInputTypeAttribute
  name: string,
  className?: string,
  errors: any,
  label?: string,
  register: any,
}

export function Input (props: InputProps) {
  const { label, errors, name, register, type = 'text', className, ...restprops } = props
  const errorValidation = errors[name]?.message?.length > 0
  return (
    <>
      <label>
        {label}
        <input
          type={type}
          {...register(name)}
          className={cn(
            'flex h-9 w-full text-white rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            { 'border-red-400': errors[name] },
            className
          )}
          {...restprops}
        />
      </label>
      {errorValidation && <span className='text-red-400 -mt-4 text-xs'>{errors[name]?.message}</span>}
    </>
  )
}
