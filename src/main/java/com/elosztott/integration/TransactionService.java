package com.elosztott.integration;

import com.elosztott.model.Transaction;

/**
 * Created by makra on 2016. 12. 23..
 */
public interface TransactionService {
    public void applyTransfer(Transaction t);
}
