import Link from "next/link";

export const metadata = {
  title: "Shipping Information | Susan Batik House",
  description: "Learn about our shipping options, delivery times, and policies for Susan Batik House orders.",
};

export default function ShippingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
          Shipping Information
        </h1>
        <p className="text-stone-600">
          Everything you need to know about delivery
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-stone max-w-none">
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">Local Delivery (Singapore)</h2>
          <div className="bg-stone-50 rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-stone-200 pb-3">
              <span className="font-medium">Standard Delivery</span>
              <span className="text-[#E8A0BF] font-semibold">$5.00</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-200 pb-3">
              <span className="font-medium">Express Delivery (Next Day)</span>
              <span className="text-[#E8A0BF] font-semibold">$12.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Free Shipping</span>
              <span className="text-[#E8A0BF] font-semibold">Orders above $150</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">Delivery Times</h2>
          <ul className="space-y-3 text-stone-600">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#E8A0BF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Standard Delivery:</strong> 3-5 working days</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#E8A0BF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Express Delivery:</strong> Next working day (for orders placed before 2pm)</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#E8A0BF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Self-Collection:</strong> Available at our Chinatown store during opening hours</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">International Shipping</h2>
          <p className="text-stone-600 mb-4">
            We ship internationally to selected countries. International shipping rates are calculated
            at checkout based on your location and order weight.
          </p>
          <div className="bg-stone-50 rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-stone-200 pb-3">
              <span className="font-medium">Malaysia & Brunei</span>
              <span className="text-stone-600">5-7 working days</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-200 pb-3">
              <span className="font-medium">Southeast Asia</span>
              <span className="text-stone-600">7-10 working days</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-200 pb-3">
              <span className="font-medium">Australia & New Zealand</span>
              <span className="text-stone-600">10-14 working days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Rest of World</span>
              <span className="text-stone-600">14-21 working days</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">Order Tracking</h2>
          <p className="text-stone-600">
            Once your order is shipped, you will receive an email with tracking information.
            You can use the tracking number to monitor your delivery status through our
            courier partner&apos;s website.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">Self-Collection</h2>
          <p className="text-stone-600 mb-4">
            Prefer to pick up your order? Choose self-collection at checkout and collect from our store:
          </p>
          <div className="bg-pink-50 rounded-lg p-6">
            <p className="font-medium text-stone-900">Susan Batik House</p>
            <p className="text-stone-600">
              Blk 32 New Market Road, #02-1104/1106<br />
              Singapore 050032
            </p>
            <p className="text-stone-600 mt-2">
              <strong>Hours:</strong> Mon-Sat, 10am - 6pm
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">Questions?</h2>
          <p className="text-stone-600">
            If you have any questions about shipping, please don&apos;t hesitate to{" "}
            <Link href="/contact" className="text-[#E8A0BF] hover:underline">
              contact us
            </Link>{" "}
            or call us at{" "}
            <a href="tel:+6565336330" className="text-[#E8A0BF] hover:underline">
              6533 6330
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
