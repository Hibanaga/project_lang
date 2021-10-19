import { connect } from "react-redux";
import LessonPresentation from "./LessonPresentation";
import { memo, useEffect, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { isCompletedQuestion } from "./utils/validateLessonExamples";
// uniqNumbers,
import {
  setLessonContent,
  setLessonTypeName,
} from "../../redux/lessonInfo/lessonActions";
import localforage from "localforage";
import { setCountCoin, setCountCrown } from "../../redux/userInfo/userActions";
import { withTranslation } from "react-i18next";
// import uniq from "lodash.uniq";

interface stateProp {
  name?: any;
  catalog?: any;
  uploadContentLessonHandler: (p: any) => void;
  uploadContentLessonName: (p: any) => void;
  updateCountCoinHandler: (p: any) => void;
  updateCountCrownHandler: (p: any) => void;
  t: (p: any) => string;
  progress: any;
  coin: number;
  crown: number;
  clientID: string;
}

function Lesson({
  name,
  catalog,
  progress,
  uploadContentLessonHandler,
  uploadContentLessonName,
  updateCountCoinHandler,
  updateCountCrownHandler,
  coin,
  crown,
  clientID,

  t,
}: stateProp) {
  const [countQuestion, setCountQuestion] = useState(0);

  //typeA
  const [currSelectedWord, setSelectedWord] = useState("");
  const [messageConfirm, setMessageConfirm] = useState("");

  //typeB
  const [arrWordMessage, setArrWordMessage] = useState<
    Array<{ id: string; value: string }>
  >([]);

  const [countScore, setCountScore] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [progressArr, setProgressArr] = useState<Array<number>>([]);

  //get current lesson data
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (name === "") {
      localforage
        .getItem("currLesson")
        .then((lessonName: any) => uploadContentLessonName(lessonName));
    }

    if (name !== "") {
      fetch("/get_lesson", {
        method: "POST",
        signal: signal,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lesson: name,
        }),
      })
        .then((res) => res.json())
        .then((data) => uploadContentLessonHandler(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadContentLessonHandler, uploadContentLessonName]);

  // select word from type A
  const selectCardHandler = useCallback(
    (event: any) => setSelectedWord(event.currentTarget.dataset.source),
    []
  );

  // submit type A
  const submitCardLessonHandler = (event: any) => {
    event.preventDefault();

    let correctAnswer = "";

    //type A submit

    let stringWordsTypeB = arrWordMessage.reduce((prev, curr, idx) => {
      return idx === 0 ? curr.value : prev + " " + curr.value;
    }, "");

    catalog[countQuestion].type === "B"
      ? (correctAnswer = t(catalog[countQuestion].answer))
      : (correctAnswer = catalog[countQuestion].answer);
    if (
      isCompletedQuestion(
        currSelectedWord,
        stringWordsTypeB,
        typedText,
        catalog[countQuestion].type,
        correctAnswer
      )
    ) {
      setMessageConfirm("success");

      setProgressArr([...progressArr, countQuestion]);

      // console.log(progress[name]);

      if (progress[name] === undefined) {
        setCountScore(countScore + 1);
      }

      if (
        progress[name] !== undefined &&
        progress[name].indexOf(countQuestion) === -1
      ) {
        setCountScore(countScore + 1);
      }
    } else {
      setMessageConfirm("error");
    }
  };

  // upload next question from type A
  const getNextLessonHandler = (event: any) => {
    event.preventDefault();
    setSelectedWord("");
    setMessageConfirm("");
    setArrWordMessage([]);
    setTypedText("");
    setCountQuestion(countQuestion + 1);
  };

  // add word to array in question type B : correct
  const addWordToMessageBoxHandler = useCallback(
    (event: any) => {
      // console.log(event.currentTarget.textContent);

      let target = event.currentTarget.textContent;
      setArrWordMessage([
        ...arrWordMessage,
        {
          id: uuidv4(),
          value: target,
        },
      ]);
    },
    [arrWordMessage]
  );

  //remove selected Element from arr in question type B :correct
  const removeWordFromMessageBoxHandler = useCallback(
    (event: any) => {
      let target = event.currentTarget.textContent;

      setArrWordMessage(arrWordMessage.filter(({ value }) => value !== target));
    },
    [arrWordMessage]
  );

  const changeTextAreaHandler = (event: any) =>
    setTypedText(event.target.value);

  const submitLessonHandler = (event: any) => {
    updateCountCoinHandler(coin + countScore);
    updateCountCrownHandler(crown + Math.ceil(countScore / 2));

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("/update_markUpCoin", {
      method: "POST",
      signal: signal,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientID: clientID,
        coin: coin + countScore,
        nameCatalog: name,
        updatedProgress: progressArr,
        crown: crown + Math.ceil(countScore / 2),
      }),
    }).then((res) => res.json());

    localforage.removeItem("currLesson");
  };

  const removePathRedirectHandler = () => localforage.removeItem("currLesson");

  // console.log(progressArr);
  // console.log(progress[name]);
  // console.log(countScore);
  // console.log(progressArr);

  return (
    <LessonPresentation
      countQuestion={countQuestion}
      catalog={catalog}
      onSelectCardHandler={selectCardHandler}
      currSelectedWord={currSelectedWord}
      onSubmitCardLessonHandler={submitCardLessonHandler}
      onGetNextLessonHandler={getNextLessonHandler}
      messageConfirm={messageConfirm}
      arrWordMessage={arrWordMessage}
      onAddWordToMessageBoxHandler={addWordToMessageBoxHandler}
      onRemoveWordFromMessageBoxHandler={removeWordFromMessageBoxHandler}
      typedText={typedText}
      onChangeTextAreaHandler={changeTextAreaHandler}
      countScore={countScore}
      onSubmitLessonHandler={submitLessonHandler}
      onRemovePathRedirectHandler={removePathRedirectHandler}
    />
  );
}

const mapStateToProps = ({ lesson, profile }: any) => ({
  name: lesson.name,
  catalog: lesson.catalog,
  coin: profile.coin,
  crown: profile.crown,
  clientID: profile.clientID,
  progress: profile.progress,
});

const mapDispatchToProps = {
  uploadContentLessonHandler: setLessonContent,
  uploadContentLessonName: setLessonTypeName,
  updateCountCoinHandler: setCountCoin,
  updateCountCrownHandler: setCountCrown,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(memo(Lesson))
);
