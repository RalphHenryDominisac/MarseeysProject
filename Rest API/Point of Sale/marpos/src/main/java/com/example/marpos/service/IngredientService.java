package com.example.marpos.service;

import com.example.marpos.model.Ingredient;
import com.example.marpos.repo.IngredientRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@AllArgsConstructor
@Service
// Service layer of the Ingredient class
public class IngredientService {
    private final IngredientRepository ingredientRepository;

    public List<Ingredient> getAllItems() {
        return ingredientRepository.findAll();
    }

    public Ingredient searchItem(@RequestParam(value = "name") String name) {
        return ingredientRepository.findByNameEqualsIgnoreCase(name);
    }

    public void createIngredient(Ingredient ingredient) {
        ingredientRepository.insert(ingredient);
    }

    public void updateIngredient(Ingredient ingredient) {
        ingredientRepository.save(ingredient);
    }

    public void deleteIngredient(Ingredient ingredient) {
        ingredientRepository.save(ingredient);
    }
}