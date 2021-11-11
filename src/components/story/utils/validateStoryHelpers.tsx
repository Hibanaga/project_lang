function replaceVariantStory(
  inputStr: string | undefined,
  itemToConvert: string
) {
  return inputStr !== undefined && inputStr.replaceAll(inputStr, itemToConvert);
}

export { replaceVariantStory };
