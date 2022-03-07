function countdown(x) {
  if (x==0) {
    console.log("Done");
  } else {
    console.log(x + "...");
    countdown(x-1);
    console.log("extra");
  }
}

countdown(3);
