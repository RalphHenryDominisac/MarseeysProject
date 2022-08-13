package com.example.marpos.controller;

import com.example.marpos.enumeration.ItemType;
import com.example.marpos.entity.item.Item;
import com.example.marpos.service.ItemService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/menu")  // Port 8080
@AllArgsConstructor
public class ItemController {

    //    getItemsFromCategory - done
    //    searchItem - done
    //    saveItem - done
    //    updateItem
    //    deleteItem

    private final ItemService itemService;

    @GetMapping("/{type}")
    public ResponseEntity<Optional<List<Item>>> getItemsFromCategory(@PathVariable String type) {
        return ResponseEntity.ok(itemService.getItemsFromCategory(ItemType.valueOf(type)));
    }

    @GetMapping()
    public ResponseEntity<Optional<List<Item>>> searchItem(@RequestParam(value = "name") String name) {
        return ResponseEntity.ok(itemService.searchItem(name));
    }

    @PostMapping("/add")
    public ResponseEntity<Item> saveItem(@RequestBody Item item) {
        return new ResponseEntity<>(itemService.saveItem(item), HttpStatus.CREATED);
    }
}