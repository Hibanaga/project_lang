function validateInput(string: string): string {
  let pattern = /[`~#$%^&*()|+\-=;'"<>{}[\]\\/]/gi;
  return string.match(pattern) ? string.replace(pattern, "") : string;
}
function removeUnusedPartLocation(string: string): string {
  return string.replaceAll("/", "");
}

export { validateInput, removeUnusedPartLocation };
