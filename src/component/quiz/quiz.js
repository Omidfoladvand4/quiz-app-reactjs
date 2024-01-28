import React from "react";
import "./quiz.css";

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        {
          questionText: "اولین دوره جام جهانی در چه سالی و در کجا برگزار شد؟",
          answerOptions: [
            { answerText: "المان 2006", isCorrect: false },
            { answerText: "ایتالیا1338", isCorrect: false },
            { answerText: "اروگوئه1930", isCorrect: true },
            { answerText: "فرانسه1998", isCorrect: false },
          ],
        },
        {
          questionText: "پر افتخار ترین تیم جام جهانی؟",
          answerOptions: [
            { answerText: "آلمان 4قهرمانی", isCorrect: false },
            { answerText: "برزیل 5قهرمانی", isCorrect: true },
            { answerText: "اسپانیا1قهرمانه", isCorrect: false },
            { answerText: "فرانسه 2قهرمانی", isCorrect: false },
          ],
        },
        {
          questionText: "جام جهانی ۲۰۲۶ در کدام کشور برگزار خواهد شد؟",
          answerOptions: [
            {
              answerText: "به طور مشترک در آمریکا مکزیک و کانادا",
              isCorrect: true,
            },
            { answerText: "مراکش", isCorrect: false },
            { answerText: "اسپانیا", isCorrect: false },
            { answerText: "ایران🤣", isCorrect: false },
          ],
        },
        {
          questionText: "پر افتخار ترین تیم اروپا؟",
          answerOptions: [
            { answerText: "لیورپول", isCorrect: false },
            { answerText: "بارسلونا", isCorrect: false },
            { answerText: "رئال مادرید", isCorrect: true },
            { answerText: "بایرن مونیخ", isCorrect: false },
          ],
        },
        {
          questionText: "بابی چارلتون اسطوره ی فوتبال کدام کشور است؟",
          answerOptions: [
            { answerText: "آلمان", isCorrect: false },
            { answerText: "انگلیس", isCorrect: true },
            { answerText: "اسپانیا", isCorrect: false },
            { answerText: "فرانسه", isCorrect: false },
          ],
        },
        {
          questionText: "رئال مادرید در چه سالی لا دسیما کرد?",
          answerOptions: [
            { answerText: "2014", isCorrect: true },
            { answerText: "2020", isCorrect: false },
            { answerText: "1999", isCorrect: false },
            { answerText: "1956", isCorrect: false },
          ],
        },
        {
          questionText: "کدام تیم بیشترین قهرمانی را در سری A ایتالیا دارد?",
          answerOptions: [
            { answerText: "اینترمیلان", isCorrect: false },
            { answerText: "یوونتوس", isCorrect: true },
            { answerText: "آث میلان", isCorrect: false },
            { answerText: "آ اس رم", isCorrect: false },
          ],
        },
        {
          questionText:
            "پر افتخار ترین استان ایران از لحاظ قهرمانی در جام های مختلف کدام استان است?",
          answerOptions: [
            { answerText: "قم", isCorrect: false },
            { answerText: "تهران", isCorrect: true },
            { answerText: "شیراز", isCorrect: false },
            { answerText: "اصفهان", isCorrect: false },
          ],
        },
        {
          questionText: "در آلمان کدام تیم به زنبور ها مشهور است?",
          answerOptions: [
            { answerText: "دورتموند", isCorrect: true },
            { answerText: "بایرن مونیخ", isCorrect: false },
            { answerText: "شالکه 04", isCorrect: false },
            { answerText: "وردربرمن", isCorrect: false },
          ],
        },
        {
          questionText:
            "بعد از رئال مادرید کدام تیم بیشترین قهرمانی را در جام باشگاههای جهان دارد؟",
          answerOptions: [
            { answerText: "بارسلونا", isCorrect: true },
            { answerText: "یوونتوس ", isCorrect: false },
            { answerText: "لیورپول", isCorrect: false },
            { answerText: "فلامینگو برزیل", isCorrect: false },
          ],
        },
      ],
      currentQuestion: 0,
      showScore: false,
      score: 0,
    };
  }

  clickHandler(e, isCorrect) {
    console.log(isCorrect);
    if (isCorrect) {
      this.setState((prevState) => {
        return {
          score: prevState.score + 1,
        };
      });
    }

    if (this.state.currentQuestion === 9) {
      this.setState({ showScore: true });
    } else {
      {
        setTimeout(() => {
          this.setState((prevState) => {
            return {
              currentQuestion: prevState.currentQuestion + 1,
            };
          });
        }, 500);
      }
    }
  }

  render() {
    return (
      <div className="app">
        {/* next div is for showing user score */}
        {this.state.showScore ? (
          <div className="score-section">
            امتیاز شما {this.state.score} از {this.state.questions.length}
          </div>
        ) : (
          <div>
            <div className="question-section">
              <div className="question-count">
                <span>آزمون {this.state.currentQuestion + 1}</span>از{" "}
                {this.state.questions.length}
              </div>
              <div className="question-text">
                {this.state.questions[this.state.currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {this.state.questions[
                this.state.currentQuestion
              ].answerOptions.map((answer) => (
                <button
                  className="button"
                  onClick={this.clickHandler.bind(
                    this,
                    Event,
                    answer.isCorrect
                  )}
                >
                  {answer.answerText}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
