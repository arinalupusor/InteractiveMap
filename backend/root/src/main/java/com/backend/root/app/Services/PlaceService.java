package com.backend.root.app.Services;
import com.backend.root.app.Entities.PinLocation;
import com.backend.root.app.Entities.Place;
import com.backend.root.app.Entities.PlaceDTO;
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
        place.setId(placeDTO.getId());
        place.setName(placeDTO.getName());
        place.setDescription(placeDTO.getDescription());
        place.setLatitude(placeDTO.getLatitude());
        place.setLongitude(placeDTO.getLongitude());
        PinLocation pinLocation = pinLocationRepository.findById(placeDTO.getPinLocationId()).orElseThrow(() -> new RuntimeException("Invalid pin location ID"));
        place.setPinLocation(pinLocation);
        return place;
    }

    public PlaceDTO convertToDTO(Place place) {
        PlaceDTO placeDTO = new PlaceDTO();
        placeDTO.setId(place.getId());
        placeDTO.setName(place.getName());
        placeDTO.setDescription(place.getDescription());
        placeDTO.setLatitude(place.getLatitude());
        placeDTO.setLongitude(place.getLongitude());
        placeDTO.setPinLocationId(place.getPinLocation().getId());
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
        place.setLatitude(placeDTO.getLatitude());
        place.setLongitude(placeDTO.getLongitude());
        PinLocation pinLocation = pinLocationRepository.findById(placeDTO.getPinLocationId()).orElseThrow(() -> new RuntimeException("Invalid pin location ID"));
        place.setPinLocation(pinLocation);
        return placeRepository.save(place);
    }

    public void deleteById(Long id) {
        placeRepository.deleteById(id);
    }
}
