import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Icons } from "./icons"

const emailSchema = z.object({
    email: z.string().email("Please enter a valid email address."),
})

export function NewsletterForm() {
    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof emailSchema>>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: "",
        },
    })

    function onSubmit(data: z.infer<typeof emailSchema>) {
        setLoading(true)
        console.log(data)
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full grid pr-8 lg:pr-0">
            <Card className="w-full sm:max-w-md">
                <CardContent>
                    <div className="relative">
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <div>
                                    <label htmlFor="form-rhf-demo-email" className="sr-only">
                                        Email
                                    </label>
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-email"
                                        type="email"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter your email"
                                        autoComplete="off"
                                        className="pr-12"
                                    />
                                    {fieldState.error && (
                                        <p className="">
                                            {fieldState.error.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                        <Button size="icon" className="absolute top-1 rounded-md right-[3.5px] size-7 z-10">
                            {loading ? (
                                <Icons.spinner className="size-3 animate-spin" />
                            ) : (
                                <Icons.paperPlane className="size-3" />
                            )}
                            <span className="sr-only">Join News-letter</span>
                        </Button>
                    </div>
                </CardContent >
            </Card >
        </form>
    )
}