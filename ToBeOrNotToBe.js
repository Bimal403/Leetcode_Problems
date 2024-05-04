function expect(val) {
  let Obj = {
    toBe: function (val1) {
      if (val === val1) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (val2) {
      if (val !== val2) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
  return Obj;
}

try {
  const answer = expect(6).toBe(5);
  console.log(answer);
} catch (error) {
  console.log(error.message);
}
