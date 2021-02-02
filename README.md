## Koodoo Software Engineer Technical Assessment Solution 👾

---

### Solution Steps

- Initally, I extracted the balance amount into an array.
- Then I used **every()** method to determines from someone's ${accountBalanceHistory} whether the array is of type A (variable) or type B (fixed).


### Things I wanted to clarify about my logic

- The task was to **"write a function that returns B when the balance amount goes down by the same value each month or A when it varies month by month"**
  - So, the question mentioned **only about the balance that goes down**, so my logic also followed the same. Hence, I didn't consider the part where the amount increases by the same value. 
  
  For example, 0th month - 100, 1st month - 0, 2nd month - 100
- As negative balances are not usually in present in the system, I didn't consider that too.
