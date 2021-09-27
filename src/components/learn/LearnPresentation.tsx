import { Row, Wrapper } from "../../styles/styled-comp";
import "./styles/learn.scss";
import TrainingSection from "./components/trainingSection";
import catalog from "./assets/catalog.json";
import { introduceOff, introduceOn } from "./images/catalog/imageCatalogExport";

interface stateProp {
  introduction: boolean;
}

export default function MainPresentation({ introduction }: stateProp) {
  return (
    <section className="containerLearn">
      <Wrapper>
        <Row>
          <TrainingSection
            content={catalog[0]}
            imgOff={introduceOff}
            imgOn={introduceOn}
          />
        </Row>
      </Wrapper>
    </section>
  );
}
