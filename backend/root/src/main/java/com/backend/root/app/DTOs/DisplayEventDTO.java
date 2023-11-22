package com.backend.root.app.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class DisplayEventDTO {
    private Long id;
    private String name;
    private String location;
    private String interval;
    private String date;
    private String status;
    private String description;
}
