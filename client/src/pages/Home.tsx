import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Calendar, ArrowRight } from "lucide-react";

const SCHEDULE_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Free+Consultation+with+M+%26+P+Financial+Services&details=Free+bookkeeping+review+booked+via+mpfinancialservice.com.+Add+Google+Meet+video+conferencing+to+this+event.&add=bookkeeping%40mpfinancialservices.com";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FAFAF8" }}>
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "#FAFAF8", borderColor: "#E8E6E1" }}>
        <div className="container flex items-center justify-between py-4">
          {/* Logo - Actual Logo Image */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/mp-logo.png"
              alt="M & P Financial Services"
              className="h-14 w-auto"
            />
            <span className="font-serif font-bold text-lg sm:text-xl" style={{ color: "#001F3F" }}>
              M&amp;P Financial Services LLC.
            </span>
          </div>
          
          {/* CTA Button */}
          <Button 
            asChild
            className="font-semibold border-2"
            style={{ backgroundColor: "#C9A961", color: "#FFFFFF", borderColor: "#C9A961" }}
            size="sm"
          >
            <a href="#contact">Get Started</a>
          </Button>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative py-24 sm:py-40">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-8 text-center">
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-tight tracking-tight" style={{ color: "#001F3F" }}>
              Your Books. Clear. Accurate. Simple.
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light" style={{ color: "#6B7280" }}>
              Two accounting experts managing your finances so you can focus on growing your business.
            </p>
            
            {/* CTA Button */}
            <div className="pt-6">
              <Button 
                asChild
                size="lg"
                className="font-semibold text-base px-10 py-7 rounded-lg border-2 shadow-sm hover:shadow-md transition-all"
                style={{ backgroundColor: "#C9A961", color: "#FFFFFF", borderColor: "#C9A961" }}
              >
                <a href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer">
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #C9A961, transparent)" }}></div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-24 sm:py-32">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="space-y-16">
            {/* Section Title */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold" style={{ color: "#001F3F" }}>
                What We Do
              </h2>
              <div className="flex justify-center">
                <div className="w-16 h-1 rounded-full" style={{ backgroundColor: "#C9A961" }}></div>
              </div>
            </div>
            
            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <Card className="p-8 border-2" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E6E1" }}>
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "rgba(201, 169, 97, 0.1)" }}>
                  <div className="w-6 h-6 rounded-full border-2" style={{ borderColor: "#C9A961" }}></div>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4" style={{ color: "#001F3F" }}>
                  Monthly Bookkeeping & Bank Reconciliation
                </h3>
                <p className="leading-relaxed font-light" style={{ color: "#6B7280" }}>
                  Accurate, up-to-date books every month across every account.
                </p>
              </Card>
              
              {/* Service 2 */}
              <Card className="p-8 border-2" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E6E1" }}>
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "rgba(201, 169, 97, 0.1)" }}>
                  <div className="w-6 h-6 rounded-full border-2" style={{ borderColor: "#C9A961" }}></div>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4" style={{ color: "#001F3F" }}>
                  QuickBooks Setup, Cleanup & Migration
                </h3>
                <p className="leading-relaxed font-light" style={{ color: "#6B7280" }}>
                  Online or Desktop, built right from day one, or fixed if it isn't.
                </p>
              </Card>
              
              {/* Service 3 */}
              <Card className="p-8 border-2" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E6E1" }}>
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "rgba(201, 169, 97, 0.1)" }}>
                  <div className="w-6 h-6 rounded-full border-2" style={{ borderColor: "#C9A961" }}></div>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4" style={{ color: "#001F3F" }}>
                  Financial Statement Preparation
                </h3>
                <p className="leading-relaxed font-light" style={{ color: "#6B7280" }}>
                  Clear monthly P&amp;L and balance sheet reporting you can act on.
                </p>
              </Card>

              {/* Service 4 */}
              <Card className="p-8 border-2" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E6E1" }}>
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "rgba(201, 169, 97, 0.1)" }}>
                  <div className="w-6 h-6 rounded-full border-2" style={{ borderColor: "#C9A961" }}></div>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4" style={{ color: "#001F3F" }}>
                  Accounts Payable & Receivable
                </h3>
                <p className="leading-relaxed font-light" style={{ color: "#6B7280" }}>
                  Bills paid on time, invoices tracked, cash flow kept visible.
                </p>
              </Card>

              {/* Service 5 */}
              <Card className="p-8 border-2" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E6E1" }}>
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "rgba(201, 169, 97, 0.1)" }}>
                  <div className="w-6 h-6 rounded-full border-2" style={{ borderColor: "#C9A961" }}></div>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4" style={{ color: "#001F3F" }}>
                  Payroll Coordination
                </h3>
                <p className="leading-relaxed font-light" style={{ color: "#6B7280" }}>
                  Support alongside ADP, Gusto, or QuickBooks Payroll.
                </p>
              </Card>

              {/* Service 6 */}
              <Card className="p-8 border-2" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E6E1" }}>
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "rgba(201, 169, 97, 0.1)" }}>
                  <div className="w-6 h-6 rounded-full border-2" style={{ borderColor: "#C9A961" }}></div>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4" style={{ color: "#001F3F" }}>
                  Tax-Ready, Year-Round
                </h3>
                <p className="leading-relaxed font-light" style={{ color: "#6B7280" }}>
                  Books kept clean and current so tax season holds no surprises.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section className="py-24 sm:py-32" style={{ backgroundColor: "#F5F3F0" }}>
        <div className="container max-w-3xl mx-auto px-4">
          <div className="space-y-16">
            {/* Section Title */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold" style={{ color: "#001F3F" }}>
                Pricing
              </h2>
              <div className="flex justify-center">
                <div className="w-16 h-1 rounded-full" style={{ backgroundColor: "#C9A961" }}></div>
              </div>
              <p className="text-lg font-light" style={{ color: "#6B7280" }}>
                Transparent pricing based on your needs
              </p>
            </div>

            {/* Pricing Card */}
            <div className="rounded-lg border-2 p-10 sm:p-12 text-center space-y-4" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E6E1" }}>
              <p className="text-2xl sm:text-3xl font-light" style={{ color: "#1F2937" }}>
                Our services start as low as{" "}
                <span className="font-serif font-bold" style={{ color: "#C9A961" }}>
                  $149 per month
                </span>
                .
              </p>
              <p className="leading-relaxed font-light" style={{ color: "#6B7280" }}>
                Pricing varies based on the services you request and the complexity of your needs. Contact us for a personalized quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MEET THE FOUNDERS SECTION ===== */}
      <section className="py-24 sm:py-32">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="space-y-16">
            {/* Section Title */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold" style={{ color: "#001F3F" }}>
                Meet the Team
              </h2>
              <div className="flex justify-center">
                <div className="w-16 h-1 rounded-full" style={{ backgroundColor: "#C9A961" }}></div>
              </div>
              <p className="text-lg font-light" style={{ color: "#6B7280" }}>
                Two accounting graduates dedicated to your success
              </p>
            </div>
            
            {/* Founders Grid */}
            <div className="grid sm:grid-cols-2 gap-10 items-center">
              {/* Founder 1 Photo */}
              <div className="flex flex-col items-center">
                <img 
                  src="/images/founder-nathan.png" 
                  alt="Founder 1" 
                  className="w-full aspect-square rounded-lg border-2 object-cover"
                  style={{ borderColor: "#E8E6E1" }}
                />
                <p className="mt-4 text-lg font-serif font-bold" style={{ color: "#001F3F" }}>
                  Nathan L. Palfreyman
                </p>
              </div>
              
              {/* Founder 2 Photo */}
              <div className="flex flex-col items-center">
                <img 
                  src="/images/founder-zane.png" 
                  alt="Founder 2" 
                  className="w-full aspect-square rounded-lg border-2 object-cover"
                  style={{ borderColor: "#E8E6E1" }}
                />
                <p className="mt-4 text-lg font-serif font-bold" style={{ color: "#001F3F" }}>
                  Zane J. Miller
                </p>
              </div>
            </div>
            
            {/* Team Bio */}
            <div className="rounded-lg border-2 p-10 sm:p-12 space-y-6" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E6E1" }}>
              <p className="text-lg leading-relaxed font-light" style={{ color: "#4B5563" }}>
                We started M & P because we saw small business owners struggling with bookkeeping. Spreadsheets everywhere. Records that don't match. Stress at tax time. We knew there had to be a better way.
              </p>
              <p className="text-lg leading-relaxed font-light" style={{ color: "#4B5563" }}>
                With our accounting degrees and years of experience, we bring precision and clarity to your finances. You get two sets of eyes reviewing everything, so nothing gets missed. We treat your business like it's ours.
              </p>
              <p className="text-lg leading-relaxed font-light" style={{ color: "#4B5563" }}>
                Our goal is simple: give you accurate books, clear insights, and peace of mind so you can focus on what you do best—running your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA SECTION ===== */}
      <section id="contact" className="py-24 sm:py-32" style={{ backgroundColor: "#F5F3F0" }}>
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-16">
            {/* Section Title */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold" style={{ color: "#001F3F" }}>
                Ready to Get Started?
              </h2>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed font-light" style={{ color: "#6B7280" }}>
                Let's talk about your bookkeeping and how we can help. Schedule a free consultation with us.
              </p>
            </div>
            
            {/* Contact Options Grid */}
            <div className="grid sm:grid-cols-3 gap-6">
              {/* Phone */}
              <Card className="p-8 border-2 text-center" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E6E1" }}>
                <Phone className="w-8 h-8 mx-auto mb-4" style={{ color: "#C9A961" }} />
                <h3 className="font-serif font-bold mb-3" style={{ color: "#001F3F" }}>Call</h3>
                <a href="tel:+12085146971" className="font-semibold text-sm" style={{ color: "#C9A961" }}>
                  (208) 514-6971
                </a>
              </Card>
              
              {/* Email */}
              <Card className="p-8 border-2 text-center" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E6E1" }}>
                <Mail className="w-8 h-8 mx-auto mb-4" style={{ color: "#C9A961" }} />
                <h3 className="font-serif font-bold mb-3" style={{ color: "#001F3F" }}>Email</h3>
                <a href="mailto:bookkeeping@mpfinancialservices.com" className="font-semibold text-sm break-all block text-center" style={{ color: "#C9A961" }}>
                  bookkeeping@mpfinancialservices.com
                </a>
              </Card>
              
              {/* Schedule */}
              <Card className="p-8 border-2 text-center" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E6E1" }}>
                <Calendar className="w-8 h-8 mx-auto mb-4" style={{ color: "#C9A961" }} />
                <h3 className="font-serif font-bold mb-3" style={{ color: "#001F3F" }}>Schedule</h3>
                <a href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-sm" style={{ color: "#C9A961" }}>
                  Book a Call
                </a>
              </Card>
            </div>
            
            {/* Final CTA Button */}
            <div className="flex justify-center pt-4">
              <Button 
                asChild
                size="lg"
                className="font-semibold text-base px-10 py-7 rounded-lg border-2 shadow-sm hover:shadow-md transition-all"
                style={{ backgroundColor: "#C9A961", color: "#FFFFFF", borderColor: "#C9A961" }}
              >
                <a href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer">
                  Schedule Your Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-10 border-t text-center text-sm font-light" style={{ backgroundColor: "#FAFAF8", borderColor: "#E8E6E1", color: "#9CA3AF" }}>
        <div className="container">
          <p>&copy; 2026 M & P Financial Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
