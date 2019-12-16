package com.backend.sharedoc.repository;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.Optional;

import com.backend.sharedoc.model.DBDocument;
import com.backend.sharedoc.repository.DBDocumentRepository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ContextConfiguration;
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

    // @Test
    // public void testFindByName() {
    //     DBDocument document = new DBDocument("exampleFile.png", "image/png", "Some bytes".getBytes());
    //     dbDocumentRepository.save(document);
    //     Optional<DBDocument> document2 = dbDocumentRepository.findByName("exampleFile.png");
    //     assertNotNull(document2);
    //     assertEquals(document.getDocumentName(), document2.get().getDocumentName());
    // }


    // @Test
    // public void testFindByType() {
    //     DBDocument document = new DBDocument("exampleFile.png", "image/png", "Some bytes".getBytes());
    //     dbDocumentRepository.save(document);
    //     Optional<DBDocument> document2 = dbDocumentRepository.findByType("image/png");
    //     assertNotNull(document2);
    //     assertEquals(document.getDocumentType(), document2.get().getDocumentType());
    // }


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