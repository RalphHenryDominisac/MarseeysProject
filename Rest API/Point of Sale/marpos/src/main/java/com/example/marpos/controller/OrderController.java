package com.example.marpos.controller;

import com.example.marpos.dto.order.*;
import com.example.marpos.entity.order.Order;
import com.example.marpos.exception.order.OrderNotFoundException;
import com.example.marpos.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/v1/order")
@AllArgsConstructor
public class OrderController {

    //  getPendingOrders - done
    //  saveOrder(DineIn, Delivery, PickUp) - done
    //  editOrder - done

    private final OrderService orderService;

    @GetMapping()
    public ResponseEntity<List<Order>> getPendingOrders() {
        return ResponseEntity.ok(orderService.getPendingOrders());
    }

    @PostMapping("/add/dine")
    public ResponseEntity<Order> saveOrder(@RequestBody @Valid DineInRequest dineInRequest) {
        return new ResponseEntity<>(orderService.saveOrder(dineInRequest), HttpStatus.CREATED);
    }

    @PostMapping("/add/delivery")
    public ResponseEntity<Order> saveOrder(@RequestBody @Valid DeliveryRequest deliveryRequest) {
        return new ResponseEntity<>(orderService.saveOrder(deliveryRequest), HttpStatus.CREATED);
    }

    @PostMapping("/add/pickup")
    public ResponseEntity<Order> saveOrder(@RequestBody @Valid PickUpRequest pickUpRequest) {
        return new ResponseEntity<>(orderService.saveOrder(pickUpRequest), HttpStatus.CREATED);
    }

    @PostMapping("/edit/{id}")
    public ResponseEntity<Order> editOrder(@PathVariable int id, @RequestBody @Valid EditOrderRequest editOrderRequest) throws OrderNotFoundException {
        return new ResponseEntity<>(orderService.editOrder(id, editOrderRequest), HttpStatus.OK);
    }
}