package com.gog.starrynight.domain.constellation.controller;

import com.gog.starrynight.common.dto.ApiResponse;
import com.gog.starrynight.domain.constellation.dto.CreateConstellation;
import com.gog.starrynight.domain.constellation.dto.ConstellationInfo;
import com.gog.starrynight.domain.constellation.service.ConstellationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "별자리 관리")
@RestController
@RequiredArgsConstructor
public class ConstellationController {
    private final ConstellationService constellationService;

    @Operation(summary = "별자리 등록")
    @PostMapping("/constellations")
    public ResponseEntity<ApiResponse> createConstellation(@RequestBody CreateConstellation dto) {
        ConstellationInfo constellationInfo = constellationService.createConstellation(dto);
        ApiResponse result = new ApiResponse(true, "별자리 등록 성공", constellationInfo);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }
}
