let HashTable = {"one":1, "two":2, "four":4};

for (key in HashTable) {
  console.log(":" + " " + HashTable[key]);
}
console.log(HashTable["one"]);
HashTable["nine"] = "nine";
console.log(HashTable);
console.log(HashTable["dfasf"]);
HashTable["two"] = 10
console.log(HashTable);
