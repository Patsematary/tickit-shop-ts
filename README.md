# Tickit Shop Refactoring Exercise

Hi and welcome to Tickit Shop. This is a small shop in a 
central location ran by a friendly shopkeeper named 
Sandy. We have a system in place that updates our inventory for us. It was 
developed by a no-nonsense type named Seif, who has moved on to new 
adventures. Your task is to add the new feature to our system so that we 
can begin selling a new category of items. First an introduction to our 
system:

- All items have a sellIn value which denotes the number of days we have 
to sell the item
- All items have a Quality value which denotes how valuable the item is
- At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- "Sharp Cheddar" actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- "Ping-pong Paddle", being a legendary item, never has to be sold or decreases 
in Quality
- "Lady Gaga tickets", like sharp cheddar, increases in Quality as it's sellIn 
value approaches; Quality increases by 2 when there are 10 days or less 
and by 3 when there are 5 days or less but Quality drops to 0 after the 
concert

We have recently signed a supplier of conjured items. This requires an 
update to our system:

- "Conjured" items degrade in Quality twice as fast as normal items

Feel free to make any changes to the code and add any 
new code as long as everything still works correctly. However, do not 
alter the method signature of the TickitShop 'create'.

Just for clarification, an item can never have its Quality increase 
above 50, however "Ping Pong Paddle" is a legendary item and as such its 
Quality is 80 and it never alters.

## Your job

Write specs and refactor the code.

## Installation

`npm install`
