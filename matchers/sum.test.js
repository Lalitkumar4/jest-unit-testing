const sum = require("./sum")

describe("example tests", () => {
  it("should add 1 + 2 to equal 3", () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
  })

  it("object assignment", () => {
    const obj = {}
    expect(obj).toEqual({})
  })
})

describe("truthy or falsy", () => {
  it("null", () => {
    const n = ""
    expect(n).toBeFalsy()
    expect(n).not.toBeTruthy()
    // expect(n).toBeNull()
    // expect(n).not.toBeUndefined()
  })
})

describe("numbers", () => {
  it("two plus two", () => {
    const value = 2 + 2
    expect(value).toBe(4)
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(4)
    expect(value).toBeLessThan(7)
    expect(value).toBeLessThanOrEqual(4)
  })

  it("adding floats", () => {
    const value = 0.1 + 0.2
    expect(value).toBeCloseTo(0.29999999)
  })
})

describe("string", () => {
  it("there is not I in team", () => {
    expect("team").not.toMatch(/I/)
  })
})

describe("arrays", () => {
  const shoppingLists = ["Kleenex", "trash bags", "paper towels", "milk"]
  expect(shoppingLists).toContain("milk")
})

function compileAndroidCode() {
  throw new Error("you are using wrong SDK")
}

describe("exceptions", () => {
  it("Compiling android goes as expected", () => {
    expect(() => compileAndroidCode()).toThrow("you are using wrong SDK")
  })
})
