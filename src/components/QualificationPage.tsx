import { QuizButton } from "./ui/quiz-button";
import { cn } from "@/lib/utils";
interface QualificationPageProps {
  className?: string;
}
export const QualificationPage = ({
  className
}: QualificationPageProps) => {
  const handleCTAClick = () => {
    window.open('https://9f72fjijqhulgk78hqqg4bxo6j.hop.clickbank.net/?&traffic_source=google&campaign=inicio1', '_blank');
  };
  return <div className={cn("animate-fade-in text-center", className)}>
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-3 sm:mb-4">Congratulations! You're qualified!</h1>
        
        <p className="text-lg md:text-xl font-body text-foreground mb-4 sm:mb-6 leading-relaxed">
          Based on your answers, you are an ideal candidate for this unique doctor-formulated formula.
        </p>
        
        <p className="text-lg font-body font-bold text-foreground mb-3 sm:mb-4">Your official exclusive discount has been automatically activated using the button link below for the Kerassentials™ formula.</p>
        
        {/* Trust Signals */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-6 sm:mb-8 px-4">
          <div className="flex items-center text-sm text-[#333333] font-body">
            <span className="mr-2">✅</span>
            <span>Doctor-Formulated</span>
          </div>
          <div className="flex items-center text-sm text-[#333333] font-body">
            <span className="mr-2">✅</span>
            <span>100% Natural Ingredients</span>
          </div>
          <div className="flex items-center text-sm text-[#333333] font-body">
            <span className="mr-2">✅</span>
            <span>Made in USA</span>
          </div>
          
        </div>

        <p className="text-base font-body italic text-muted-foreground mb-6 sm:mb-8">
          Click the button below and secure your discount coupon before stocks run out.
        </p>
      </div>
      
      <QuizButton onClick={handleCTAClick} size="lg" className="w-[90%] mt-5 text-lg sm:text-xl font-bold py-4 px-6 h-auto min-h-[70px] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-normal sm:px-[32px] sm:py-[8px] mx-0 my-0">Claim Your Discount Coupon for Kerassentials™</QuizButton>
    </div>;
};