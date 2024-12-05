'use client'
import React, { useEffect, useState } from 'react'
import { CardContent, Card, CardHeader, CardFooter, CardDescription, CardTitle } from '@/registry/new-york/ui/card'
import InputField from '@/utils/InputField'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from '@/registry/new-york/ui/form'
import { Button } from '@/registry/new-york/ui/button'
import { LOGIN_SCHEMA } from '@/validationUtil/validationschemas/example'
import { Bluetooth } from 'lucide-react'

interface LoginState {
    username: string,
    password: string
}

const LoginForm = () => {

    const initialState = {
        username: "",
        password: ""
    }

    const loginForm = useForm<LoginState>({
        resolver: yupResolver(LOGIN_SCHEMA),
        mode: "all",
        defaultValues: initialState
    })

    const {
        register,
        control,
        watch,
        handleSubmit,
        formState: { errors },
    } = loginForm;


    const onSubmit = handleSubmit((data) => console.log(data))


    return (
        <div className="w-full h-screen bg-background text-foreground">
            <div className="container h-screen mx-auto flex justify-center items-center">
                <Form {...loginForm}>
                    <form onSubmit={onSubmit}>
                        <Card className='w-[30vw] h-auto border rounded-xl'>
                            <CardHeader>
                                <CardTitle className='text-center text-3xl'> Login Form</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <InputField
                                    control={loginForm.control}
                                    {...register("username")}
                                    type='text' name='username'
                                    label='Enter Username'
                                    placeholder='Username' />
                                <InputField
                                    control={loginForm.control}
                                    {...register("password")}
                                    type='text' name='password'
                                    label='Enter Password'
                                    placeholder='Password' />

                                <Button
                                    className="w-full my-5 bg-blue-600 border rounded-xl"
                                    variant="outline"
                                >
                                    Login Now
                                </Button>
                            </CardContent>
                        </Card>
                    </form>
                </Form>
            </div>
        </div >
    )
}

export default LoginForm;

