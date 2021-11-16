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
  return countFalsyAnswer === 0
    ? 0
    : (countFalsyAnswer / countActiveReplics) * 100;
}

function returnMessageCongratulations(messageArr: any, percentange: number) {
  return messageArr.reduce(
    (prev: string, { message, percentangeSpread }: any) => {
      let [min, max] = percentangeSpread.split("-");
      if (percentange >= min && percentange <= max) {
        prev = message;
      }
      return prev;
    },
    ""
  );
}

export {
  replaceVariantStory,
  returnCountActiveReplics,
  returnPercentangeSuccesfullyAnswer,
  returnMessageCongratulations,
};
