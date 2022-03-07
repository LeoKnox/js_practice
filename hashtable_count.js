let TableToCount = [3, 5, 7, 5, 9, 3, 3, 8];
let Count = {};

for (let i = 0; i < TableToCount.length; i++) {
  if (Count[TableToCount[i]] === undefined) {
    Count[TableToCount[i]] = 1;
  } else {
    Count[TableToCount[i]] += 1;
  }
}

console.log(Count);
