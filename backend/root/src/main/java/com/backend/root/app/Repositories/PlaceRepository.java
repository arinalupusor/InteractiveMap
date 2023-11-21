package com.backend.root.app.Repositories;
import com.backend.root.app.Entities.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PlaceRepository extends JpaRepository<Place, Long> {
    Optional<Place> findByPinLocationId(Long pinLocationId);
    @Query("SELECT p FROM Place p WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :name, '%'))")
    List<Place> findByNameContainingIgnoreCase(String name);
}