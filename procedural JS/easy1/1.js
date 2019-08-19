for (var i = 1; i <= 99; i += 2) {
  console.log(i);
}

// FE

function logOdds(limit) {
  for (var i = 0; i < limit; i++) {
    if (i % 2 === 0) { continue; }

    console.log(i);
  }
}

logOdds(10)

