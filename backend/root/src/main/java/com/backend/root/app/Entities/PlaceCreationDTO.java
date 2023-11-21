package com.backend.root.app.Entities;

public class PlaceCreationDTO {
    private PlaceDTO place;
    private double latitude;
    private double longitude;

    public PlaceDTO getPlace() {
        return place;
    }

    public double getLatitude() {
        return latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setPlace(PlaceDTO place) {
        this.place = place;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }
}
