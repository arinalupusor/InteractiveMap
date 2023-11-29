package com.backend.root.app.Services;

import com.backend.root.app.DTOs.CreateEventDTO;
import com.backend.root.app.DTOs.DisplayEventDTO;
import com.backend.root.app.Entities.EventInfo;
import com.backend.root.app.Entities.PinLocation;
import com.backend.root.app.Repositories.EventRepository;
import com.backend.root.app.Repositories.PinLocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EventService {

    private final EventRepository eventRepository;
    private final PinLocationRepository pinLocationRepository;

    @Autowired
    public EventService(EventRepository eventRepository, PinLocationRepository pinLocationRepository) {
        this.eventRepository = eventRepository;
        this.pinLocationRepository =  pinLocationRepository;
    }

    public List<DisplayEventDTO> findAllEvents() {
        return eventRepository.findAll().stream()
                .map(EventInfo::ToDisplayDto)
                .collect(Collectors.toList());
    }

    public List<DisplayEventDTO> findAllUpcomingEvents() {
        return eventRepository.findAll().stream()
                .sorted(Comparator.comparing(EventInfo::getStartTime))
                .map(EventInfo::ToDisplayDto)
                .collect(Collectors.toList());
    }

    public Optional<EventInfo> findEventById(Long id) {
        return eventRepository.findById(id);
    }

    public DisplayEventDTO createEvent(CreateEventDTO event) {
        LocalDateTime endTime = LocalDateTime.parse(event.getEndTime(), DateTimeFormatter.ISO_DATE_TIME);
        LocalDateTime startTime = LocalDateTime.parse(event.getStartTime(), DateTimeFormatter.ISO_DATE_TIME);
        EventInfo eventInfo = EventInfo.builder().endTime(endTime).startTime(startTime).location(event.getLocation())
                .name(event.getName()).description(event.getDescription()).build();
        if(eventInfo.getEndTime().isBefore(eventInfo.getStartTime()))
            throw new RuntimeException();
        PinLocation pinLocation = pinLocationRepository.save(PinLocation.builder().latitude(event.getLatitude()).longitude(event.getLongitude()).description(event.getDescription()).isPlace(false).build());
        eventInfo.setPinLocation(pinLocation);
        eventRepository.save(eventInfo);
        return eventInfo.ToDisplayDto();
    }

    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
}

