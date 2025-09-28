const AffiliateDisclosure = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[800px] mx-auto px-4 py-8">
        {/* Back to Home Link */}
        <div className="mb-8">
          <a 
            href="https://healthy-nails-quiz-coupon.netlify.app/" 
            className="text-[#007BFF] hover:underline font-body"
          >
            &lt; Back to Home
          </a>
        </div>

        {/* Main Content */}
        <div className="text-[#333333] font-body">
          <h1 className="text-[32px] font-bold mb-6">Affiliate Disclosure</h1>
          
          <p className="text-[16px] mb-6">
            <strong>Effective Date: September 27, 2025</strong>
          </p>

          <p className="text-[16px] mb-6">
            Transparency is important to us at healthy-nails-quiz-coupon.netlify.app. Our goal is to provide you with valuable information and resources. To help fund the maintenance of this site, we engage in affiliate marketing.
          </p>

          <h2 className="text-[22px] font-bold mb-4">What is Affiliate Marketing?</h2>
          
          <p className="text-[16px] mb-6">
            Affiliate marketing is a standard advertising model where a company (in this case, the creators of products like Kerassentials®) pays a commission to others (like the operators of this website) for generating sales or leads from their referrals.
          </p>

          <h2 className="text-[22px] font-bold mb-4">How It Works</h2>
          
          <p className="text-[16px] mb-4">
            Throughout this website, you will encounter links that redirect to third-party product pages. These are "affiliate links." This means that if you click on one of these links and proceed to make a purchase, we may receive a small commission.
          </p>

          <p className="text-[16px] mb-6">
            <strong>This commission comes at absolutely no additional cost to you.</strong> The price you pay for the product is the same whether you use our affiliate link or go directly to the vendor's website.
          </p>

          <h2 className="text-[22px] font-bold mb-4">Our Commitment</h2>
          
          <p className="text-[16px] mb-6">
            We only recommend products that we have researched and genuinely believe could provide value to our audience. Our relationship with you is our top priority, and we strive to be transparent about how our website operates. The commissions we earn help us to continue providing helpful content and maintaining this website.
          </p>

          <p className="text-[16px] mb-6">
            Thank you for your support.
          </p>

          <h2 className="text-[22px] font-bold mb-4">Contact Us</h2>
          
          <p className="text-[16px] mb-6">
            If you have any questions regarding this disclosure, please feel free to contact us at: 
            <a href="mailto:marcio.ceoinfinity@gmail.com" className="text-[#007BFF] hover:underline ml-1">
              marcio.ceoinfinity@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffiliateDisclosure;