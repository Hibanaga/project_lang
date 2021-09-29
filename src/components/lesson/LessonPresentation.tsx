import "./styles/lesson.scss";

interface stateProp {
  onToggleLessonOpenHandler: () => void;
}

export default function LessonPresentation({
  onToggleLessonOpenHandler,
}: stateProp) {
  return (
    <div className="containerPresentationCard">
      <h1>title</h1>
    </div>
  );
}
