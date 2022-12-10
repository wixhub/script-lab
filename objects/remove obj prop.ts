const removeKey = (key, obj) => {
  const { [key]: omitted, ...res } = obj;
};

console.log(removeKey("bar", { foo: 1, bar: 2 }));

// Output: {foo:1}
