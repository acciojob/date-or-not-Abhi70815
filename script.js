function isDate(input) {
  // Check if the input is a Date object and it's valid
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  // If the input is not a Date object, try to parse it as a date string
  if (typeof input === 'string' || typeof input === 'number') {
    let date = new Date(input);
    return !isNaN(date.getTime());
  }

  // If none of the above conditions are met, return false
  return false;
}

// Example usage:
console.log(isDate(new Date()));        // true
console.log(isDate("2023-08-11"));      // true
console.log(isDate("not a date"));       // false
console.log(isDate(1657641600000));     // true (timestamp for "2022-07-12T00:00:00.000Z")
console.log(isDate({ year: 2023 }));    // false (object that cannot be parsed as a date)
