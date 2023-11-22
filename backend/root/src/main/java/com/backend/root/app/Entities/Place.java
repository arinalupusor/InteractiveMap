package com.backend.root.app.Entities;
import jakarta.persistence.*;
import lombok.Data;

@Data
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
}

