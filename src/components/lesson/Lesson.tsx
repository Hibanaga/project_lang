import { connect } from "react-redux";
import LessonPresentation from "./LessonPresentation";
import { useEffect, useState, useCallback, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { isCompletedQuestion } from "./utils/validateLessonExamples";
// import { Redirect } from "react-router-dom";
import { learn } from "../../router/routes";

import {
  setLessonContent,
  setLessonTypeName,
} from "../../redux/lessonInfo/lessonActions";
import localforage from "localforage";
import { useHistory } from "react-router";

interface stateProp {
  name?: string;
  catalog?: any;
  uploadContentLessonHandler: (p: any) => void;
  uploadContentLessonName: (p: any) => void;
}

function Lesson({
  name,
  catalog,
  uploadContentLessonHandler,
  uploadContentLessonName,
}: stateProp) {
  const history = useHistory();

  const [countQuestion, setCountQuestion] = useState(0);
  const timer: any = useRef(null);

  //typeA
  const [currSelectedWord, setSelectedWord] = useState("");
  const [messageConfirm, setMessageConfirm] = useState("");

  //typeB
  const [arrWordMessage, setArrWordMessage] = useState<
    Array<{ id: string; value: string }>
  >([]);

  const [countScrore, setCountScore] = useState(0);
  const [typedText, setTypedText] = useState("");

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

  //redirect after count of question is equal lesson length;
  // useEffect(() => {
  //   if (countQuestion === catalog.length) {
  //     timer.current = setTimeout(() => {
  //       console.log("aaaaa");

  //       history.push(learn);
  //     }, 3000);
  //   }

  //   return () => clearTimeout(timer.current);
  // }, [catalog.length, countQuestion, history]);

  // select word from type A
  const selectCardHandler = useCallback(
    (event: any) => setSelectedWord(event.currentTarget.dataset.source),
    []
  );

  // submit type A
  const submitCardLessonHandler = (event: any) => {
    event.preventDefault();
    // console.log(catalog[countQuestion]);

    //type A submit

    let stringWordsTypeB = arrWordMessage.reduce((prev, curr, idx) => {
      return idx === 0 ? curr.value : prev + " " + curr.value;
    }, "");

    if (
      isCompletedQuestion(
        currSelectedWord,
        stringWordsTypeB,
        typedText,
        catalog[countQuestion].type,
        catalog[countQuestion].answer
      )
    ) {
      setMessageConfirm("success");
      setCountScore(countScrore + 1);
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

  // add word to array in question type B
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

  //remove selected Element from arr in question type B
  const removeWordFromMessageBoxHandler = useCallback(
    (event: any) => {
      let target = event.currentTarget.textContent;
      setArrWordMessage(arrWordMessage.filter(({ value }) => value !== target));
    },
    [arrWordMessage]
  );

  const changeTextAreaHandler = (event: any) =>
    setTypedText(event.target.value);

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
      countScrore={countScrore}
    />
  );
}

const mapStateToProps = ({ lesson }: any) => ({
  name: lesson.name,
  catalog: lesson.catalog,
});

const mapDispatchToProps = {
  uploadContentLessonHandler: setLessonContent,
  uploadContentLessonName: setLessonTypeName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);
