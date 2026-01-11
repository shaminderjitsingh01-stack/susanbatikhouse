import Link from "next/link";

export const metadata = {
  title: "Alteration Services | Susan Batik House",
  description: "Professional alteration and tailoring services at Susan Batik House. Get the perfect fit for your kebaya, cheongsam, and traditional wear.",
};

export default function AlterationPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-pink-400 tracking-[0.3em] uppercase text-sm mb-4">Expert Tailoring</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Alteration Services
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            The perfect fit makes all the difference. Our experienced tailors ensure
            every garment fits you beautifully.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Our Services
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              From minor adjustments to complete custom tailoring
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-stone-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E8A0BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">Length Adjustments</h3>
              <p className="text-stone-600 text-sm mb-4">
                Shortening or lengthening of dresses, sleeves, and pants for the perfect proportion.
              </p>
              <p className="text-[#E8A0BF] font-semibold">From $15</p>
            </div>

            <div className="bg-stone-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E8A0BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">Taking In / Letting Out</h3>
              <p className="text-stone-600 text-sm mb-4">
                Adjusting the fit around the bust, waist, and hips for a comfortable, flattering silhouette.
              </p>
              <p className="text-[#E8A0BF] font-semibold">From $20</p>
            </div>

            <div className="bg-stone-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E8A0BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">Kebaya Fitting</h3>
              <p className="text-stone-600 text-sm mb-4">
                Specialized fitting for kebaya tops to achieve the traditional snug fit.
              </p>
              <p className="text-[#E8A0BF] font-semibold">From $30</p>
            </div>

            <div className="bg-stone-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E8A0BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">Cheongsam Alterations</h3>
              <p className="text-stone-600 text-sm mb-4">
                Expert adjustments for the perfect cheongsam fit, including collar and side slits.
              </p>
              <p className="text-[#E8A0BF] font-semibold">From $35</p>
            </div>

            <div className="bg-stone-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E8A0BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">Custom Modifications</h3>
              <p className="text-stone-600 text-sm mb-4">
                Adding or removing embellishments, changing necklines, and other custom requests.
              </p>
              <p className="text-[#E8A0BF] font-semibold">Price on consultation</p>
            </div>

            <div className="bg-stone-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E8A0BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">Made-to-Measure</h3>
              <p className="text-stone-600 text-sm mb-4">
                Complete custom garments tailored to your exact measurements and preferences.
              </p>
              <p className="text-[#E8A0BF] font-semibold">Price on consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              How It Works
            </h2>
            <p className="text-stone-600">
              Simple steps to your perfect fit
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-[#E8A0BF] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">Visit Our Store</h3>
                <p className="text-stone-600">
                  Bring your garment to our store at New Market Road. Our team will assess
                  the alterations needed and discuss your preferences.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-[#E8A0BF] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">Fitting Session</h3>
                <p className="text-stone-600">
                  Try on the garment while our experienced tailor takes precise measurements
                  and marks the adjustments needed.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-[#E8A0BF] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">Expert Tailoring</h3>
                <p className="text-stone-600">
                  Our skilled tailors carefully work on your garment, ensuring every stitch
                  meets our quality standards.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-[#E8A0BF] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">Final Fitting</h3>
                <p className="text-stone-600">
                  Return to try on your altered garment. We&apos;ll make any final adjustments
                  to ensure you&apos;re completely satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Turnaround */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-stone-900 mb-8 text-center">
            Turnaround Time
          </h2>
          <div className="bg-stone-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6">
                <p className="text-3xl font-bold text-[#E8A0BF] mb-2">3-5 Days</p>
                <p className="text-stone-600">Standard Alterations</p>
                <p className="text-stone-500 text-sm mt-2">Minor adjustments and hemming</p>
              </div>
              <div className="text-center p-6">
                <p className="text-3xl font-bold text-[#E8A0BF] mb-2">7-14 Days</p>
                <p className="text-stone-600">Complex Alterations</p>
                <p className="text-stone-500 text-sm mt-2">Major modifications and custom work</p>
              </div>
            </div>
            <p className="text-center text-stone-500 text-sm mt-6">
              Express service available for urgent requests (additional charges apply)
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready for the Perfect Fit?
          </h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            Visit our store for a consultation. No appointment needed for alteration assessments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+6565336330"
              className="px-8 py-4 bg-[#E8A0BF] hover:bg-[#E8A0BF] text-white font-medium rounded-lg transition-colors"
            >
              Call 6533 6330
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white text-white hover:bg-white hover:text-stone-900 font-medium rounded-lg transition-colors"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
