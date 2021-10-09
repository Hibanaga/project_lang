function disablesUsedWord(word: string, arrWord: [id: string, value: any]) {
  return arrWord.some(({ value }) => value === word);
}

function isAvailableQuestion(
  strTypeA: string,
  arrTypeB: [],
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
}

function isCompletedQuestion(
  strTypeA: string,
  strTypeB: string,
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
}

export { disablesUsedWord, isAvailableQuestion, isCompletedQuestion };
