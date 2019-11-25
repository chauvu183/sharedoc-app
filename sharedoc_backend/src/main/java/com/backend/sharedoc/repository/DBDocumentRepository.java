package com.backend.sharedoc.repository;

import com.backend.sharedoc.model.DBDocument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DBDocumentRepository extends JpaRepository<DBDocument, String> {

}
