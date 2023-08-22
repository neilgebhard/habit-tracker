'use client'

import { useEffect, useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import Notes from '@/components/notes'

const Client = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  useEffect(() => {
    console.log(date)
  }, [date])

  return (
    <div className='flex gap-4'>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border inline-block'
      />
      <Notes />
    </div>
  )
}

export default Client
