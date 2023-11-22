package com.backend.root.app.Controllers;

import com.backend.root.app.DTOs.CreateEventDTO;
import com.backend.root.app.DTOs.DisplayEventDTO;
import com.backend.root.app.Services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {

    private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping
    public List<DisplayEventDTO> getAllEvents() {
        return eventService.findAllEvents();
    }
    @PostMapping
    public DisplayEventDTO createEvent(@RequestBody CreateEventDTO event) {
        return eventService.createEvent(event);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return ResponseEntity.ok().build();
    }
}
