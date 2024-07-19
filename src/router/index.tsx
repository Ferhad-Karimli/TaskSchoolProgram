import { Navigate, createBrowserRouter } from "react-router-dom";
import Exam from "../components/exams/Exam";
import Header from "../components/layout/header/Header";
import Layout from "../components/layout/Layout";
import Lessons from "../components/lessons/Lessons";
import Students from "../components/students/Students";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Lessons />,
      },
      {
        path: "addStudent",
        element: <Students />,
      },
      {
        path: "addExam",
        element: <Exam />,
      },
    ],
  },
]);
