package com.backend.root.app.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PlaceCreationDTO {
    private PlaceDTO place;
    private double longitude;
    private double latitude;
}
