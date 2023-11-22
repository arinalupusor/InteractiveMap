package com.backend.root.app.Entities;

import com.backend.root.app.DTOs.DisplayEventDTO;
import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "events")
public class EventInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private LocalDateTime startTime;

    @Column(nullable = false)
    private LocalDateTime endTime;

    public DisplayEventDTO ToDisplayDto()
    {
        LocalDateTime currentTime = LocalDateTime.now();
        String status;
        if(currentTime.isAfter(startTime) && currentTime.isBefore(endTime))
            status = "ongoing";
        else if(currentTime.isBefore(startTime))
            status = "due";
        else
            status = "ended";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("EEEE, d MMMM", new Locale("ro", "RO"));
        DisplayEventDTO dto = new DisplayEventDTO();
        dto.setStatus(status);
        dto.setInterval(getStartTime().format(formatter) + "-" + getEndTime().format(formatter));
        dto.setDescription(getDescription());
        dto.setId(getId());
        dto.setName(getName());
        dto.setLocation(getLocation());
        dto.setDate(getStartTime().format(dateFormatter));
        return dto;
    }
}
