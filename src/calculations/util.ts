const {
  acos,
  tan
} = Math
export const toRadians = angle => angle * Math.PI / 180
export const toDegrees = angle => angle * 180 / Math.PI

export const simpson = (F, n, a, b) => {
    if (n % 2 !== 0) {
        throw new Error("n must be even")
    }
    const h = (b - a) / n
    let sum = F(a);

    for (let i = 1; i < n; i++) {
        sum += F(i*h + a) * (i % 2 == 0 ? 2 : 4)
    }

    sum += F(n*h)

    return sum * h / 3
}


