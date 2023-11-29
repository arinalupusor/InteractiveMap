package com.backend.root.app.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DisplayPinLocationDTO {
    private Long id;
    private String description;
    private double latitude;
    private double longitude;
    private boolean isPlace;
}
