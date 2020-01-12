package com.backend.sharedoc.service;

import com.backend.sharedoc.exception.DocumentStorageException;
import com.backend.sharedoc.exception.ResourceNotFoundException;
import com.backend.sharedoc.model.DBDocument;
import com.backend.sharedoc.repository.DBDocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

@Service
public class DBDocumentStorageService {

  @Autowired
  private DBDocumentRepository dbDocumentRepository;

  @Autowired
    public DBDocumentStorageService(DBDocumentRepository dbFileRepository) {
        this.dbDocumentRepository = dbFileRepository;
    }

  public DBDocument storeDocument(MultipartFile file) {
    // Normalize file name
    String fileName = StringUtils.cleanPath(file.getOriginalFilename());

    try {
      // Check if the file's name contains invalid characters
      if (fileName.contains("..")) {
        throw new DocumentStorageException("Sorry! Document name contains invalid path sequence " + fileName);
      }

      DBDocument dbFile = new DBDocument(fileName, file.getContentType(), file.getBytes());

      return dbDocumentRepository.save(dbFile);
    } catch (IOException ex) {
      throw new DocumentStorageException("Could not store document " + fileName + ". Please try again!", ex);
    }
  }

  public DBDocument getDocument(String fileId) {
    return dbDocumentRepository.findById(fileId)
        .orElseThrow(() -> new ResourceNotFoundException("Document not found with id " + fileId));
  }
}
