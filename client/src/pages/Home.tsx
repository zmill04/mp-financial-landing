import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Calendar, ArrowRight } from "lucide-react";

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
          </div>
          
          {/* CTA Button */}
          <Button 
            className="font-semibold border-2"
            style={{ backgroundColor: "#C9A961", color: "#FFFFFF", borderColor: "#C9A961" }}
            size="sm"
          >
            Get Started
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
                size="lg"
                className="font-semibold text-base px-10 py-7 rounded-lg border-2 shadow-sm hover:shadow-md transition-all"
                style={{ backgroundColor: "#C9A961", color: "#FFFFFF", borderColor: "#C9A961" }}
              >
                Schedule a Free Review
                <ArrowRight className="ml-2 w-4 h-4" />
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
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Service 1 */}
              <Card className="p-8 border-2" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E6E1" }}>
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "rgba(201, 169, 97, 0.1)" }}>
                  <div className="w-6 h-6 rounded-full border-2" style={{ borderColor: "#C9A961" }}></div>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4" style={{ color: "#001F3F" }}>
                  Monthly Bookkeeping
                </h3>
                <p className="leading-relaxed font-light" style={{ color: "#6B7280" }}>
                  We keep your records organized and up to date every month so nothing falls through the cracks.
                </p>
              </Card>
              
              {/* Service 2 */}
              <Card className="p-8 border-2" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E6E1" }}>
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "rgba(201, 169, 97, 0.1)" }}>
                  <div className="w-6 h-6 rounded-full border-2" style={{ borderColor: "#C9A961" }}></div>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4" style={{ color: "#001F3F" }}>
                  Catch-Up & Cleanup
                </h3>
                <p className="leading-relaxed font-light" style={{ color: "#6B7280" }}>
                  Got a backlog? We'll sort through past records and get everything current and accurate.
                </p>
              </Card>
              
              {/* Service 3 */}
              <Card className="p-8 border-2" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E6E1" }}>
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "rgba(201, 169, 97, 0.1)" }}>
                  <div className="w-6 h-6 rounded-full border-2" style={{ borderColor: "#C9A961" }}></div>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4" style={{ color: "#001F3F" }}>
                  Financial Reports
                </h3>
                <p className="leading-relaxed font-light" style={{ color: "#6B7280" }}>
                  Clear reports that show you exactly how your business is doing and where your money goes.
                </p>
              </Card>
              
              {/* Service 4 */}
              <Card className="p-8 border-2" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E6E1" }}>
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "rgba(201, 169, 97, 0.1)" }}>
                  <div className="w-6 h-6 rounded-full border-2" style={{ borderColor: "#C9A961" }}></div>
                </div>
                <h3 className="text-xl font-serif font-bold mb-4" style={{ color: "#001F3F" }}>
                  Tax Prep Support
                </h3>
                <p className="leading-relaxed font-light" style={{ color: "#6B7280" }}>
                  We prepare everything your CPA needs so tax season is smooth and stress-free.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MEET THE FOUNDERS SECTION ===== */}
      <section className="py-24 sm:py-32" style={{ backgroundColor: "#F5F3F0" }}>
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
      <section className="py-24 sm:py-32">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-16">
            {/* Section Title */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold" style={{ color: "#001F3F" }}>
                Ready to Get Started?
              </h2>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed font-light" style={{ color: "#6B7280" }}>
                Let's talk about your bookkeeping and how we can help. Schedule a free review with us.
              </p>
            </div>
            
            {/* Contact Options Grid */}
            <div className="grid sm:grid-cols-3 gap-6">
              {/* Phone */}
              <Card className="p-8 border-2 text-center" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E6E1" }}>
                <Phone className="w-8 h-8 mx-auto mb-4" style={{ color: "#C9A961" }} />
                <h3 className="font-serif font-bold mb-3" style={{ color: "#001F3F" }}>Call</h3>
                <a href="tel:+1234567890" className="font-semibold text-sm" style={{ color: "#C9A961" }}>
                  [Your Phone]
                </a>
              </Card>
              
              {/* Email */}
              <Card className="p-8 border-2 text-center" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E6E1" }}>
                <Mail className="w-8 h-8 mx-auto mb-4" style={{ color: "#C9A961" }} />
                <h3 className="font-serif font-bold mb-3" style={{ color: "#001F3F" }}>Email</h3>
                <a href="mailto:hello@mpfinancial.com" className="font-semibold text-sm" style={{ color: "#C9A961" }}>
                  [Your Email]
                </a>
              </Card>
              
              {/* Schedule */}
              <Card className="p-8 border-2 text-center" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E6E1" }}>
                <Calendar className="w-8 h-8 mx-auto mb-4" style={{ color: "#C9A961" }} />
                <h3 className="font-serif font-bold mb-3" style={{ color: "#001F3F" }}>Schedule</h3>
                <a href="#" className="font-semibold text-sm" style={{ color: "#C9A961" }}>
                  Book a Call
                </a>
              </Card>
            </div>
            
            {/* Final CTA Button */}
            <div className="flex justify-center pt-4">
              <Button 
                size="lg"
                className="font-semibold text-base px-10 py-7 rounded-lg border-2 shadow-sm hover:shadow-md transition-all"
                style={{ backgroundColor: "#C9A961", color: "#FFFFFF", borderColor: "#C9A961" }}
              >
                Schedule Your Free Review
                <ArrowRight className="ml-2 w-4 h-4" />
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
