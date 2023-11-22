package com.backend.root.app.DTOs;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.Data;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class CreateEventDTO {
    private String name;
    private String location;
    private String description;
    private String startTime;
    private String endTime;
}
