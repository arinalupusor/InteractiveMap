package com.backend.root.app.Services;
import com.backend.root.app.Entities.PinLocation;
import com.backend.root.app.Entities.PinLocationDTO;
import com.backend.root.app.Repositories.PinLocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PinLocationService {
    private final PinLocationRepository pinLocationRepository;

    @Autowired
    public PinLocationService(PinLocationRepository pinLocationRepository) {
        this.pinLocationRepository = pinLocationRepository;
    }

    public Iterable<PinLocation> getAllPins() {
        return pinLocationRepository.findAll();
    }

    public PinLocation getPinById(Long id) {
        return pinLocationRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid pin Id:" + id));
    }

    public PinLocation createPin(PinLocationDTO pinDTO) {
        PinLocation pin = new PinLocation();
        pin.setDescription(pinDTO.getDescription());
        pin.setLatitude(pinDTO.getLatitude());
        pin.setLongitude(pinDTO.getLongitude());
        return pinLocationRepository.save(pin);
    }

    public PinLocation updatePin(Long id, PinLocationDTO pinDTO) {
        PinLocation pin = pinLocationRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid pin Id:" + id));
        pin.setDescription(pinDTO.getDescription());
        pin.setLatitude(pinDTO.getLatitude());
        pin.setLongitude(pinDTO.getLongitude());
        return pinLocationRepository.save(pin);
    }

    public void deletePin(Long id) {
        pinLocationRepository.deleteById(id);
    }
}

