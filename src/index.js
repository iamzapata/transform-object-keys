export function toUpperCase(object) {
  let newObject = {};

  const currentKeys = Object.keys(object);

  for (const key of currentKeys) {
    const newKey = key.toUpperCase();

    newObject[newKey] = object[key];
  }

  return newObject;
}

export function toCamelCase(object) {
  let newObject = {};

  const currentKeys = Object.keys(object);

  for (const key of currentKeys) {
    const [firstWord, ...rest] = key.split("_");

    const newKey =
      firstWord.toLowerCase() +
      rest
        .map((word) => {
          return word[0].toUpperCase() + word.slice(1);
        })
        .join("");

    newObject[newKey] =
      typeof object[key] === "object"
        ? transformKeys(object[key])
        : object[key];
  }

  return newObject;
}

export function transformKeys(object, format) {
  let newObject = {};

  const currentKeys = Object.keys(object);

  const isCamelCase = format === "camelCase";

  const splitString = (str) =>
    isCamelCase ? str.split("_") : str.split(/(?=[A-Z])/);

  const restOfKeys = (rest) =>
    rest
      .map((word) => {
        return isCamelCase
          ? word[0].toUpperCase() + word.slice(1)
          : "_" + word[0].toLowerCase() + word.slice(1);
      })
      .join("");

  for (const key of currentKeys) {
    const [firstWord, ...rest] = splitString(key);

    const newKey = firstWord.toLowerCase() + restOfKeys(rest);

    newObject[newKey] =
      typeof object[key] === "object"
        ? transformKeys(object[key], format)
        : object[key];
  }

  return newObject;
}
