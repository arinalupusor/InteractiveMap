package com.backend.root.app.Services;
import com.backend.root.app.DTOs.DisplayPinLocationDTO;
import com.backend.root.app.Entities.PinLocation;
import com.backend.root.app.Repositories.PinLocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PinLocationService {
    private final PinLocationRepository pinLocationRepository;

    @Autowired
    public PinLocationService(PinLocationRepository pinLocationRepository) {
        this.pinLocationRepository = pinLocationRepository;
    }

    public DisplayPinLocationDTO toDisplayDto(PinLocation location)
    {
        return DisplayPinLocationDTO.builder().isPlace(location.isPlace()).description(location.getDescription()).id(location.getId()).latitude(location.getLatitude()).longitude(location.getLongitude()).build();
    }

    public Iterable<DisplayPinLocationDTO> getAllPins() {
        List<PinLocation> pinLocations = (List<PinLocation>) pinLocationRepository.findAll();
        return pinLocations.stream().map(this::toDisplayDto).collect(Collectors.toList());
    }

    public DisplayPinLocationDTO getPinById(Long id) {
        return toDisplayDto(pinLocationRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid pin Id:" + id)));
    }

}

