import { ElementRef, ComponentPropsWithoutRef, forwardRef } from 'react'
import { Root, Thumb, Track, Range } from '@radix-ui/react-slider'
import '../css/slider.css'

import { cn } from '@/libs/utils'

const Slider = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center thumb',
      className
    )}
    {...props}
  >
    <Track className="group/item bg-blackA7 bg-[#444444] relative grow rounded-full h-[4px]">
      <Range className="range lg:group-hover/item:bg-green-600 duration-100 absolute bg-white lg:hover:bg-green-600 rounded-full h-full" />
    </Track>
    <Thumb aria-valuemax={100} aria-label='Botón para avanzar o retroceder la canción' className="thumb-circle bg-white block h-3 w-3 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </Root>
))
Slider.displayName = Root.displayName

export { Slider }
