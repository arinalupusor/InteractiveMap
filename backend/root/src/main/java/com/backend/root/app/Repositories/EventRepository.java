package com.backend.root.app.Repositories;

import com.backend.root.app.Entities.EventInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<EventInfo, Long> {
}

