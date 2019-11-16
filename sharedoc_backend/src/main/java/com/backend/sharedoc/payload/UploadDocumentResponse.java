package com.backend.sharedoc.payload;

public class UploadDocumentResponse {
    private String documentName;
    private String documentDownloadUri;
    private String documentype;
    private long size;

    public UploadDocumentResponse(String documentName, String documentDownloadUri, String documentype, long size) {
        this.documentName = documentName;
        this.documentDownloadUri = documentDownloadUri;
        this.documentype = documentype;
        this.size = size;
    }

    public String getdocumentName() {
        return documentName;
    }

    public void setdocumentName(String documentName) {
        this.documentName = documentName;
    }

    public String getdocumentDownloadUri() {
        return documentDownloadUri;
    }

    public void setdocumentDownloadUri(String documentDownloadUri) {
        this.documentDownloadUri = documentDownloadUri;
    }

    public String getdocumentype() {
        return documentype;
    }

    public void setdocumentype(String documentype) {
        this.documentype = documentype;
    }

    public long getSize() {
        return size;
    }

    public void setSize(long size) {
        this.size = size;
    }
}
