import { ReactNode } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './Popover'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ToolTip'

type Props = {
  name: string | ReactNode
  tooltiName: string | undefined
  children: ReactNode
  className?: string
}

export default function TooltipButton ({ name, tooltiName, children, className }: Props) {
  return (
    <Popover>
      <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger>
            <PopoverTrigger className={`hover:scale-105 grid place-content-center duration-150 ${className}`}>
              {name}
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent className='lg:block hidden'>
            <p>{tooltiName}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <PopoverContent className='bg-[#1b1b1b] flex flex-col gap-1 text-white w-[170px] mr-12 mt-2 border-none p-2'>
        {children}
      </PopoverContent>
    </Popover>
  )
}
