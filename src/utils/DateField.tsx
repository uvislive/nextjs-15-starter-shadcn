"use client"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "../lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import { Calendar } from "@/registry/new-york/ui/calendar"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/registry/new-york/ui/form"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/registry/new-york/ui/popover"



interface DateFieldProps {
    control: any,
    trigger: any,
    name: string,
    label: any,
    placeholder: any,
    selectedItems: Array<React.ReactNode>
}

export function DateField({ control, trigger, name, label, placeholder }: DateFieldProps) {
    const handleBlur = () => {
        trigger(name);  // Trigger validation on blur
    };
    return (
        <FormField
            // className="w-[5rem]"
            control={control}
            name={name}
            render={({ field }: any) => (
                <FormItem onBlur={handleBlur} className="flex flex-col">
                    <FormLabel><b>{label}</b></FormLabel>
                    <Popover>
                        <PopoverTrigger asChild >
                            <FormControl className='w-full'>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    {field.value ? (
                                        format(field.value, "PPP")
                                    ) : (
                                        <span>{placeholder}</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                // onBlur={handleBlur}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                    date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    {/* <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription> */}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
