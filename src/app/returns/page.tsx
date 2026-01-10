import Link from "next/link";

export const metadata = {
  title: "Returns & Exchange | Susan Batik House",
  description: "Learn about our return and exchange policy at Susan Batik House.",
};

export default function ReturnsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
          Returns & Exchange
        </h1>
        <p className="text-stone-600">
          Your satisfaction is our priority
        </p>
      </div>

      {/* Content */}
      <div className="space-y-12">
        <section>
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">Return Policy</h2>
          <div className="bg-pink-50 border border-amber-200 rounded-lg p-6 mb-6">
            <p className="text-stone-700">
              We accept returns and exchanges within <strong>7 days</strong> of purchase.
              Items must be unworn, unwashed, and in original condition with all tags attached.
            </p>
          </div>
          <p className="text-stone-600">
            We understand that sometimes a purchase may not be quite right. That&apos;s why we offer
            a straightforward return and exchange policy to ensure your complete satisfaction.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">Eligible Items</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-lg p-6">
              <h3 className="font-semibold text-stone-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Eligible for Return
              </h3>
              <ul className="space-y-2 text-stone-600 text-sm">
                <li>- Unworn and unwashed items</li>
                <li>- Items with original tags attached</li>
                <li>- Items in original packaging</li>
                <li>- Items returned within 7 days</li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-lg p-6">
              <h3 className="font-semibold text-stone-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Not Eligible
              </h3>
              <ul className="space-y-2 text-stone-600 text-sm">
                <li>- Worn or washed items</li>
                <li>- Items without original tags</li>
                <li>- Altered or customized items</li>
                <li>- Sale or clearance items</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">How to Return</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#dc0e94] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">Contact Us</h3>
                <p className="text-stone-600 text-sm">
                  Call us at 6533 6330 or email us to initiate a return request within 7 days of purchase.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#dc0e94] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">Pack Your Item</h3>
                <p className="text-stone-600 text-sm">
                  Carefully pack the item in its original packaging with all tags attached.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#dc0e94] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">Return to Store</h3>
                <p className="text-stone-600 text-sm">
                  Bring the item to our store at New Market Road for inspection and processing.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#dc0e94] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">Receive Refund or Exchange</h3>
                <p className="text-stone-600 text-sm">
                  Once approved, choose between a full refund or exchange for another item.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">Exchange Policy</h2>
          <p className="text-stone-600 mb-4">
            Need a different size or color? We&apos;re happy to help with exchanges:
          </p>
          <ul className="space-y-2 text-stone-600">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#dc0e94] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Exchanges are subject to availability</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#dc0e94] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Price differences will be refunded or charged accordingly</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#dc0e94] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>We recommend trying our alteration services for fit adjustments</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">Refund Information</h2>
          <div className="bg-stone-50 rounded-lg p-6">
            <ul className="space-y-3 text-stone-600">
              <li><strong>Original Payment Method:</strong> Refunds will be processed to your original payment method within 5-7 working days.</li>
              <li><strong>Store Credit:</strong> Alternatively, receive store credit for future purchases (valid for 12 months).</li>
              <li><strong>Cash Purchases:</strong> Cash refunds are available for in-store returns.</li>
            </ul>
          </div>
        </section>

        <section className="bg-pink-50 rounded-lg p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">Need Help?</h2>
          <p className="text-stone-600 mb-6">
            Our team is here to assist you with any questions about returns or exchanges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+6565336330"
              className="px-6 py-3 bg-[#dc0e94] text-white font-medium rounded-lg hover:bg-[#b30c78] transition-colors"
            >
              Call 6533 6330
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 border border-[#dc0e94] text-[#dc0e94] font-medium rounded-lg hover:bg-pink-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
