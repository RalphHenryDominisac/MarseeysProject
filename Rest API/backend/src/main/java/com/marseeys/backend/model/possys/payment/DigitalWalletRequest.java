package com.marseeys.backend.model.possys.payment;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Credentials to be used for signing up.")
public class DigitalWalletRequest {
    @ApiModelProperty(notes = "The id of the order.")
    @NotNull(message = "Please provide an order ID")
    private Integer orderId;

    @ApiModelProperty(notes = "The amount the customer is paying.")
    @NotNull(message = "Please input the amount that you are paying.")
    private Double amount;

    @ApiModelProperty(notes = "The contact number of the customer.")
    @NotBlank(message = "Please provide the customer's contact number.")
    @Size(min = 11, max = 11, message = "Please input a valid contact number.")
    private String mobileNo;

    @ApiModelProperty(notes = "The e-wallet platform used by the customer.")
    @NotBlank(message = "Please provide the customer's e-wallet platform.")
    private String platform;
}
