import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import LayoutPages from '@/components/layout';

interface Mark {
  id: number;
  date: string;
  time: string;
  name: string;
  location: string;
  cusname: string;
  tel: string;
  nameAE: string;
  messages: string;
}

const convertMarksToEvents = (marks: Mark[]) => {
  return marks.map((mark) => {
    return {
      title: mark.name,
      start: new Date(mark.date),
      end: new Date(mark.date),
    };
  });
};

function Lastwork() {
  const [markData, setMarkData] = useState<Mark[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [eventsData, seteventsData] = useState<Date | null>(null);
  const localizer = momentLocalizer(moment);
  const [selectedEvent, setSelectedEvent] = useState<Mark | null>(null);

  useEffect(() => {
    fetch('/api/mark')
      .then((response) => response.json())
      .then((data: { mark: Mark[] }) => {
        const eventsData = convertMarksToEvents(data.mark);
        setMarkData(markData); // แก้ไขเป็น eventsData ไม่ใช่ markData
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, []);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  }

  return (

    <>
    <LayoutPages>
    <div className=' my-10'>
      <Calendar
        localizer={localizer}
        events={markData}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={(event: any) => {
          console.log('Event clicked:', event);
          setSelectedEvent(event);
        }}
        onSelectSlot={(slotInfo: any) => {
          console.log('Slot selected:', slotInfo);
        }}
      />
    
    </div>
    </LayoutPages>
    </>
  );
}

export default Lastwork;
