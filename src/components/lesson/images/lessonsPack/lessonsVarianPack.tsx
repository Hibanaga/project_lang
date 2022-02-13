import homeworkIMG from "./homework.png";
import homelessIMG from "./homeless.png";
import classIMG from "./webinar.png";
import testIMG from "./test.png";
import examIMG from "./exam.png";
import timeIMG from "./timetable.png";



type Dict = {
  [key: string]: string;
};

export const objExported: Dict = {
  Homework: homeworkIMG,
  Homeless: homelessIMG,
  Class: classIMG,
  Test: testIMG,
  Exam: examIMG,
  Time: timeIMG,
};

export default objExported;
