package com.backend.root.evenimenteapi;

import jdk.jfr.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EventService {

    private final EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<DisplayEventDto> findAllEvents() {
        return eventRepository.findAll().stream()
                .map(EventInfo::ToDisplayDto)
                .collect(Collectors.toList());
    }

    public Optional<EventInfo> findEventById(Long id) {
        return eventRepository.findById(id);
    }

    public DisplayEventDto createEvent(CreateEventDto event) {
        event.setEndTime(event.getEndTime().substring(1, event.getEndTime().length() - 1));
        event.setStartTime(event.getStartTime().substring(1, event.getStartTime().length() - 1));
        EventInfo eventInfo = EventInfo.builder().endTime(LocalDateTime.parse(event.getEndTime(), DateTimeFormatter.ISO_DATE_TIME))
                .startTime(LocalDateTime.parse(event.getStartTime(), DateTimeFormatter.ISO_DATE_TIME)).location(event.getLocation())
                .name(event.getName()).description(event.getDescription()).build();
        if(eventInfo.getEndTime().isBefore(eventInfo.getStartTime()))
            throw new RuntimeException();
        eventRepository.save(eventInfo);
        return eventInfo.ToDisplayDto();
    }

    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
}

