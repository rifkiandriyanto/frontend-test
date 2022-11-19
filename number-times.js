const numberTimes = (params) => {
  for (let i = 0; i <= 9; i++) {
    const arr = `${params}`.split("");
    let counter = 0;
    arr.map((value) => (value === `${i}` ? counter++ : ""));
    console.log(
      `The number ${i} appears ${counter} time${counter !== 1 ? "s" : ""}`
    );
  }
};

numberTimes("776265327");
