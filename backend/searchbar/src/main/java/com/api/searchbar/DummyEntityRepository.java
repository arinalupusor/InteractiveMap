package com.api.searchbar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface DummyEntityRepository extends JpaRepository<DummyEntity, Long> {
    @Query("SELECT d FROM DummyEntity d WHERE " +
            "d.name LIKE CONCAT('%',:query, '%')")
    List<DummyEntity> search(String query);
}
