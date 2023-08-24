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
import { onSubmit } from '@/actions/actions'

const formSchema = z.object({
  content: z.string().min(3),
})

type Props = {
  note: Note | null
}

const Note = ({ note }: Props) => {
  console.log(note)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: note || {
      content: '',
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(async (data) => {
          await onSubmit(data)
          form.reset()
        })}
        className='space-y-8 flex-1'
      >
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
        <Button type='submit' disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Saving...' : 'Save'}
        </Button>
      </form>
    </Form>
  )
}

export default Note
