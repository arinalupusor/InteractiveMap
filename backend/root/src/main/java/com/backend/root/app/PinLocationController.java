package com.backend.root.app;
import com.backend.root.app.Entities.PinLocation;
import com.backend.root.app.Entities.PlaceDTO;
import com.backend.root.app.Entities.Place;
import com.backend.root.app.Entities.PinLocationDTO;
import com.backend.root.app.Services.PinLocationService;
import com.backend.root.app.Services.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/pins")
public class PinLocationController {
    private final PinLocationService pinLocationService;

    @Autowired
    public PinLocationController(PinLocationService pinLocationService) {
        this.pinLocationService = pinLocationService;
    }
    @Autowired
    private PlaceService placeService;

    @GetMapping
    public Iterable<PinLocation> getAllPins() {
        return pinLocationService.getAllPins();
    }

    @GetMapping("/{id}")
    public PinLocation getPinById(@PathVariable Long id) {
        return pinLocationService.getPinById(id);
    }

    @PostMapping
    public PinLocation createPin(@RequestBody PinLocationDTO pinDTO) {
        return pinLocationService.createPin(pinDTO);
    }

    @PutMapping("/{id}")
    public PinLocation updatePin(@PathVariable Long id, @RequestBody PinLocationDTO pinDTO) {
        return pinLocationService.updatePin(id, pinDTO);
    }

    @DeleteMapping("/{id}")
    public void deletePin(@PathVariable Long id) {
        pinLocationService.deletePin(id);
    }

    @PostMapping("/places")
    public ResponseEntity<PlaceDTO> createPlace(@RequestBody PlaceDTO placeDTO) {
        Place place = placeService.convertToEntity(placeDTO);
        Place savedPlace = placeService.save(place);
        PlaceDTO savedPlaceDTO = placeService.convertToDTO(savedPlace);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedPlaceDTO);
    }

}


