package com.backend.sharedoc.repository;

import com.backend.sharedoc.model.DBDocument;
import com.backend.sharedoc.repository.DBDocumentRepository;
import static org.junit.Assert.assertNotNull;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest

public class DBDocumentRepositoryTest {

    @Autowired
    private DBDocumentRepository dbDocumentRepository;

    @Test
    public void testFindAll() {
        assertNotNull(dbDocumentRepository.findAll());
    }

    @Test
    public void testDeleteDocument() {
        DBDocument document = new DBDocument("exampleFile.png", "image/png", "Some bytes".getBytes());
        DBDocument savedDocument = dbDocumentRepository.save(document);
        dbDocumentRepository.delete(savedDocument);
  }

  @Test
  public void deletByDocumentIdTest() {
    DBDocument document = new DBDocument("exampleFile.png", "image/png", "Some bytes".getBytes());
    DBDocument savedDocument = dbDocumentRepository.save(document);
    dbDocumentRepository.deleteById(savedDocument.getId());
  }
}
