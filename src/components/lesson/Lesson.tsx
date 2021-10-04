// import { useState } from "react";
import { connect } from "react-redux";
import LessonPresentation from "./LessonPresentation";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setLessonContent } from "../../redux/lessonInfo/lessonActions";

interface stateProp {
  name?: string;
  catalog?: any;
  uploadContentLessonHandler: (p: any) => void;
}

function Lesson({ name, catalog, uploadContentLessonHandler }: stateProp) {
  const location = useLocation();
  // const [countQuestion, setCountQuestion] = useState(0);
  // console.log(setCountQuestion);
  // console.log(catalog[countQuestion]);

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    fetch("/get_lesson", {
      method: "POST",
      signal: signal,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lesson: location.pathname.split("/").reverse()[0],
      }),
    })
      .then((res) => res.json())
      .then((data) => uploadContentLessonHandler(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadContentLessonHandler]);

  return <LessonPresentation catalog={catalog} />;
}

const mapStateToProps = ({ lesson }: any) => ({
  name: lesson.name,
  catalog: lesson.catalog,
});

const mapDispatchToProps = {
  uploadContentLessonHandler: setLessonContent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);
