import * as React from 'react'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'

import { cn } from '@/libs/utils'
import { Button } from '@/components/ui/Button'
import { Calendar } from '@/components/ui/Calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/Popover'

type InputDateProps = {
  label: string
  text?: string
  disabled?: boolean
  register?: any
  errors?: any
  name?: string
}

export function DatePickerDemo ({ label, disabled, text }: InputDateProps) {
  const [date, setDate] = React.useState<Date>()
  return (
    <label>
      <span>{label}</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            disabled={disabled}
            variant={'outline'}
            className={cn(
              'w-full justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, 'PPP') : <span>{text || 'Seleccione una Fecha'}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(e) => {
              setDate(e)
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </label>
  )
}
