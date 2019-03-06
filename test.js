try {
    console.log(1)
    throw new Error
} catch (e) {
    console.log(2)
}

console.log(3)