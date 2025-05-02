package com.example.url_shortener_backend.backend.service;

import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class UrlShortenerService {
    private final Map<String, String> urlMap = new ConcurrentHashMap<>();

    public String shortenUrl(String longUrl) {
        String shortCode = UUID.randomUUID().toString().substring(0, 6);
        urlMap.put(shortCode, longUrl);
        return shortCode;
    }

    public String getLongUrl(String shortCode) {
        return urlMap.get(shortCode);
    }
}
