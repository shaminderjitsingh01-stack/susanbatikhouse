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

// Human-like response patterns
const getResponse = (input: string): { content: string; options?: string[] } => {
  const lowerInput = input.toLowerCase().trim();

  // Exact matches for button options first
  if (lowerInput === "browse collections" || lowerInput === "shop now" || lowerInput === "view collections") {
    return {
      content: `We have quite a nice selection! Our main categories are batik (fabric, tops, sarongs, cheongsam), kebaya in standard and premium options, plus beaded shoes and kerosang brooches.\n\nAnything specific you're looking for?`,
      options: ["Batik items", "Kebaya", "Shoes", "Just browsing"]
    };
  }

  if (lowerInput === "check sizing" || lowerInput === "size guide") {
    return {
      content: `For kebaya and cheongsam, we carry XS to XXL. Shoes run from size 4 to 12.\n\nA quick tip - our traditional pieces are quite form-fitting, so if you're between sizes, better to go one size up. We can always alter it down for you!`,
      options: ["How to measure", "Custom sizing", "Come try in-store"]
    };
  }

  if (lowerInput === "alterations" || lowerInput === "ask about alterations") {
    return {
      content: `Yes we do alterations! Hemming, taking in, letting out, sleeve adjustments - all the usual.\n\nBasic hemming is free if you buy from us. Most jobs take about 3-5 days, complex ones around 1-2 weeks. Rush is available if you need it urgently!`,
      options: ["Book alteration", "Pricing", "Visit store"]
    };
  }

  if (lowerInput === "store location" || lowerInput === "store location & hours" || lowerInput === "store info") {
    return {
      content: `We're at Blk 32 New Market Road, #02-1104/1106 - that's the People's Park area in Chinatown. Easy to find!\n\nOpen Monday to Saturday 10am-6pm. Sundays by appointment.\n\nCall us at 6533 6330 or WhatsApp 9791 5323!`,
      options: ["Get directions", "Call now", "WhatsApp us"]
    };
  }

  if (lowerInput === "contact us" || lowerInput === "other questions") {
    return {
      content: `Best ways to reach us:\n\nCall: 6533 6330\nWhatsApp: 9791 5323\n\nOr just drop by the shop! We're always happy to help.`,
      options: ["Call now", "WhatsApp", "Get directions"]
    };
  }

  if (lowerInput === "continue browsing" || lowerInput === "just browsing") {
    return {
      content: `No problem! Take your time. Let me know if you have any questions about our products, sizing, or anything else.`,
      options: ["Browse Collections", "Check Sizing", "Store Location"]
    };
  }

  // Greetings
  if (lowerInput.match(/^(hi|hello|hey|good morning|good afternoon|good evening|hai)/)) {
    return {
      content: `Hi there! Welcome to Susan Batik House.\n\nWe've been here since 1989, specializing in batik, kebaya and Peranakan pieces. What can I help you with today?`,
      options: ["Browse Collections", "Check Sizing", "Alterations", "Store Location"]
    };
  }

  // Collections
  if (lowerInput.match(/collection|product|what do you sell|what.*have|browse|shop|item|catalog/)) {
    return {
      content: `We carry batik fabric (handstamp and hand-drawn), batik clothing for ladies and men, kebaya tops in standard and premium quality, beaded shoes, and kerosang brooches.\n\nWhich one interests you?`,
      options: ["Batik items", "Kebaya", "Shoes", "Pricing"]
    };
  }

  // Location & Hours
  if (lowerInput.match(/where|location|address|visit|hour|open|when|direction|find you|how to get/)) {
    return {
      content: `We're at Blk 32 New Market Road, #02-1104/1106 in Chinatown. Open Mon-Sat 10am to 6pm, Sundays by appointment.\n\nJust take the MRT to Chinatown station - we're a short walk from there!`,
      options: ["Get directions", "Call store", "WhatsApp us"]
    };
  }

  // Alterations
  if (lowerInput.match(/alter|tailor|hem|adjust|fitting|take in|let out|shorten|lengthen/)) {
    return {
      content: `Yes we do alterations! Our tailors handle hemming, taking in, letting out, sleeves - the works.\n\nUsually takes 3-5 days. Free basic hemming when you buy from us. Want to book something?`,
      options: ["Book alteration", "Pricing", "Visit store"]
    };
  }

  // Sizing
  if (lowerInput.match(/\bsize\b|sizing|measurement|what size|how to measure|measure myself/)) {
    return {
      content: `Kebaya and cheongsam run XS to XXL. For kebaya, bust ranges 76-110cm, waist 60-94cm. Shoes are size 4 to 12.\n\nThese pieces are quite fitted, so go one size up if you're in between. We can adjust!`,
      options: ["How to measure", "Custom sizing", "Visit store"]
    };
  }

  // Shipping
  if (lowerInput.match(/ship|delivery|deliver|how long|shipping cost|international/)) {
    return {
      content: `Local delivery is $5, takes about 3-5 days. Express is $12 for next day. Free delivery if you spend over $150!\n\nWe ship internationally too - Malaysia, Brunei, the rest of SEA, Australia and NZ. Or you can just pick up from our store if that's easier!`,
      options: ["International rates", "Self-collection", "Continue browsing"]
    };
  }

  // Payment
  if (lowerInput.match(/pay|payment|credit card|paynow|grab|installment/)) {
    return {
      content: `We take Visa, Mastercard, Amex, PayNow, GrabPay - basically everything. NETS works in-store too.\n\nFor bigger purchases over $500, we have Atome and Grab PayLater if you prefer instalments.`,
      options: ["Shop now", "Other questions"]
    };
  }

  // Returns
  if (lowerInput.match(/return|exchange|refund|policy/)) {
    return {
      content: `Just so you know - all sales are final, no returns or exchanges. That's why we always recommend trying things on in-store if you're unsure about sizing!\n\nIf something arrives damaged though, send us photos within 48 hours and we'll sort it out.`,
      options: ["Size guide", "Visit store", "Contact us"]
    };
  }

  // Batik info
  if (lowerInput.match(/what is batik|batik meaning|about batik|batik history|type of batik|batik item/)) {
    return {
      content: `Batik is a traditional fabric dyeing technique using wax - originated from Indonesia and very popular here in Southeast Asia.\n\nWe carry three types: hand-drawn (tulis) which is the most intricate, handstamp (cap) which uses copper stamps, and printed batik which is more affordable.\n\nFor care - hand wash cold water, don't wring it, dry in the shade, iron on low. Easy!`,
      options: ["Browse batik", "Pricing", "Other questions"]
    };
  }

  // Kebaya info
  if (lowerInput.match(/kebaya|peranakan|nyonya/)) {
    return {
      content: `Kebaya is the traditional blouse worn by Peranakan women - beautiful intricate embroidery work!\n\nWe have standard and premium options, plus kids sizes too. Perfect for weddings, cultural events, or just looking elegant. Sizes run XS to XXL, and we can do custom if needed.`,
      options: ["View kebaya", "Sizing", "Custom orders"]
    };
  }

  // Shoes
  if (lowerInput.match(/shoe|beaded|kasut/)) {
    return {
      content: `Our beaded shoes are handcrafted with traditional Peranakan designs. We have standard and premium options - premium has more intricate beading work.\n\nSizes run from 4 to 12. They're gorgeous with kebaya but honestly work with any outfit!`,
      options: ["View shoes", "Pricing", "Visit store"]
    };
  }

  // Price
  if (lowerInput.match(/price|cost|how much|expensive|cheap|budget|pricing/)) {
    return {
      content: `Rough pricing: Kebaya starts from about $200, batik tops from $80, fabric from $30 per meter, beaded shoes from $150, kerosang from $50.\n\nPremium handmade pieces cost more of course - you're paying for the craftsmanship. Want me to show you anything specific?`,
      options: ["Shop now", "Visit store", "WhatsApp for quote"]
    };
  }

  // Custom orders
  if (lowerInput.match(/custom|bespoke|made to measure|special order|custom size/)) {
    return {
      content: `Yes we do custom orders! Made-to-measure kebaya, cheongsam, special occasion outfits - our tailors can handle it all.\n\nUsually takes about 2-3 weeks. Just let us know what you need and we'll work something out!`,
      options: ["Get a quote", "WhatsApp us", "Visit store"]
    };
  }

  // Thanks
  if (lowerInput.match(/thank|thanks|thx|cheers/)) {
    return {
      content: `You're welcome! Anything else I can help with?`,
      options: ["Browse Collections", "Store Location", "Contact us"]
    };
  }

  // Contact / Help
  if (lowerInput.match(/contact|help|speak|human|call|talk to someone/)) {
    return {
      content: `Sure! You can call us at 6533 6330 or WhatsApp 9791 5323. Or just come by the shop - Blk 32 New Market Road.\n\nWhat works best for you?`,
      options: ["Call now", "WhatsApp", "Get directions"]
    };
  }

  // Default fallback
  return {
    content: `Hmm, I'm not sure I understood that. I can help you with our collections, sizing, alterations, shipping, or store info. What would you like to know?`,
    options: ["Browse Collections", "Check Sizing", "Contact Us", "Store Location"]
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
          content: "Hi! Welcome to Susan Batik House. 🌸\n\nLooking for something special? We've got batik, kebaya, Peranakan pieces - been doing this since 1989!\n\nHow can I help?",
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
        content: "Hi! Welcome to Susan Batik House. 🌸\n\nLooking for something special? We've got batik, kebaya, Peranakan pieces - been doing this since 1989!\n\nHow can I help?",
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
          content: `Hi ${text}! Nice to meet you. What's your phone number? We'll get back to you soon.`
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
          content: "Got it! And what are you looking for?",
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
        `Hi Susan Batik House!\n\nI'm ${finalInfo.name}\nPhone: ${finalInfo.phone}\n\nI'm interested in: ${finalInfo.interest}\n\nPlease assist me. Thank you!`
      );
      const whatsappUrl = `https://wa.me/6597915323?text=${whatsappMessage}`;

      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: "bot",
          content: `Thanks ${finalInfo.name}! I've noted down your interest in ${finalInfo.interest}. Someone from our team will contact you.\n\nOr if you prefer, you can WhatsApp us directly:`,
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
    if (text.toLowerCase().match(/quote|book|appointment|custom order|talk to|speak to|contact me|call me|get a quote/)) {
      setCollectingInfo("name");
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: "bot",
          content: "Sure thing! Can I get your name?"
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
      {/* Chat Button - Mobile Responsive */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#EC4899] to-pink-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"></span>
        </button>
      )}

      {/* Chat Window - Mobile Responsive */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[380px] sm:max-w-[calc(100vw-48px)] h-[100dvh] sm:h-[600px] sm:max-h-[calc(100vh-100px)] bg-white sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border-0 sm:border border-stone-200">
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
