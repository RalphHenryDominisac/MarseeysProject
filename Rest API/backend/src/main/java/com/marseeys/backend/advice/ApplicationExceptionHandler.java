package com.marseeys.backend.advice;

import com.marseeys.backend.exception.*;
import org.jetbrains.annotations.NotNull;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class ApplicationExceptionHandler {
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(DatabaseException.class)
    public Map<String, String> handleDatabaseException(DatabaseException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put(ex.getErrorId(), ex.getMessage());
        if (ex.getCause() != null) {
            errorMap.put(ex.getCause().getClass().getSimpleName(), ex.getCause().getLocalizedMessage());
        }

        return errorMap;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MenuException.class)
    public Map<String, String> handleItemException(MenuException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put(ex.getErrorId(), ex.getMessage());
        if (ex.getCause() != null) {
            errorMap.put(ex.getCause().getClass().getSimpleName(), ex.getCause().getLocalizedMessage());
        }

        return errorMap;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(CashException.class)
    public Map<String, String> handlePaymentException(CashException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put(ex.getErrorId(), ex.getMessage());
        if (ex.getCause() != null) {
            errorMap.put(ex.getCause().getClass().getSimpleName(), ex.getCause().getLocalizedMessage());
        }

        return errorMap;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(IngredientException.class)
    public Map<String, String> handlePaymentException(IngredientException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put(ex.getErrorId(), ex.getMessage());
        if (ex.getCause() != null) {
            errorMap.put(ex.getCause().getClass().getSimpleName(), ex.getCause().getLocalizedMessage());
        }

        return errorMap;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(DuplicateException.class)
    public Map<String, String> handlePaymentException(@NotNull DuplicateException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put(ex.getErrorId(), ex.getMessage());
        if (ex.getCause() != null) {
            errorMap.put(ex.getCause().getClass().getSimpleName(), ex.getCause().getLocalizedMessage());
        }

        return errorMap;
    }
}
