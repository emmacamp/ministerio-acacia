'use client';
import React from 'react';
import { EventComponent } from './Event';
import { dbStore } from '@/store';

export const EventsList = () => {
  const { events } = dbStore();

  return events.map((event, i) => <EventComponent key={i} event={event} />);
};
