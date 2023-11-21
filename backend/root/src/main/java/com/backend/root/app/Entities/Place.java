package com.backend.root.app.Entities;
import jakarta.persistence.*;

@Entity
public class Place {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @ManyToOne
    @JoinColumn(name = "pin_location_id", nullable = false)
    private PinLocation pinLocation;

    private String bottomAttendance;
    private String upperAttendance;
    private String address;
    private String phoneNumber;
    private String email;

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

    public PinLocation getPinLocation() {
        return pinLocation;
    }

    public void setPinLocation(PinLocation pinLocation) {
        this.pinLocation = pinLocation;
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

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getEmail() {
        return email;
    }
}

