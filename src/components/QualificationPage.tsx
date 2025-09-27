import { QuizButton } from "./ui/quiz-button";
import { cn } from "@/lib/utils";

interface QualificationPageProps {
  className?: string;
}

export const QualificationPage = ({ className }: QualificationPageProps) => {
  const handleCTAClick = () => {
    window.open('https://9f72fjijqhulgk78hqqg4bxo6j.hop.clickbank.net/?&traffic_source=google&campaign=inicio1', '_blank');
  };

  return (
    <div className={cn("animate-fade-in text-center", className)}>
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          Congratulations! Your Discount Coupon is Unlocked.
        </h1>
        
        <p className="text-lg md:text-xl font-body text-foreground mb-6 leading-relaxed">
          Based on your answers, you are an ideal candidate for this unique doctor-formulated formula.
        </p>
        
        <p className="text-lg font-body font-bold text-foreground mb-4">
          Your official exclusive discount has been automatically activated for the Kerassentials® formula.
        </p>
        
        <p className="text-base font-body italic text-muted-foreground mb-8">
          Click the button below to watch the special video presentation and claim your discounted supply before it's gone.
        </p>
      </div>
      
      <QuizButton
        onClick={handleCTAClick}
        size="lg"
        className="text-xl font-bold px-12 py-6 h-auto min-h-[70px] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Claim Your Discount Coupon for Kerassentials®
      </QuizButton>
    </div>
  );
};