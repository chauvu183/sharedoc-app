package com.backend.sharedoc.controller;

import com.backend.sharedoc.exception.ResourceNotFoundException;
import com.backend.sharedoc.model.DBDocument;
import com.backend.sharedoc.payload.UploadDocumentResponse;
import com.backend.sharedoc.repository.DBDocumentRepository;
import com.backend.sharedoc.service.DBDocumentStorageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/documents")
public class DocumentController {

  private static final Logger logger = LoggerFactory.getLogger(DocumentController.class);

  @Autowired
  private DBDocumentStorageService DBDocumentStorageService;

  @Autowired
  private DBDocumentRepository dbCodumentRepository;

  @GetMapping
  public ResponseEntity<?> getDbDocuments() {
    List<DBDocument> dbDocuments = dbCodumentRepository.findAll();
    return new ResponseEntity<>(dbDocuments, HttpStatus.OK);
  }

  @PostMapping("/uploadDocument")
  public UploadDocumentResponse uploadFile(@RequestParam("file") MultipartFile file) {
    DBDocument dbFile = DBDocumentStorageService.storeDocument(file);

    String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/downloadDocument/")
        .path(dbFile.getId()).toUriString();

    return new UploadDocumentResponse(dbFile.getDocumentName(), fileDownloadUri, file.getContentType(), file.getSize());
  }

  @PostMapping("/uploadMultipleDocuments")
  public List<UploadDocumentResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
    return Arrays.asList(files).stream().map(file -> uploadFile(file)).collect(Collectors.toList());
  }

  @GetMapping("/downloadDocument/{fileId}")
  public ResponseEntity<Resource> downloadFile(@PathVariable String fileId) {
    DBDocument dbFile = DBDocumentStorageService.getDocument(fileId);

    return ResponseEntity.ok().contentType(MediaType.parseMediaType(dbFile.getDocumentType()))
        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + dbFile.getDocumentName() + "\"")
        .body(new ByteArrayResource(dbFile.getData()));
  }

  @DeleteMapping("/uploadDocument/{fileId}")
  public ResponseEntity<?> deleteEntry(@PathVariable String fileId) {
    return dbCodumentRepository.findById(fileId).map(document -> {
      dbCodumentRepository.delete(document);
      return ResponseEntity.ok().build();
    }).orElseThrow(() -> new ResourceNotFoundException("Document not found with id " + fileId));
  }
}
