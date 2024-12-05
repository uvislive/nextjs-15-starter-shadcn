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
import { Select, SelectContent, SelectTrigger } from '@/registry/new-york/ui/select'
import { SelectValue } from '@radix-ui/react-select'

interface SelectFieldProps {
    control: any,
    trigger: any,
    name: string,
    label: any,
    placeholder: any,
    selectedItems: Array<React.ReactNode>
}

const SelectField = ({ control, trigger, name, label, placeholder, selectedItems }: SelectFieldProps) => {
    const handleBlur = () => {
        trigger(name);  // Trigger validation on blur
    };

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }: any) => (
                <FormItem>
                    <FormLabel><b>{label}</b></FormLabel>
                    <Select onChange={field.onChange} value={field.value} onValueChange={field.onChange} {...field} >
                        <FormControl >
                            <SelectTrigger onClick={handleBlur} onBlur={handleBlur}>
                                <SelectValue className="font-bold" placeholder={placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        {/* {selectedItems} */}
                        <SelectContent>{selectedItems}</SelectContent>
                    </Select>
                    {/* <FormDescription>
                  you can add here description
            </FormDescription> */}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default SelectField;
