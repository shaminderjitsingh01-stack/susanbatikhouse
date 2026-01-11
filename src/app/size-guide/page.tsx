import Link from "next/link";

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Size Guide
          </h1>
          <p className="text-stone-300 text-lg">
            Find your perfect fit with our comprehensive sizing charts.
          </p>
        </div>
      </section>

      {/* Size Guide Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* How to Measure */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">How to Measure</h2>
            <div className="bg-pink-50 rounded-lg p-6 mb-8">
              <p className="text-stone-600 mb-4">
                For the most accurate fit, take your measurements while wearing light, form-fitting clothing.
                Use a soft measuring tape and keep it snug but not tight.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Bust</h4>
                  <p className="text-sm text-stone-600">Measure around the fullest part of your bust, keeping the tape parallel to the ground.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Waist</h4>
                  <p className="text-sm text-stone-600">Measure around your natural waistline, typically the narrowest part of your torso.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Hips</h4>
                  <p className="text-sm text-stone-600">Measure around the fullest part of your hips, approximately 8 inches below your waist.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Length</h4>
                  <p className="text-sm text-stone-600">Measure from the highest point of your shoulder down to where you want the garment to end.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kebaya Size Chart */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Kebaya Sizing</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-stone-200">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="border border-stone-200 px-4 py-3 text-left font-semibold">Size</th>
                    <th className="border border-stone-200 px-4 py-3 text-left font-semibold">Bust (cm)</th>
                    <th className="border border-stone-200 px-4 py-3 text-left font-semibold">Waist (cm)</th>
                    <th className="border border-stone-200 px-4 py-3 text-left font-semibold">Hips (cm)</th>
                    <th className="border border-stone-200 px-4 py-3 text-left font-semibold">Length (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: "XS", bust: "76-80", waist: "60-64", hips: "84-88", length: "52" },
                    { size: "S", bust: "82-86", waist: "66-70", hips: "90-94", length: "54" },
                    { size: "M", bust: "88-92", waist: "72-76", hips: "96-100", length: "56" },
                    { size: "L", bust: "94-98", waist: "78-82", hips: "102-106", length: "58" },
                    { size: "XL", bust: "100-104", waist: "84-88", hips: "108-112", length: "60" },
                    { size: "XXL", bust: "106-110", waist: "90-94", hips: "114-118", length: "62" },
                  ].map((row) => (
                    <tr key={row.size} className="hover:bg-stone-50">
                      <td className="border border-stone-200 px-4 py-3 font-medium text-[#EC4899]">{row.size}</td>
                      <td className="border border-stone-200 px-4 py-3">{row.bust}</td>
                      <td className="border border-stone-200 px-4 py-3">{row.waist}</td>
                      <td className="border border-stone-200 px-4 py-3">{row.hips}</td>
                      <td className="border border-stone-200 px-4 py-3">{row.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cheongsam Size Chart */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Cheongsam Sizing</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-stone-200">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="border border-stone-200 px-4 py-3 text-left font-semibold">Size</th>
                    <th className="border border-stone-200 px-4 py-3 text-left font-semibold">Bust (cm)</th>
                    <th className="border border-stone-200 px-4 py-3 text-left font-semibold">Waist (cm)</th>
                    <th className="border border-stone-200 px-4 py-3 text-left font-semibold">Hips (cm)</th>
                    <th className="border border-stone-200 px-4 py-3 text-left font-semibold">Length (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: "XS", bust: "78-82", waist: "62-66", hips: "86-90", length: "100" },
                    { size: "S", bust: "84-88", waist: "68-72", hips: "92-96", length: "102" },
                    { size: "M", bust: "90-94", waist: "74-78", hips: "98-102", length: "104" },
                    { size: "L", bust: "96-100", waist: "80-84", hips: "104-108", length: "106" },
                    { size: "XL", bust: "102-106", waist: "86-90", hips: "110-114", length: "108" },
                    { size: "XXL", bust: "108-112", waist: "92-96", hips: "116-120", length: "110" },
                  ].map((row) => (
                    <tr key={row.size} className="hover:bg-stone-50">
                      <td className="border border-stone-200 px-4 py-3 font-medium text-[#EC4899]">{row.size}</td>
                      <td className="border border-stone-200 px-4 py-3">{row.bust}</td>
                      <td className="border border-stone-200 px-4 py-3">{row.waist}</td>
                      <td className="border border-stone-200 px-4 py-3">{row.hips}</td>
                      <td className="border border-stone-200 px-4 py-3">{row.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sarong Size Chart */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Sarong / Batik Wrap</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-stone-200">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="border border-stone-200 px-4 py-3 text-left font-semibold">Type</th>
                    <th className="border border-stone-200 px-4 py-3 text-left font-semibold">Width (cm)</th>
                    <th className="border border-stone-200 px-4 py-3 text-left font-semibold">Length (cm)</th>
                    <th className="border border-stone-200 px-4 py-3 text-left font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Standard", width: "100", length: "200", best: "Daily wear, wrapping" },
                    { type: "Long", width: "100", length: "250", best: "Formal occasions" },
                    { type: "Wide", width: "115", length: "200", best: "Taller figures" },
                  ].map((row) => (
                    <tr key={row.type} className="hover:bg-stone-50">
                      <td className="border border-stone-200 px-4 py-3 font-medium text-[#EC4899]">{row.type}</td>
                      <td className="border border-stone-200 px-4 py-3">{row.width}</td>
                      <td className="border border-stone-200 px-4 py-3">{row.length}</td>
                      <td className="border border-stone-200 px-4 py-3">{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-stone-100 rounded-lg p-8">
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">Sizing Tips</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#EC4899] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-stone-600">Traditional kebaya and cheongsam are designed to be form-fitting. If you prefer a looser fit, size up.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#EC4899] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-stone-600">If you&apos;re between sizes, we recommend choosing the larger size as alterations can be made.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#EC4899] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-stone-600">For the best fit, visit us in-store for a professional fitting consultation.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#EC4899] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-stone-600">Custom sizing is available for most garments. Contact us for details.</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-stone-600 mb-4">Need help finding your size?</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#EC4899] text-white font-medium rounded-lg hover:bg-[#b30c78] transition-colors"
            >
              Contact Us for Assistance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
