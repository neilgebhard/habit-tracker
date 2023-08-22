'use client'

import axios from 'axios'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Button } from './ui/button'
import { Note } from '@prisma/client'

const formSchema = z.object({
  content: z.string().min(0),
})

type Props = {
  data: Note
}

const Notes = ({ data }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: '',
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await axios.post('/api/notes', values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 flex-1'>
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Journal</FormLabel>
              <FormControl>
                <Textarea placeholder='Today, I...' {...field} />
              </FormControl>
              <FormDescription>Your notes for the day.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Save</Button>
      </form>
    </Form>
  )
}

export default Notes
