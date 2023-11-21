package com.backend.root.app.Services;
import com.backend.root.app.Entities.*;
import com.backend.root.app.Repositories.PinLocationRepository;
import com.backend.root.app.Repositories.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public PlaceDTO convertToDTO(Place place) {
        PlaceDTO placeDTO = new PlaceDTO();
        placeDTO.setName(place.getName());
        placeDTO.setDescription(place.getDescription());
        placeDTO.setEmail(place.getEmail());
        placeDTO.setBottomAttendance(place.getBottomAttendance());
        placeDTO.setUpperAttendance(place.getUpperAttendance());
        placeDTO.setAddress(place.getAddress());
        placeDTO.setPhoneNumber(place.getPhoneNumber());
        return placeDTO;
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
        return placeDTO;
    }

    public Place save(Place place) {
        return placeRepository.save(place);
    }

    public Place findById(Long id) {
        return placeRepository.findById(id).orElseThrow(() -> new RuntimeException("Invalid place ID"));
    }

    public Place update(Place place, PlaceDTO placeDTO) {
        place.setName(placeDTO.getName());
        place.setDescription(placeDTO.getDescription());
        return placeRepository.save(place);
    }

    public void deleteById(Long id) {
        placeRepository.deleteById(id);
    }

    public Place findPlaceByPinId(Long pinId) {
        return placeRepository.findByPinLocationId(pinId)
                .orElseThrow(() -> new RuntimeException("Place not found for given pin ID"));
    }
    public Place savePlaceWithPin(PlaceDTO placeDTO, double latitude, double longitude) {
        PinLocation pinLocation = new PinLocation();
        pinLocation.setLatitude(latitude);
        pinLocation.setLongitude(longitude);
        pinLocation.setDescription("Descriere pin");
        pinLocation = pinLocationRepository.save(pinLocation);
        Place place = convertToEntity(placeDTO);
        place.setPinLocation(pinLocation);
        return placeRepository.save(place);
    }


}
