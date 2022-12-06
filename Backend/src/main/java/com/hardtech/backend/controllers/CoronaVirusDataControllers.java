package com.hardtech.backend.controllers;

import com.hardtech.backend.models.LocationStats;
import com.hardtech.backend.services.CoronaVirusDataService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("coronavirus-tracker/api/v1")
@CrossOrigin("*")
@AllArgsConstructor
public class CoronaVirusDataControllers {

    private CoronaVirusDataService coronaVirusDataService;

    @GetMapping("/newStats")
    List<LocationStats> getNewStats() throws IOException, InterruptedException {
        return coronaVirusDataService.fetchVirusData();
    }

}
