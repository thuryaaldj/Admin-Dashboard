'use client';

import BackButton from "@/components/BackButton";
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import posts from "@/data/posts";
import { toast } from "sonner";
import { use } from 'react';


const formSchema = z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    body: z.string().min(1, { message: 'Body is required' }),
    author: z.string().min(1, { message: 'Author is required' }),
    date: z.string().min(1, { message: 'Date is required' }),
});

const PostEditPage = (
   { params }: { params: Promise<{ id: string }> }

) => {
    const { id } = use(params);
  const post = posts.find((post) => post.id === id);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: post?.title || '',
            body: post?.body || '',
            author: post?.author || '',
            date: post?.date || '',
        },
    });

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        toast.success("Post has been updated successfully", {
            description: `Updated by ${data.author} on ${data.date}`,
        });
        console.log(data);
    };

    return (
        <>
            <BackButton text="Back To Posts" link="/posts" />
            <h3 className="text-2xl mb-4">Edit Post</h3>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                    {/* نفس الـ FormFields تبعك */}
                </form>
            </Form>
        </>
    );
};

export default PostEditPage;
