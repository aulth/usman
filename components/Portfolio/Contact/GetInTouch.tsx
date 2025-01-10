"use client"
import React, { useActionState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { AtSign, Pen, Send, UserRound } from 'lucide-react'
import { sendEmail } from '@/lib/email'
import { useToast } from '@/hooks/use-toast'
export default function GetInTouch() {
    const [state, formAction, isPending] = useActionState(handleContact, null);
    const { toast } = useToast();
    async function handleContact(prevState: any, newState: FormData) {
        const data = {
            name: `${newState.get("name")}`,
            email: `${newState.get("email")}`,
            text: `${newState.get("message")}`
        }
        const res = await sendEmail(data);
        if (res) {
            toast({
                title: "Query Sent",
                description: "Your query has been sent to Mohd Usman.",
            })
        } else {
            toast({
                variant: "destructive",
                title: "Submission Failed",
                description: "Error sending your query. Try again later.",
            })
        }
    }
    return (
        <>
            <div id='contact' className="max-w-5xl w-full mx-auto mt-[130px] font-inter mb-24  md:scroll-mt-16 scroll-mt-8">
                <h2 className="subheading">get in touch 👋🏻</h2>
                <span className='explore'>explore now</span>
                <form action={formAction} className="w-full grid gap-10 mt-[40px] mx-auto">
                    <div className="w-full grid md:grid-cols-2 gap-8">
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="name" className='text-primary'>Name</Label>
                            <div className="w-full flex justify-start items-center border rounded-[8px] pl-2 focus-within:border-blue-500">
                                <UserRound strokeWidth={1} className='text-white' />
                                <Input required type="text" id="name" name='name' placeholder="Enter your name.." className='text-white border-none ml-2 pl-0.5  focus-visible:ring-0 rounded-[8px] rounded-l-none' />
                            </div>
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="name" className='text-primary'>Email</Label>
                            <div className="w-full flex justify-start items-center border rounded-[8px] pl-2 focus-within:border-blue-500">
                                <AtSign strokeWidth={1} className='text-white' />
                                <Input required type="email" id="email" name='email' placeholder="Enter your name.." className='text-white border-none ml-2 pl-0.5 focus-visible:ring-0 rounded-[8px] rounded-l-none' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex gap-4 flex-col items-end">
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="name" className='text-primary'>Message</Label>
                            <div className="w-full relative border rounded-[8px] focus-within:border-blue-500">
                                <Pen strokeWidth={1} className='text-white absolute left-1.5 top-1.5 bg-black p-0.5 scale-x-[-1]' />
                                <Textarea required placeholder="Type your message here." id='message' name='message' className='rounded-[8px] h-52 text-white indent-6 border-none focus-visible:ring-0' />
                            </div>
                        </div>
                        <Button disabled={isPending} type='submit' className='!rounded-button font-poppins text-black bg-white hover:bg-secondary border text-sm font-medium'>{isPending ? "Sending" : <><Send /> Send</>}</Button>
                    </div>
                </form>
            </div>
        </>
    )
}
