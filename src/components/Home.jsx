import { useEffect, useState } from "react";
// import { auth, db } from "../firebase/firebase";
// import { doc, getDoc } from "firebase/firestore";
import { quiz_data } from "./quizData";
export default function Home() {
  // const [userDetails, setUserDetails] = useState(null);

  // const fetchUserData = async () => {
  //   auth.onAuthStateChanged(async (user) => {
  //     console.log(user);
  //     const docRef = doc(db, "Users", user.uid);
  //     console.log(docRef);
  //     const docSanp = await getDoc(docRef);
  //     console.log(docSanp.exists());

  //     if (docSanp.exists()) {
  //       setUserDetails(docSanp.data());
  //       console.log(docSanp.data());
  //     } else {
  //       console.log("user is not logged in");
  //     }
  //   });
  // };
  // useEffect(() => {
  //   fetchUserData();
  // }, []);
  const quizData = quiz_data.questions;

  const [IsRight, setIsright] = useState({});
  const [showResult, setShowResult] = useState(0);
  const [show, setshow] = useState(false);
  const submitOption = (questionIndex, optionIndex, option) => {
    setIsright((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
    if (quizData[questionIndex].correctAnswer === option) {
      console.log("hey,you are right ");
      setShowResult(showResult + 1);
      console.log(showResult);
    } else {
      console.log("this is not right ");
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
        {quizData && quizData.length > 0 ? (
          quizData.map((e, questionIn) => (
            <div key={questionIn}>
              <h3 className="text-red-500">{e.question}</h3>

              <ul>
                {e.options.map((option, optionind) => (
                  <li
                    key={optionind}
                    onClick={() => submitOption(questionIn, optionind, option)}
                    className={`${
                      IsRight[questionIn] === optionind
                        ? "text-red-700 bg-yellow-200 "
                        : "text-green-700"
                    }`}
                  >
                    {optionind + 1 + " " + option}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>{"nothing is here "}</p>
        )}
        <button
          className="text-3xl bg-yellow-100"
          onClick={() => setshow(!show)}
        >
          Finish quiz
        </button>
        <p className="text-2xl">{show && showResult}</p>
      </div>
    </div>
  );
}
