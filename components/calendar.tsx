'use client'

import { useEffect, useState } from 'react'
import { Calendar } from '@/components/ui/calendar'

const CalendarClient = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  useEffect(() => {
    // add date to url as a query parameter
  }, [date])

  return (
    <Calendar
      mode='single'
      selected={date}
      onSelect={setDate}
      className='rounded-md border inline-block'
    />
  )
}

export default CalendarClient
