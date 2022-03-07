function countdown(x) {
  if (x==0) {
    console.log("Done");
  } else {
    console.log(x + "...");
    countdown(x-1);
  }
}

countdown(10);
