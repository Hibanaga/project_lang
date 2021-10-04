import ActionReturnBack from "./components/actionReturnBack";
import "./styles/lesson.scss";

interface stateProp {
  catalog: [];
}

export default function LessonPresentation({ catalog }: stateProp) {
  console.log(catalog);

  return (
    <div className="containerPresentationCard">
      <ActionReturnBack />

      <h1>title</h1>
    </div>
  );
}
