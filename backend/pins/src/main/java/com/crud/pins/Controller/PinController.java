package com.crud.pins.Controller;
import com.crud.pins.Models.PinHarta;
import com.crud.pins.Services.PinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("/api/locatii")
public class PinController {
    private final PinService pinService;

    @Autowired
    public PinController(PinService pinService) {
        this.pinService = pinService;
    }
    @GetMapping("/{id}")
    public ResponseEntity<PinHarta> getPinById(@PathVariable Long id) {
        Optional<PinHarta> locuri = Optional.ofNullable(pinService.getLocatieById(id));
        return locuri.
                map(ResponseEntity::ok).
                orElseGet(() -> ResponseEntity.notFound().build());
    }


    @PostMapping
    public ResponseEntity<PinHarta> createPin(@RequestBody PinHarta locuri) {
        PinHarta createdLocuri = pinService.createLocatie(locuri);
        return new ResponseEntity<>(createdLocuri, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PinHarta> updatePin(@PathVariable Long id, @RequestBody PinHarta locuri) {
        Optional<PinHarta> updatedLocuri = Optional.ofNullable(pinService.updateLocatie(id, locuri));
        return updatedLocuri.
                map(value -> new ResponseEntity<>(value, HttpStatus.OK)).
                orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePin(@PathVariable Long id) {
        pinService.deleteLocatie(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

