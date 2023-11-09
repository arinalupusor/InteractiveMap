package com.pins.app;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pins")
public class PinLocationController {
    private final PinLocationService pinLocationService;

    @Autowired
    public PinLocationController(PinLocationService pinLocationService) {
        this.pinLocationService = pinLocationService;
    }

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
}


