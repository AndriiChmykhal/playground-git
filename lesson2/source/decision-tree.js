function decisionTree() {

    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);

    console.log("a = ", a);
    console.log("b = ", b);

    if (a > b) {
        console.log("a > b");
    } else if (a < b) {
        console.log("a < b");
    } else {
        console.log("a == b");
    }
}

decisionTree();