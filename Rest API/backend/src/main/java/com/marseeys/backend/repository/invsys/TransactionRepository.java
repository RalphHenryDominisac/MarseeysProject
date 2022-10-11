package com.marseeys.backend.repository.invsys;

import com.marseeys.backend.entity.invsys.transaction.Transaction;
import com.marseeys.backend.entity.invsys.transaction.TransactionIn;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface TransactionRepository extends MongoRepository<Transaction, Integer> {
//    "{ $and: [ {'relevant' : true}, {'_class': 'com.marseeys.backend.entity.invsys.transaction.TransactionIn'} ] }"
    @Query("{ $and: [ {'relevant' : true}, {'_class': 'com.marseeys.backend.entity.invsys.transaction.TransactionIn'} ] }")
    List<TransactionIn> findRelevantTransactions();
}
