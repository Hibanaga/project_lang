import universityIMG from "./university.png";
import schoolIMG from "./school.png";
import collegeIMG from "./college.png";
import evaluationIMG from "./evaluation.png";
import taskIMG from "./to-do-list.png";
import scoreIMG from "./grade.png";


type Dict = {
  [key: string]: string;
};

const objExported: Dict = {
  College: collegeIMG,
  University: universityIMG,
  School: schoolIMG,
  Evaluation: evaluationIMG,
  Task: taskIMG,
  Score: scoreIMG,
};

export default objExported;
