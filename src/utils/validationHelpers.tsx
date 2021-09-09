function validateInput(string: string): string {
  let pattern = /[`~#$%^&*()|+\-=;'"<>{}[\]\\/]/gi;
  return string.match(pattern) ? string.replace(pattern, "") : string;
}

export { validateInput };
