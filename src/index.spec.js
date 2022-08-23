import { toCamelCase, toUpperCase, transformKeys } from "./index";
/* 
  Write a function that takes an object as an argument and returns
  the same object with all its keys in uppercase. 
*/

describe("toUpperCase", () => {
  it("transforms an object's keys to uppsercase", () => {
    expect(
      toCamelCase({
        first_name: "Andres",
        last_name: "Zapata",
        street_address_one: "abc 123"
      })
    ).toEqual({
      firstName: "Andres",
      lastName: "Zapata",
      streetAddressOne: "abc 123"
    });
  });
});

/* 
  Write a function that takes an object with keys in snake_case as an argument and returns
  the same object with all its keys in camelCase. 
*/

describe("toCamelCase", () => {
  it("transforms an object's keys to camelCase", () => {
    expect(
      toUpperCase({
        first_name: "Andres",
        last_name: "Zapata",
        street_address_one: "abc 123"
      })
    ).toEqual({
      FIRST_NAME: "Andres",
      LAST_NAME: "Zapata",
      STREET_ADDRESS_ONE: "abc 123"
    });
  });
});

/* 
  Write a function that accepsts an object and a key type (snake_case or camelCase)
  and returns an object with the keys transformed recursively to the specified format.
*/

describe("transformKeys", () => {
  it("transforms an object's keys to camelCase", () => {
    expect(
      transformKeys(
        {
          first_name: "Andres",
          last_name: "Zapata",
          street_address_one: "abc 123"
        },
        "camelCase"
      )
    ).toEqual({
      firstName: "Andres",
      lastName: "Zapata",
      streetAddressOne: "abc 123"
    });
  });

  it("transforms an object's keys to snake_case", () => {
    expect(
      transformKeys(
        {
          firstName: "Andres",
          lastName: "Zapata",
          streetAddressOne: "abc 123"
        },
        "snakeCase"
      )
    ).toEqual({
      first_name: "Andres",
      last_name: "Zapata",
      street_address_one: "abc 123"
    });
  });

  it("transforms an object's keys to snake_case recursively", () => {
    expect(
      transformKeys(
        {
          firstName: "Andres",
          lastName: "Zapata",
          streetAddressOne: "abc 123",
          nestedObject: {
            thisIsOk: true,
            thisIsNotOk: false
          }
        },
        "snakeCase"
      )
    ).toEqual({
      first_name: "Andres",
      last_name: "Zapata",
      street_address_one: "abc 123",
      nested_object: {
        this_is_ok: true,
        this_is_not_ok: false
      }
    });
  });
});
