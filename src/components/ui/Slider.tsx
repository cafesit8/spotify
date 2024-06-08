import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import '../css/slider.css'

import { cn } from '@/libs/utils'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center thumb',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="group/item bg-blackA7 bg-[#444444] relative grow rounded-full h-[4px]">
      <SliderPrimitive.Range className="range lg:group-hover/item:bg-green-600 duration-100 absolute bg-white lg:hover:bg-green-600 rounded-full h-full" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="thumb-circle bg-white block h-3 w-3 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
