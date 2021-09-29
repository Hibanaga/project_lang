import { connect } from "react-redux";
import LessonPresentation from "./LessonPresentation";

interface stateProp {
  name?: string;
  catalog?: [];
}

function Lesson({ name, catalog }: stateProp) {
  return <LessonPresentation />;
}

const mapStateToProps = ({ lesson }: any) => ({
  name: lesson.name,
  catalog: lesson.catalog,
});

export default connect(mapStateToProps, null)(Lesson);
