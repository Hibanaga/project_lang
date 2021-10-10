function disablesUsedWord(word: string, arrWord: [id: string, value: any]) {
  return arrWord.some(({ value }) => value === word);
}

function isAvailableQuestion(
  strTypeA: string,
  arrTypeB: [],
  strTypeC: string,
  options: {
    type: string;
  }
) {
  const { type } = options;

  //type A
  if (type === "A" && strTypeA === "") {
    return true;
  } else if (type === "A" && strTypeA !== "") {
    return false;
  }

  if (type === "B" && arrTypeB.length === 0) {
    return true;
  } else if (type === "B" && arrTypeB.length === 0) {
    return false;
  }

  if (type === "C" && strTypeC === "") {
    return true;
  } else if (type === "C" && strTypeC !== "") {
    return false;
  }
}

function isCompletedQuestion(
  strTypeA: string,
  strTypeB: string,
  strTypeC: string,
  type: string,
  currentAnswer: string
) {
  if (type === "A" && strTypeA === currentAnswer) {
    return true;
  } else if (type === "A" && strTypeA !== "") {
    return false;
  }

  if (type === "B" && strTypeB === currentAnswer) {
    return true;
  } else if (type === "B" && strTypeB !== currentAnswer) {
    return false;
  }

  if (
    type === "C" &&
    replacedAllUnusedLocals(strTypeC).toLowerCase().trim() ===
      replacedAllUnusedLocals(currentAnswer).toLowerCase().trim()
  ) {
    return true;
  } else if (
    type === "C" &&
    replacedAllUnusedLocals(strTypeC).toLowerCase() ===
      replacedAllUnusedLocals(currentAnswer).toLowerCase()
  ) {
    return false;
  }
}

function replacedAllUnusedLocals(str: string): string {
  let pattern = /[`,.~#$%^&*()|+\-=;'"< >{}[\]\\/]/gi;

  return str.match(pattern) ? str.replaceAll(pattern, "") : str;
}

function detectCurrWidthProgressBar(
  currQuestion: number,
  allQuestion: number
): string {
  const result = (currQuestion / allQuestion) * 100;
  return result.toFixed(2);
}

export {
  disablesUsedWord,
  isAvailableQuestion,
  isCompletedQuestion,
  replacedAllUnusedLocals,
  detectCurrWidthProgressBar,
};
