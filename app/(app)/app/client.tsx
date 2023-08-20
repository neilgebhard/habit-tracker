'use client'

import { useEffect, useState } from 'react'
import { Calendar } from '@/components/ui/calendar'

const Client = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  useEffect(() => {
    console.log(date)
  }, [date])

  return (
    <div>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border inline-block'
      />
    </div>
  )
}

export default Client
