package com.marseeys.backend.model.invsys.transaction;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Future;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransactionInRequest {
    @NotNull(message = "Please input a valid ID.")
    @Min(value = 1, message = "Please input a valid ID.")
    private int ingredient;

    @NotNull(message = "Quantity cannot be null.")
    @Min(value = 1, message = "Please input a valid quantity.")
    private double quantity;

    @NotBlank(message = "Please input a remark.")
    private String remarks;

    @NotNull(message = "Please input a date.")
    @Future(message = "Please input a valid date.")
    private LocalDate expiryDate;
}