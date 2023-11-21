package com.backend.root.app.Repositories;
import com.backend.root.app.Entities.Place;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PlaceRepository extends JpaRepository<Place, Long> {
    Optional<Place> findByPinLocationId(Long pinLocationId);
}