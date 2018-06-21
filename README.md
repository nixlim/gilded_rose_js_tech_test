## Approach


### Prepping Code for Change
Test the entire code base before making any amendments (other than extracting Item Class for easier testing).

Results:
``` 
22 specs, 0 failures
Finished in 0.027 seconds
Randomized with seed 96476 (jasmine --random=true --seed=96476)
---------------|----------|----------|----------|----------|-------------------|
File           |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
---------------|----------|----------|----------|----------|-------------------|
All files      |      100 |    88.57 |      100 |      100 |                   |
 item_class.js |      100 |      100 |      100 |      100 |                   |
 shop_class.js |      100 |    88.57 |      100 |      100 |       18,23,36,45 |
---------------|----------|----------|----------|----------|-------------------|
```
The uncovered lines are the uncalled 'else' branches that cannot, in fact, be called.

Detailed coverage report for Item Class:
![Item Class Coverage HTML Report](img/Item_Class_Istanbul_Coverage_Report.png)

Detailed coverage report for Shop Class Class:
![Item Class Coverage HTML Report](img/Shop_Class_Istanbul_Coverage_Report.png)