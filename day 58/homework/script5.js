function Oddsum(A, B, C) {
    let sum = 0;
    if (A % 2 !== 0) sum += A;
    if (B % 2 !== 0) sum += B;
    if (C % 2 !== 0) sum += C;

    if (sum > 15) {
        console.log(true);
    }else
        console.log(false);
}