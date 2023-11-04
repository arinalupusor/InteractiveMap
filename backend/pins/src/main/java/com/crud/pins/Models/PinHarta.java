package com.crud.pins.Models;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class PinHarta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_Pin;
    private String nume_Pin;
    private double latitudine;
    private double longitudine;
    private String descriere;
    private String culoare;

    public void setId(Long id) {
    }
}
