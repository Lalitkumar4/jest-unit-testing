const functions = require("./functions")

// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

// const initDatabase = () => console.log("Database Initialized...")
// const closeDatabase = () => console.log("Database Closed...")

// const nameCheck = () => console.log("Checking Name...")

describe("Checking Names", () => {
  // beforeEach(() => nameCheck())

  test("User is Jeff", () => {
    const user = "Jeff"
    expect(user).toBe("Jeff")
  })

  test("User is Mike", () => {
    const user = "Mike"
    expect(user).toBe("Mike")
  })
})

// toBe
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4)
})

// not
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5)
})

// toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull()
})

// toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy()
})

// toEqual
test("User should be Lalit Kumar object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Lalit",
    lastName: "Kumar",
  })
})

// Less than and greater than
test("Should be under 1600", () => {
  const load1 = 800
  const load2 = 800
  expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i)
})

// Arrays
test("Admin should be in username", () => {
  usernames = ["john", "mike", "admin"]
  expect(usernames).toContain("admin")
})

// Working with async data

// Promise
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1)
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham")
//   })
// })

// Async Await
test("user fetched name should be Leanne Graham", async () => {
  expect.assertions(1)
  const data = await functions.fetchUser()
  expect(data.name).toEqual("Leanne Graham")
})
