'use client'

import { useEffect, useState } from 'react'
import { Calendar } from '@/components/ui/calendar'

const Client = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  useEffect(() => {
    // set start date in url query parameter
    console.log(date)
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

export default Client
