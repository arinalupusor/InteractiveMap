package com.backend.root.app.Controllers;
import com.backend.root.app.DTOs.DisplayPinLocationDTO;
import com.backend.root.app.DTOs.PlaceCreationDTO;
import com.backend.root.app.DTOs.PlaceDisplayDTO;
import com.backend.root.app.Entities.*;
import com.backend.root.app.Services.PinLocationService;
import com.backend.root.app.Services.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.List;

@RestController
@RequestMapping("/api/pins")
public class PinLocationController {
    private final PinLocationService pinLocationService;
    @Autowired
    private PlaceService placeService;

    @Autowired
    public PinLocationController(PinLocationService pinLocationService) {
        this.pinLocationService = pinLocationService;
    }

    @GetMapping
    public Iterable<DisplayPinLocationDTO> getAllPins() {
        return pinLocationService.getAllPins();
    }

    @GetMapping("/{id}")
    public DisplayPinLocationDTO getPinById(@PathVariable Long id) {
        return pinLocationService.getPinById(id);
    }

    @PostMapping("/places")
    public ResponseEntity<PlaceDisplayDTO> createPlace(@RequestBody PlaceCreationDTO creationDTO) {
        Place place = placeService.savePlaceWithPin(creationDTO.getPlace(), creationDTO.getLatitude(), creationDTO.getLongitude());
        PlaceDisplayDTO savedPlaceDTO = placeService.convertToDTODisplay(place);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedPlaceDTO);
    }

    @GetMapping("/{PinId}/place")
    public ResponseEntity<PlaceDisplayDTO> getPlaceByPinId(@PathVariable Long PinId) {
        Place place = placeService.findPlaceByPinId(PinId);
        if (place == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        PlaceDisplayDTO placeDTO = placeService.convertToDTODisplay(place);
        return ResponseEntity.ok(placeDTO);
    }

    @GetMapping("/search")
    public ResponseEntity<List<PlaceDisplayDTO>> searchPlaces(@RequestParam String name) {
        List<PlaceDisplayDTO> foundPlaces = placeService.searchPlacesByName(name);
        return ResponseEntity.ok(foundPlaces);
    }
}


