import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/registry/new-york/ui/form"
import { Input } from '@/registry/new-york/ui/input'

interface InputFieldProps {
    control: any,
    name: string,
    label: string,
    placeholder: string,
    type: string,
    endAdornment?: React.ReactNode,
    startAdornment?: React.ReactNode
}

const InputField = ({ control, name, label, placeholder, type, endAdornment, startAdornment }: InputFieldProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel><b>{label}</b></FormLabel>
                    <FormControl>
                        <Input startAdornment={startAdornment} endAdornment={endAdornment} type={type} placeholder={placeholder} {...field} />
                    </FormControl>
                    {/* <FormMessage /> */}
                    <FormDescription>
                        {/* {errors[name] && <p>{errors[name].message}</p>} */}
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default InputField;
