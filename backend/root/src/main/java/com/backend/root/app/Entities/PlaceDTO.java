package com.backend.root.app.Entities;

public class PlaceDTO {
    private Long id;
    private String name;
    private String description;
    private double latitude;
    private double longitude;
    private Long pinLocationId;

    // getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public Long getPinLocationId() {
        return pinLocationId;
    }

    public void setPinLocationId(Long pinLocationId) {
        this.pinLocationId = pinLocationId;
    }
}