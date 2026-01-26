"use client";

import { useState, useEffect, useRef } from "react";

interface Message {
  role: "bot" | "user";
  content: string;
  options?: string[];
}

// Shop Knowledge Base
const SHOP_INFO = {
  name: "Susan Batik House",
  established: "1989",
  years: "35+",
  location: "Blk 32 New Market Road, #02-1104/1106, Singapore 050032",
  phone: "6533 6330",
  whatsapp: "+65 9791 5323",
  hours: "Monday - Saturday: 10am - 6pm, Sunday: By Appointment Only",

  collections: [
    "Batik Fabric (Handstamp & Hand-drawn)",
    "Ladies Batik Top",
    "Mens Batik Top",
    "Ladies Batik Sarong",
    "Batik Cheongsam",
    "Ladies Batik Pants",
    "Kebaya (Standard & Premium Peranakan Top)",
    "Kids Peranakan Top",
    "Beaded Shoes (Standard & Premium)",
    "Kerosang Brooches"
  ],

  services: [
    "Expert Alterations (hemming, taking in, letting out, sleeve adjustments)",
    "Personal Styling Consultation",
    "Custom Orders & Made-to-Measure",
    "Professional Fitting"
  ],

  sizing: {
    kebaya: "XS to XXL - Bust 76-110cm, Waist 60-94cm",
    cheongsam: "XS to XXL - Bust 78-112cm, Waist 62-96cm",
    shoes: "Size 4 to 12",
    tips: [
      "Traditional kebaya and cheongsam are designed to be form-fitting",
      "If between sizes, choose the larger size as alterations can be made",
      "Custom sizing available for most garments (2-3 weeks)"
    ]
  },

  shipping: {
    local: {
      standard: "$5 (3-5 working days)",
      express: "$12 (next working day for orders before 2pm)",
      free: "Orders above $150"
    },
    international: "Available to Malaysia, Brunei, Southeast Asia, Australia, NZ",
    selfCollection: "Available at our store during opening hours"
  },

  policies: {
    returns: "No returns, no exchange. All sales are final.",
    alterations: "Basic hemming complimentary for full-price items. Other alterations charged separately.",
    alterationTime: "Standard: 3-5 days, Complex: 7-14 days, Rush service available",
    payment: "Visa, MasterCard, Amex, PayNow, GrabPay, NETS (in-store)"
  },

  batikInfo: {
    what: "Batik is a traditional fabric dyeing technique using wax-resist method, originating from Indonesia and popular in Southeast Asia.",
    types: [
      "Hand-drawn (Tulis) - Most intricate, made with canting tool",
      "Handstamp (Cap) - Uses copper stamps for patterns",
      "Printed - Machine-made, more affordable"
    ],
    care: "Hand wash in cold water, avoid wringing, dry in shade, iron on low heat"
  }
};

// Response patterns
const getResponse = (input: string): { content: string; options?: string[] } => {
  const lowerInput = input.toLowerCase();

  // Greetings
  if (lowerInput.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
    return {
      content: `Hello! Welcome to Susan Batik House! 🌸\n\nWe've been preserving traditional batik and Peranakan heritage since 1989. How can I help you today?`,
      options: ["Browse Collections", "Check Sizing", "Ask about Alterations", "Store Location & Hours"]
    };
  }

  // Collections
  if (lowerInput.match(/collection|product|what do you sell|what you have|browse|shop/)) {
    return {
      content: `Our Collections include:\n\n🎨 **Batik**\n• Batik Fabric (Handstamp & Hand-drawn)\n• Ladies & Mens Batik Tops\n• Batik Sarong & Pants\n• Batik Cheongsam\n\n👘 **Kebaya**\n• Standard Peranakan Top\n• Premium Peranakan Top\n• Kids Peranakan Top\n\n👠 **Accessories**\n• Beaded Shoes\n• Kerosang Brooches\n\nWould you like details on any specific collection?`,
      options: ["Batik items", "Kebaya items", "Shoes", "Pricing"]
    };
  }

  // Sizing
  if (lowerInput.match(/size|sizing|measurement|fit|what size|how to measure/)) {
    return {
      content: `**Sizing Guide:**\n\n👗 **Kebaya:** XS to XXL\n• Bust: 76-110cm\n• Waist: 60-94cm\n\n👘 **Cheongsam:** XS to XXL\n• Bust: 78-112cm\n• Waist: 62-96cm\n\n👠 **Shoes:** Size 4 to 12\n\n**Tips:**\n• Traditional garments are form-fitting\n• If between sizes, go larger (alterations can be made)\n• Custom sizing available (2-3 weeks)\n\nNeed help finding your size?`,
      options: ["How to measure", "Custom sizing", "Visit store for fitting"]
    };
  }

  // Alterations
  if (lowerInput.match(/alter|alteration|tailor|hem|adjust|fitting|take in|let out/)) {
    return {
      content: `**Alteration Services:**\n\n✂️ We offer:\n• Hemming\n• Taking in / Letting out\n• Sleeve adjustments\n• Kebaya & Cheongsam fitting\n• Custom modifications\n\n⏱️ **Turnaround:**\n• Standard: 3-5 business days\n• Complex: 7-14 days\n• Rush service available\n\n💰 Basic hemming is FREE for full-price items!\n\nWould you like to book an alteration?`,
      options: ["Book alteration", "Alteration pricing", "Visit store"]
    };
  }

  // Location & Hours
  if (lowerInput.match(/where|location|address|store|visit|hour|open|when|direction/)) {
    return {
      content: `**Visit Us:**\n\n📍 Blk 32 New Market Road\n#02-1104/1106\nSingapore 050032\n(People's Park area, Chinatown)\n\n🕐 **Hours:**\nMon - Sat: 10am - 6pm\nSunday: By Appointment Only\n\n📞 Call: 6533 6330\n📱 WhatsApp: 9791 5323\n\nWe're easily accessible by MRT - Chinatown station!`,
      options: ["Get directions", "Call store", "WhatsApp us"]
    };
  }

  // Shipping
  if (lowerInput.match(/ship|delivery|deliver|how long|shipping cost|international/)) {
    return {
      content: `**Shipping Info:**\n\n🇸🇬 **Singapore:**\n• Standard: $5 (3-5 days)\n• Express: $12 (next day)\n• FREE for orders above $150!\n\n🌏 **International:**\n• Malaysia/Brunei: 5-7 days\n• Southeast Asia: 7-10 days\n• Australia/NZ: 10-14 days\n\n🏪 **Self-Collection:** Available at our store\n\nTracking provided for all orders!`,
      options: ["International rates", "Self-collection", "Track order"]
    };
  }

  // Payment
  if (lowerInput.match(/pay|payment|credit card|paynow|grab|installment/)) {
    return {
      content: `**Payment Methods:**\n\n💳 We accept:\n• Visa, MasterCard, Amex\n• PayNow\n• GrabPay\n• NETS (in-store)\n• Bank Transfer\n\n📦 **Installments:**\nFor orders above $500:\n• Atome\n• Grab PayLater\n\nAll transactions are secure!`,
      options: ["Shop now", "Other questions"]
    };
  }

  // Returns
  if (lowerInput.match(/return|exchange|refund|policy/)) {
    return {
      content: `**Return Policy:**\n\n⚠️ All sales are final - No returns or exchanges.\n\nPlease ensure:\n• Correct size selected\n• Review order carefully before purchase\n• Visit our store for fitting if unsure\n\nIf you receive a damaged item, contact us within 48 hours with photos for resolution.`,
      options: ["Size guide", "Visit store", "Contact us"]
    };
  }

  // Batik info
  if (lowerInput.match(/what is batik|batik meaning|about batik|batik history|type of batik/)) {
    return {
      content: `**About Batik:**\n\nBatik is a traditional wax-resist dyeing technique from Indonesia, popular throughout Southeast Asia.\n\n🎨 **Types we carry:**\n• **Hand-drawn (Tulis)** - Most intricate, made with canting tool\n• **Handstamp (Cap)** - Uses copper stamps\n• **Printed** - Machine-made, affordable\n\n🧺 **Care Tips:**\n• Hand wash in cold water\n• Don't wring - gently squeeze\n• Dry in shade\n• Iron on low heat\n\nEach piece is unique!`,
      options: ["Browse batik", "Batik pricing", "Other questions"]
    };
  }

  // Kebaya info
  if (lowerInput.match(/kebaya|peranakan|nyonya/)) {
    return {
      content: `**Kebaya Collection:**\n\n👘 The kebaya is a traditional blouse worn by Peranakan/Nyonya women, known for its intricate embroidery.\n\n**We offer:**\n• Standard Peranakan Top - Classic designs\n• Premium Peranakan Top - Exquisite detailing\n• Kids Peranakan Top - For little ones\n\n**Sizes:** XS to XXL\n**Customization:** Available for special occasions\n\nPerfect for weddings, festivals & celebrations!`,
      options: ["View kebaya", "Kebaya sizing", "Custom orders"]
    };
  }

  // Price
  if (lowerInput.match(/price|cost|how much|expensive|cheap|budget/)) {
    return {
      content: `**Pricing:**\n\nOur prices vary by product type:\n\n👘 **Kebaya:** From $200 - $800+\n👗 **Batik Tops:** From $80 - $300\n🧵 **Batik Fabric:** From $30/meter\n👠 **Beaded Shoes:** From $150 - $500\n💎 **Kerosang:** From $50 - $200\n\nPremium handmade pieces are priced higher for their craftsmanship.\n\nWould you like to see specific items?`,
      options: ["Shop now", "Visit store", "WhatsApp for quote"]
    };
  }

  // Custom orders
  if (lowerInput.match(/custom|bespoke|made to measure|special order|custom size/)) {
    return {
      content: `**Custom Orders:**\n\n✨ We create bespoke pieces!\n\n• Custom sizing for any garment\n• Made-to-measure kebaya & cheongsam\n• Special occasion outfits\n• Mother/In-law wedding dresses\n\n⏱️ **Timeline:** 2-3 weeks\n\nShare your requirements and our tailors will create something special for you!`,
      options: ["Get a quote", "WhatsApp us", "Visit store"]
    };
  }

  // Contact / Help
  if (lowerInput.match(/contact|help|speak|human|call|whatsapp|talk to someone/)) {
    return {
      content: `**Get in Touch:**\n\n📞 Call: 6533 6330\n📱 WhatsApp: 9791 5323\n📍 Visit: Blk 32 New Market Road, #02-1104/1106\n\nOur team is happy to assist with:\n• Product inquiries\n• Sizing advice\n• Custom orders\n• Alteration bookings\n\nHow would you like to connect?`,
      options: ["Call now", "WhatsApp", "Get directions"]
    };
  }

  // Default fallback
  return {
    content: `I'd be happy to help! Here's what I can assist with:\n\n• Browse our collections\n• Sizing information\n• Alterations & custom orders\n• Shipping & delivery\n• Store location & hours\n\nOr share what you're looking for and I'll guide you!`,
    options: ["Browse Collections", "Size Guide", "Contact Us", "Store Info"]
  };
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [customerInfo, setCustomerInfo] = useState({ name: "", phone: "", interest: "" });
  const [collectingInfo, setCollectingInfo] = useState<"name" | "phone" | "interest" | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-open after 7 seconds if not previously closed
  useEffect(() => {
    const wasClosed = localStorage.getItem("sbh_chat_closed");
    if (!wasClosed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setMessages([{
          role: "bot",
          content: "Hello! Welcome to Susan Batik House! 🌸\n\nI'm here to help you discover our beautiful batik, kebaya & Peranakan heritage wear.\n\nHow can I assist you today?",
          options: ["Browse Collections", "Check Sizing", "Alterations", "Store Location"]
        }]);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("sbh_chat_closed", "true");
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setMessages([{
        role: "bot",
        content: "Hello! Welcome to Susan Batik House! 🌸\n\nI'm here to help you discover our beautiful batik, kebaya & Peranakan heritage wear.\n\nHow can I assist you today?",
        options: ["Browse Collections", "Check Sizing", "Alterations", "Store Location"]
      }]);
    }
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: "user", content: text }]);
    setInputValue("");

    // Handle info collection flow
    if (collectingInfo === "name") {
      setCustomerInfo(prev => ({ ...prev, name: text }));
      setCollectingInfo("phone");
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: "bot",
          content: `Nice to meet you, ${text}! 😊\n\nWhat's your phone number so our team can reach you?`
        }]);
      }, 500);
      return;
    }

    if (collectingInfo === "phone") {
      setCustomerInfo(prev => ({ ...prev, phone: text }));
      setCollectingInfo("interest");
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: "bot",
          content: "Great! What are you looking for today?",
          options: ["Kebaya for wedding", "Batik clothing", "Beaded shoes", "Alterations", "Just browsing"]
        }]);
      }, 500);
      return;
    }

    if (collectingInfo === "interest") {
      const finalInfo = { ...customerInfo, interest: text };
      setCustomerInfo(finalInfo);
      setCollectingInfo(null);

      // Generate WhatsApp message
      const whatsappMessage = encodeURIComponent(
        `Hi Susan Batik House! 🌸\n\nI'm ${finalInfo.name}\nPhone: ${finalInfo.phone}\n\nI'm interested in: ${finalInfo.interest}\n\nPlease assist me. Thank you!`
      );
      const whatsappUrl = `https://wa.me/6597915323?text=${whatsappMessage}`;

      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: "bot",
          content: `Thank you, ${finalInfo.name}! 🎉\n\nI've noted your interest in: ${finalInfo.interest}\n\nOur team will reach out to you shortly!\n\nOr tap below to chat with us directly on WhatsApp:`,
          options: ["Chat on WhatsApp", "Continue browsing"]
        }]);
      }, 500);

      // Store for WhatsApp link
      localStorage.setItem("sbh_whatsapp_url", whatsappUrl);
      return;
    }

    // Check for WhatsApp action
    if (text.toLowerCase().includes("whatsapp") || text.toLowerCase().includes("chat on whatsapp")) {
      const storedUrl = localStorage.getItem("sbh_whatsapp_url");
      if (storedUrl) {
        window.open(storedUrl, "_blank");
      } else if (customerInfo.name) {
        const whatsappMessage = encodeURIComponent(
          `Hi Susan Batik House! 🌸\n\nI'm ${customerInfo.name}\nPhone: ${customerInfo.phone}\n\nI'm interested in: ${customerInfo.interest}\n\nPlease assist me. Thank you!`
        );
        window.open(`https://wa.me/6597915323?text=${whatsappMessage}`, "_blank");
      } else {
        window.open("https://wa.me/6597915323?text=Hi%20Susan%20Batik%20House!%20I%20have%20a%20question.", "_blank");
      }
      return;
    }

    // Check for call action
    if (text.toLowerCase().includes("call now") || text.toLowerCase().includes("call store")) {
      window.open("tel:+6565336330", "_self");
      return;
    }

    // Check for directions
    if (text.toLowerCase().includes("direction") || text.toLowerCase().includes("get direction")) {
      window.open("https://maps.google.com/?q=32+New+Market+Road+Singapore+050032", "_blank");
      return;
    }

    // Check if user wants to connect (trigger info collection)
    if (text.toLowerCase().match(/quote|book|appointment|custom order|talk to|speak to|contact me|call me/)) {
      setCollectingInfo("name");
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: "bot",
          content: "I'd love to connect you with our team! 💕\n\nMay I have your name please?"
        }]);
      }, 500);
      return;
    }

    // Normal response
    setTimeout(() => {
      const response = getResponse(text);
      setMessages(prev => [...prev, {
        role: "bot",
        content: response.content,
        options: response.options
      }]);
    }, 500);
  };

  const handleOptionClick = (option: string) => {
    sendMessage(option);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-[#EC4899] to-pink-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-100px)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-stone-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#EC4899] to-pink-500 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">🌸</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Susan Batik House</h3>
                <p className="text-pink-100 text-xs">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] ${message.role === "user" ? "order-2" : ""}`}>
                  {message.role === "bot" && (
                    <div className="w-8 h-8 bg-[#EC4899] rounded-full flex items-center justify-center mb-2">
                      <span className="text-sm">🌸</span>
                    </div>
                  )}
                  <div
                    className={`px-4 py-3 rounded-2xl ${
                      message.role === "user"
                        ? "bg-[#EC4899] text-white rounded-br-md"
                        : "bg-white text-stone-700 rounded-bl-md shadow-sm border border-stone-100"
                    }`}
                  >
                    <p className="whitespace-pre-line text-sm leading-relaxed">{message.content}</p>
                  </div>

                  {/* Quick Reply Options */}
                  {message.options && message.role === "bot" && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {message.options.map((option, i) => (
                        <button
                          key={i}
                          onClick={() => handleOptionClick(option)}
                          className="px-3 py-1.5 text-xs font-medium bg-white border border-[#EC4899] text-[#EC4899] rounded-full hover:bg-[#EC4899] hover:text-white transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-stone-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(inputValue);
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-stone-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#EC4899]/50"
              />
              <button
                type="submit"
                className="w-12 h-12 bg-[#EC4899] rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
