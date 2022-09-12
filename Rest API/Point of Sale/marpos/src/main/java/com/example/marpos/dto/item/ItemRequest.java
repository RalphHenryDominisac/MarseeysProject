package com.example.marpos.dto.item;

import com.example.marpos.enumeration.ItemType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemRequest {
    @NotNull(message = "Name cannot be null")
    @Size(min = 1, message = "Name cannot be empty")
    private String name;

    @Min(value = 10, message = "Minimum is 10")
    private double price;

//    @NotEmpty(message = "Please provide a list of ingredients")
//    private List<@Valid IngredientRequest> ingredientRequests;

    @NotNull(message = "Please pick a category for the item")
    private ItemType type;
}