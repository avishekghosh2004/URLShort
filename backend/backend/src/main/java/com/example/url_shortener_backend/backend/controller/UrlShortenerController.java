package com.example.url_shortener_backend.backend.controller;



import com.example.url_shortener_backend.backend.model.UrlRequest;
import com.example.url_shortener_backend.backend.service.UrlShortenerService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UrlShortenerController {

    private final UrlShortenerService urlService;

    public UrlShortenerController(UrlShortenerService urlService) {
        this.urlService = urlService;
    }

    @PostMapping("/api/shorten")
    public ResponseEntity<String> shortenUrl(@RequestBody UrlRequest request) {
        String code = urlService.shortenUrl(request.getLongUrl());
        String shortUrl = "http://localhost:8080/" + code;
        return ResponseEntity.ok(shortUrl);
    }

    @GetMapping("/{code}")
    public void redirect(@PathVariable String code, HttpServletResponse response) throws IOException {
        String longUrl = urlService.getLongUrl(code);
        if (longUrl != null) {
            response.sendRedirect(longUrl);
        } else {
            response.sendError(HttpServletResponse.SC_NOT_FOUND, "Short URL not found");
        }
    }
}
