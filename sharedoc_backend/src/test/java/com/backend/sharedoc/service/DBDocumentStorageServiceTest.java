package com.backend.sharedoc.service;

import org.junit.Before;
import org.junit.Test;
import static org.mockito.Mockito.when;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.multipart.MultipartFile;
import com.backend.sharedoc.exception.DocumentStorageException;
import com.backend.sharedoc.exception.ResourceNotFoundException;
import com.backend.sharedoc.repository.DBDocumentRepository;

@RunWith(SpringRunner.class)
public class DBDocumentStorageServiceTest {

  @MockBean
  private DBDocumentRepository dbDocumentRepository;

  private DBDocumentStorageService dbDocumentStorageService;

  @Before
  public void init() {
    dbDocumentStorageService = new DBDocumentStorageService(dbDocumentRepository);
  }

  @Test(expected = DocumentStorageException.class)
  public void testStoreFileWrongDocumentName() {
    MultipartFile document = Mockito.mock(MultipartFile.class);

    when(document.getOriginalFilename()).thenReturn("wrong..file...name");

    dbDocumentStorageService.storeDocument(document);
  }

  @Test(expected = ResourceNotFoundException.class)
  public void testGetDocumentDocumentNotFound() {

    dbDocumentStorageService.getDocument("1L");
  }

}
