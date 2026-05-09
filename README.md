# Upsert in MongoDB

## Overview
An **upsert** is a combination of **update** and **insert**.  
- If the document exists → it is updated.  
- If the document does not exist → a new one is inserted.  

This is controlled by the `upsert: true` option in MongoDB update methods.

---

## Syntax
```js
db.collection.updateOne(
  { filterCondition },
  { $set: { field: value } },
  { upsert: true }
)
