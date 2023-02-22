const a = 1;
const b = 3;

function sum() {
  return a + b;
}

/* dva su načina:
prvi način:
export const a = 1
export const b = 3;

export function sum() {
    return a + b;
} */

/* drugi način: */
export { a, b, sum };
