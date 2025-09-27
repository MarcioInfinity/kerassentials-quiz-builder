import { QuizButton } from "./ui/quiz-button";
import { cn } from "@/lib/utils";

interface QuizStepProps {
  question: string;
  answers: string[];
  onAnswer: (answerIndex: number) => void;
  image?: string;
  className?: string;
}

export const QuizStep = ({ question, answers, onAnswer, image, className }: QuizStepProps) => {
  return (
    <div className={cn("animate-fade-in", className)}>
      {image && (
        <div className="flex justify-center mb-8">
          <img
            src={image}
            alt="Kerassentials® Product"
            className="max-w-full h-auto max-h-64 object-contain"
          />
        </div>
      )}
      
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-4 sm:mb-8 leading-relaxed">
        {question}
      </h2>
      
      <div className="space-y-3 sm:space-y-4">
        {answers.map((answer, index) => (
          <QuizButton
            key={index}
            onClick={() => onAnswer(index)}
            className="w-full text-left py-4 px-4 sm:py-6 sm:px-6 h-auto min-h-[60px] text-base md:text-lg leading-relaxed hover:scale-[1.02] transition-transform duration-200 whitespace-normal"
          >
            {answer}
          </QuizButton>
        ))}
      </div>
    </div>
  );
};