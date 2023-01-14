-- Find the item that has minimum weight.
SELECT MIN(weight) FROM items;

-- Find the different warehouses in “Pune”.
SELECT DISTINCT name FROM warehouses WHERE location = 'Pune';

-- Find the details of items ordered by a customer “Mr. Patil”.
SELECT * FROM items WHERE id IN (
    SELECT item_id FROM orders WHERE customer_id = (SELECT id FROM customer WHERE name = 'Mr. Patil')
);

-- Find a Warehouse which has maximum stores.
SELECT * FROM warehouses WHERE id IN (
    SELECT warehouse_id FROM stores GROUP BY warehouse_id ORDER BY COUNT(*) DESC LIMIT 1
);


-- Find an item which is ordered for a minimum number of times.
SELECT * FROM items WHERE id IN (
    SELECT item_id FROM orders GROUP BY item_id ORDER BY COUNT(*) ASC LIMIT 1
);

-- Find the detailed orders given by each customer.
SELECT * FROM orders WHERE customer_id IN (
    SELECT id FROM customer
);

 
