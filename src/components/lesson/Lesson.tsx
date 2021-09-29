import { connect } from "react-redux";
import LessonPresentation from "./LessonPresentation";

interface stateProp {
  onToggleLessonOpenHandler: () => void;
  lessonType?: string;
  catalog?: [];
}

function Lesson({ onToggleLessonOpenHandler, lessonType, catalog }: stateProp) {
  return (
    <LessonPresentation onToggleLessonOpenHandler={onToggleLessonOpenHandler} />
  );
}

const mapStateToProps = ({ lesson }: any) => ({
  lessonType: lesson.name,
  catalog: lesson.catalog,
});

export default connect(mapStateToProps, null)(Lesson);
