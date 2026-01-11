"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    category: "Orders & Payment",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, MasterCard, American Express), PayNow, GrabPay, and bank transfers. Payment in-store can also be made via NETS."
      },
      {
        q: "Can I reserve items for in-store pickup?",
        a: "Yes! Contact us via WhatsApp or phone to reserve items. We'll hold them for up to 3 days. Please note that reserved items must be paid for upon pickup."
      },
      {
        q: "Do you offer installment plans?",
        a: "For purchases above $500, we offer interest-free installment plans via Atome and Grab PayLater. Select your preferred option at checkout."
      },
    ]
  },
  {
    category: "Sizing & Fit",
    questions: [
      {
        q: "How do I know what size to order?",
        a: "Please refer to our Size Guide for detailed measurements. Traditional garments like kebaya and cheongsam are typically more fitted. If you're between sizes, we recommend sizing up as alterations can always be made."
      },
      {
        q: "Can you make custom sizes?",
        a: "Yes, we offer custom sizing for most of our garments. Custom orders typically take 2-3 weeks. Contact us with your measurements for a quote."
      },
      {
        q: "Do your sizes run small?",
        a: "Traditional Asian garments tend to have a more fitted silhouette. We recommend checking our Size Guide and comparing to garments you currently own. When in doubt, visit us in-store for a fitting."
      },
    ]
  },
  {
    category: "Alterations",
    questions: [
      {
        q: "Do you offer alteration services?",
        a: "Yes! Our experienced tailors provide professional alterations for all garments, whether purchased from us or elsewhere. Services include hemming, taking in, letting out, and sleeve adjustments."
      },
      {
        q: "How long do alterations take?",
        a: "Standard alterations take 3-5 business days. Complex alterations or during busy periods (festive seasons) may take 7-14 days. Rush services are available for an additional fee."
      },
      {
        q: "Are alterations included with purchases?",
        a: "Basic hemming is complimentary for full-price items purchased from us. Other alterations are charged separately based on the complexity of the work required."
      },
    ]
  },
  {
    category: "Shipping & Delivery",
    questions: [
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship to selected countries in Asia Pacific. International shipping rates and delivery times vary by destination. Contact us for a quote."
      },
      {
        q: "How long does delivery take in Singapore?",
        a: "Standard delivery within Singapore takes 2-4 business days. Express delivery (next business day) is available for orders placed before 12pm."
      },
      {
        q: "Can I track my order?",
        a: "Yes, you'll receive a tracking number via email once your order is dispatched. You can track your delivery through the carrier's website."
      },
    ]
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        q: "What is your return policy?",
        a: "We accept returns within 14 days of purchase for items in original condition with tags attached. Sale items and altered items cannot be returned."
      },
      {
        q: "Can I exchange for a different size?",
        a: "Yes, exchanges for different sizes are accepted within 14 days, subject to availability. Please contact us first to confirm stock."
      },
      {
        q: "What if my item is damaged?",
        a: "If you receive a damaged item, please contact us within 48 hours with photos. We'll arrange for a replacement or full refund."
      },
    ]
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-stone-300 text-lg">
            Find answers to common questions about orders, sizing, alterations, and more.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6 pb-2 border-b border-stone-200">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const itemId = `${category.category}-${index}`;
                  const isOpen = openItems.includes(itemId);
                  return (
                    <div key={index} className="border border-stone-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-stone-50 transition-colors"
                      >
                        <span className="font-medium text-stone-900">{faq.q}</span>
                        <svg
                          className={`w-5 h-5 text-[#EC4899] transition-transform ${isOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200">
                          <p className="text-stone-600 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="mt-12 bg-pink-50 rounded-lg p-8 text-center">
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-stone-600 mb-4">
              We&apos;re here to help! Reach out to us and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#EC4899] text-white font-medium rounded-lg hover:bg-[#b30c78] transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="https://wa.me/6597915323"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[#EC4899] text-[#EC4899] font-medium rounded-lg hover:bg-pink-100 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
