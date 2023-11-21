package com.backend.root.app.Entities;

public class PlaceDTO {
    private String name;
    private String description;
    private String bottomAttendance;
    private String upperAttendance;
    private String address;
    private String phoneNumber;
    private String email;


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

    public String getBottomAttendance() {
        return bottomAttendance;
    }

    public void setBottomAttendance(String bottomAttendance) {
        this.bottomAttendance = bottomAttendance;
    }

    public String getUpperAttendance() {
        return upperAttendance;
    }

    public void setUpperAttendance(String upperAttendance) {
        this.upperAttendance = upperAttendance;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}