package com.backend.root.evenimenteapi;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.Data;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class CreateEventDto {
    private String name;
    private String location;
    private String description;
    private String startTime;
    private String endTime;
}
