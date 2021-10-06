import { connect } from "react-redux";
import LessonPresentation from "./LessonPresentation";
import { useEffect, useState, useCallback } from "react";
import {
  setLessonContent,
  setLessonTypeName,
} from "../../redux/lessonInfo/lessonActions";
import localforage from "localforage";

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
  const [countQuestion, setCountQuestion] = useState(0);
  const [currSelectedWord, setSelectedWord] = useState("");
  const [messageConfirm, setMessageConfirm] = useState("");
  // console.log(setCountQuestion);
  // console.log(catalog[countQuestion]);

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

  const selectCardHandler = useCallback(
    (event: any) => setSelectedWord(event.currentTarget.dataset.source),
    []
  );

  const submitCardLessonHandler = (event: any) => {
    event.preventDefault();

    // console.log(catalog[countQuestion]);
    if (currSelectedWord === catalog[countQuestion].answer) {
      setMessageConfirm("success");
    } else {
      setMessageConfirm("error");
    }
  };

  const getNextLessonHandler = (event: any) => {
    event.preventDefault();
    setSelectedWord("");
    setMessageConfirm("");
    setCountQuestion(countQuestion + 1);
  };

  return (
    <LessonPresentation
      countQuestion={countQuestion}
      catalog={catalog}
      onSelectCardHandler={selectCardHandler}
      currSelectedWord={currSelectedWord}
      onSubmitCardLessonHandler={submitCardLessonHandler}
      onGetNextLessonHandler={getNextLessonHandler}
      messageConfirm={messageConfirm}
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
