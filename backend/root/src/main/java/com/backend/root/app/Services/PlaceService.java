package com.backend.root.app.Services;
import com.backend.root.app.DTOs.PlaceDTO;
import com.backend.root.app.DTOs.PlaceDisplayDTO;
import com.backend.root.app.Entities.*;
import com.backend.root.app.Repositories.PinLocationRepository;
import com.backend.root.app.Repositories.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PlaceService {

    @Autowired
    private PlaceRepository placeRepository;

    @Autowired
    private PinLocationRepository pinLocationRepository;

    public Place convertToEntity(PlaceDTO placeDTO) {
        Place place = new Place();
        place.setId(place.getId());
        place.setName(placeDTO.getName());
        place.setEmail(placeDTO.getEmail());
        place.setBottomAttendance(placeDTO.getBottomAttendance());
        place.setUpperAttendance(placeDTO.getUpperAttendance());
        place.setAddress(placeDTO.getAddress());
        place.setPhoneNumber(placeDTO.getPhoneNumber());
        place.setDescription(placeDTO.getDescription());
        return place;
    }

    public PlaceDisplayDTO convertToDTODisplay(Place place) {
        PlaceDisplayDTO placeDTO = new PlaceDisplayDTO();
        placeDTO.setId(place.getId());
        placeDTO.setName(place.getName());
        placeDTO.setDescription(place.getDescription());
        placeDTO.setEmail(place.getEmail());
        placeDTO.setBottomAttendance(place.getBottomAttendance());
        placeDTO.setUpperAttendance(place.getUpperAttendance());
        placeDTO.setAddress(place.getAddress());
        placeDTO.setPhoneNumber(place.getPhoneNumber());
        placeDTO.setPinId(place.getPinLocation().getId());
        return placeDTO;
    }

    public Place findPlaceByPinId(Long pinId) {
        return placeRepository.findByPinLocationId(pinId).orElse(null);
    }
    public Place savePlaceWithPin(PlaceDTO placeDTO, double latitude, double longitude) {
        PinLocation pinLocation = new PinLocation();
        pinLocation.setLatitude(latitude);
        pinLocation.setLongitude(longitude);
        pinLocation.setDescription(placeDTO.getName());
        pinLocation.setPlace(true);
        pinLocation = pinLocationRepository.save(pinLocation);
        Place place = convertToEntity(placeDTO);
        place.setPinLocation(pinLocation);
        return placeRepository.save(place);
    }

    public List<PlaceDisplayDTO> searchPlacesByName(String name) {
        List<Place> places = placeRepository.findByNameContainingIgnoreCase(name);
        return places.stream().map(this::convertToDTODisplay).collect(Collectors.toList());
    }
}
