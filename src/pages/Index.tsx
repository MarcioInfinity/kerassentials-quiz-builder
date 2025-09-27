import { useState } from "react";
import { ProgressBar } from "@/components/ProgressBar";
import { QuizStep } from "@/components/QuizStep";
import { QualificationPage } from "@/components/QualificationPage";
import kerassentialsBottles from "@/assets/kerassentials-bottles.png";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const quizData = [
    {
      question: "Are you currently struggling with the frustrating and embarrassing problem of discolored or brittle nails?",
      answers: [
        "Yes, and I'm actively looking for a real solution.",
        "Yes, it's been a persistent issue."
      ],
      hasImage: true
    },
    {
      question: "Have you tried various creams, home remedies, or other solutions, only to see the problem return or not go away completely?",
      answers: [
        "Yes, nothing has given me the lasting results I want.",
        "I'm just starting my search, but I want something that truly works."
      ]
    },
    {
      question: "When it comes to your health, do you believe a doctor-formulated blend of specific natural oils is a smarter approach than using harsh chemicals?",
      answers: [
        "Absolutely, I prefer a natural and safe approach.",
        "Yes, I'm open to a powerful natural solution."
      ]
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    if (currentStep < quizData.length) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setIsCompleted(true);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2">
            Answer 3 Quick Questions to Unlock an Exclusive Discount
          </h1>
          <p className="text-base md:text-lg font-body text-foreground">
            Your answers will help you discover the path to clear, healthy nails!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {!isCompleted ? (
            <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-lg">
              <ProgressBar currentStep={currentStep} totalSteps={quizData.length} />
              
              <QuizStep
                question={quizData[currentStep - 1].question}
                answers={quizData[currentStep - 1].answers}
                onAnswer={handleAnswer}
                image={quizData[currentStep - 1].hasImage ? kerassentialsBottles : undefined}
              />
            </div>
          ) : (
            <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-lg">
              <QualificationPage />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
