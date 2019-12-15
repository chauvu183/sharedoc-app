package com.backend.sharedoc.payload;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class UploadDocumentResponseTest {

  UploadDocumentResponse uploadDocumentResponse;

  @Before
  public void setUp() {
    uploadDocumentResponse = new UploadDocumentResponse("scripte.txt", "http://localhost:8080/documents/scripte.txt", "txt", 1024);
  }

  @Test
  public void testGetDocumentName() {
    Assert.assertEquals(uploadDocumentResponse.getdocumentName(), "scripte.txt");
  }

  @Test
  public void testGetDocumentType() {
    Assert.assertEquals(uploadDocumentResponse.getdocumentype(), "txt");
  }

  @Test
  public void testSetDocumentName() {
    uploadDocumentResponse.setdocumentName("How_to_use_git");
    Assert.assertNotEquals(uploadDocumentResponse.getdocumentName(), "scripte");
  }

  @Test
  public void testGetDocumentDownloadUri() {
    Assert.assertEquals(uploadDocumentResponse.getdocumentDownloadUri(), "http://localhost:8080/documents/scripte.txt");
  }
}
