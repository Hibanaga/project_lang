function replaceVariantStory(
  inputStr: string | undefined,
  itemToConvert: string
) {
  return inputStr !== undefined && inputStr.replaceAll(inputStr, itemToConvert);
}

function returnCountActiveReplics(arrLesson: any) {
  return arrLesson.reduce((prev: number, { actionType }: any) => {
    if (actionType === "active") {
      prev += 1;
    }
    return prev;
  }, 0);
}

function returnPercentangeSuccesfullyAnswer(
  countFalsyAnswer: number,
  countActiveReplics: number
) {
  return (countActiveReplics / countFalsyAnswer) * 100;
}

export {
  replaceVariantStory,
  returnCountActiveReplics,
  returnPercentangeSuccesfullyAnswer,
};
