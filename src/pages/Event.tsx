import React, { Fragment, useState, useCallback, useMemo } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import EventFormModal from '../components/Form/EventFormModal'
import Header from '@/components/Header/Header'

type EventProps = {
  title: string
  description: string
  start: any
  end: any
}

type time = {
  start: any
  end: any
}

const Event = () => {


  const localizer = momentLocalizer(moment)
  const [myEvents, setEvents] = useState<EventProps[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newEventSlot, setNewEventSlot] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState<EventProps | null>(null);
  const [eventMode, setEventMode] = useState('create');

  const handleSelectSlot = useCallback(({ start, end } : time) => {
    setSelectedEvent({ title: '', description: '', start, end });
    setEventMode('create');
    setModalOpen(true);
  }, []);

  const handleSelectEvent = useCallback((event : EventProps) => {
    setSelectedEvent(event);
    setEventMode('edit');
    setModalOpen(true);
  }, []);

  const handleSaveEvent = ({ title, description, start, end } : EventProps) => {
    if (eventMode === 'create') {
      setEvents((prev) => [
        ...prev,
        { start, end, title, description },
      ]);
    } else {
      setEvents((prev) =>
        prev.map((e) =>
            selectedEvent && e.start.getTime() === selectedEvent.start.getTime() && e.end.getTime() === selectedEvent.end.getTime()
            ? {...e, title, description, start, end }
            : e
        )
      );
    }
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const handleDeleteEvent = ({start, end} : time) => {
    setEvents((prev) =>
      prev.filter((e) => e.start.getTime() !== start.getTime() || e.end.getTime() !== end.getTime())
    );
    setModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className='m-3 mt-20 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <Header 
            title="Events"
            category="App"
        />
        <div className='h-fit flex gap-x-4'>
              <div className="relative flex flex-1 flex-col gap-y-4 pl-2">
                  <div className="w-full bg-white p-3 rounded-3xl">
                      <Calendar
                          localizer={localizer}
                          // events={myEventsList}
                          startAccessor="start"
                          endAccessor="end"
                          style={{ height: 650 }}
                          onSelectEvent={handleSelectEvent}
                          onSelectSlot={handleSelectSlot}
                          events={myEvents}
                          selectable
                          />
                  </div>

                  <EventFormModal
                      open={isModalOpen}
                      onClose={() => setModalOpen(false)}
                      onSave={handleSaveEvent}
                      onDelete={handleDeleteEvent}
                      initialData={selectedEvent}
                  />

                  

              </div>




        </div>

    </div>
  )
}

export default Event