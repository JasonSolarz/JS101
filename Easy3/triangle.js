function triangle(n, star = "*") {

  console.log(" ".repeat(n) + star);
  star += "*";

  if (n <= 0) {
    return;
  }

  triangle(n - 1, star);
}

triangle(5);
