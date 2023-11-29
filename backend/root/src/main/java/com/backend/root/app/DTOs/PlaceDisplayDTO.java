package com.backend.root.app.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PlaceDisplayDTO {
    private Long id;
    private String name;
    private String description;
    private String bottomAttendance;
    private String upperAttendance;
    private String address;
    private String phoneNumber;
    private String email;
    private Long pinId;

}
