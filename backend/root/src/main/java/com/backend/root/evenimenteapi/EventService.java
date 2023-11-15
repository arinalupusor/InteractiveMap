package com.backend.root.evenimenteapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    private final EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<EventInfo> findAllEvents() {
        return eventRepository.findAll();
    }

    public Optional<EventInfo> findEventById(Long id) {
        return eventRepository.findById(id);
    }

    public EventInfo saveEvent(EventInfo event) {
        return eventRepository.save(event);
    }

    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
}

