import Link from "next/link";

export default function CareInstructionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Care Instructions
          </h1>
          <p className="text-stone-300 text-lg">
            Preserve the beauty of your traditional garments with proper care.
          </p>
        </div>
      </section>

      {/* Care Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* General Care */}
          <div className="mb-12">
            <div className="bg-pink-50 border-l-4 border-[#EC4899] p-6 rounded-r-lg mb-8">
              <h3 className="font-semibold text-stone-900 mb-2">Important Note</h3>
              <p className="text-stone-600">
                Traditional batik, kebaya, and silk garments require special care to maintain their beauty and longevity.
                When in doubt, always opt for professional dry cleaning.
              </p>
            </div>
          </div>

          {/* Batik Care */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#EC4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Batik Care</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-stone-50 rounded-lg p-6">
                <h4 className="font-semibold text-stone-900 mb-3">Washing</h4>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Hand wash in cold water with mild detergent (no bleach)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Wash separately or with similar colors to prevent color transfer
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Do not soak for extended periods - 15 minutes maximum
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Gently squeeze out water, do not wring or twist
                  </li>
                </ul>
              </div>

              <div className="bg-stone-50 rounded-lg p-6">
                <h4 className="font-semibold text-stone-900 mb-3">Drying & Storage</h4>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Dry flat in shade - avoid direct sunlight which can fade colors
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Iron on low heat on the reverse side while slightly damp
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Store folded in a cool, dry place with moth repellent
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Avoid hanging as this may stretch the fabric over time
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kebaya Care */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#EC4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Kebaya Care</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-stone-50 rounded-lg p-6">
                <h4 className="font-semibold text-stone-900 mb-3">Embroidered & Lace Kebaya</h4>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    <strong>Recommended: Professional dry cleaning</strong> for best results
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    If hand washing, use a mesh laundry bag to protect embroidery
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Never machine wash - the agitation can damage delicate details
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Iron on low heat, placing a cloth between iron and embroidery
                  </li>
                </ul>
              </div>

              <div className="bg-stone-50 rounded-lg p-6">
                <h4 className="font-semibold text-stone-900 mb-3">Storage Tips</h4>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Store on padded hangers to maintain shape
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Use a breathable garment bag - avoid plastic covers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Keep away from direct sunlight and moisture
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Add cedar balls or lavender sachets to deter moths
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Silk & Cheongsam Care */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#EC4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Silk & Cheongsam Care</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-stone-50 rounded-lg p-6">
                <h4 className="font-semibold text-stone-900 mb-3">Silk Care</h4>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    <strong>Dry clean recommended</strong> for silk cheongsam
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    If hand washing, use cold water and silk-specific detergent
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Never use bleach or harsh chemicals on silk
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Roll in a clean towel to remove excess water - do not wring
                  </li>
                </ul>
              </div>

              <div className="bg-stone-50 rounded-lg p-6">
                <h4 className="font-semibold text-stone-900 mb-3">Ironing Silk</h4>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Use lowest heat setting or silk/delicate setting
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Iron on reverse side while fabric is slightly damp
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Use a pressing cloth between iron and silk
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EC4899]">•</span>
                    Never spray water directly on silk - it may leave marks
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Reference */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Quick Reference</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-stone-200">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="border border-stone-200 px-4 py-3 text-left font-semibold">Fabric</th>
                    <th className="border border-stone-200 px-4 py-3 text-left font-semibold">Wash</th>
                    <th className="border border-stone-200 px-4 py-3 text-left font-semibold">Dry</th>
                    <th className="border border-stone-200 px-4 py-3 text-left font-semibold">Iron</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { fabric: "Cotton Batik", wash: "Hand wash cold", dry: "Flat dry, shade", iron: "Medium, reverse" },
                    { fabric: "Silk Batik", wash: "Dry clean", dry: "Flat dry, shade", iron: "Low, with cloth" },
                    { fabric: "Lace Kebaya", wash: "Dry clean", dry: "Lay flat", iron: "Low, with cloth" },
                    { fabric: "Silk Cheongsam", wash: "Dry clean", dry: "Hang, padded hanger", iron: "Low, with cloth" },
                    { fabric: "Cotton Sarong", wash: "Hand wash cold", dry: "Line dry, shade", iron: "Medium" },
                  ].map((row) => (
                    <tr key={row.fabric} className="hover:bg-stone-50">
                      <td className="border border-stone-200 px-4 py-3 font-medium">{row.fabric}</td>
                      <td className="border border-stone-200 px-4 py-3">{row.wash}</td>
                      <td className="border border-stone-200 px-4 py-3">{row.dry}</td>
                      <td className="border border-stone-200 px-4 py-3">{row.iron}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Professional Services */}
          <div className="bg-pink-50 rounded-lg p-8">
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">
              Need Professional Care?
            </h3>
            <p className="text-stone-600 mb-4">
              For valuable or vintage pieces, we recommend professional cleaning and restoration.
              We can recommend trusted dry cleaners who specialize in traditional garments.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-[#EC4899] text-white font-medium rounded-lg hover:bg-[#b30c78] transition-colors"
            >
              Contact Us for Recommendations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
