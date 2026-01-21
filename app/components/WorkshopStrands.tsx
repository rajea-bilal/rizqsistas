"use client";

import { useState } from "react";

interface Strand {
  id: number;
  title: string;
  microDescription: string;
  expandedContent: {
    intro: string;
    supportsLabel: string;
    supports: string[];
    closing: string;
  };
}

const strands: Strand[] = [
  {
    id: 1,
    title: "Financial Foundations",
    microDescription: "Build stability, clarity, and control before making bigger financial decisions.",
    expandedContent: {
      intro: "Financial Foundations focuses on the basics that many women are never given space to address properly.",
      supportsLabel: "This strand supports women to:",
      supports: [
        "understand their current financial position clearly",
        "reduce fragility and unnecessary risk",
        "develop sustainable habits around spending, saving, and obligations",
        "approach money decisions with calm rather than urgency",
      ],
      closing: "Sessions are practical, structured, and faith-aligned — designed to create stability before growth. This is often the first step for women preparing for investing, entrepreneurship, or major life transitions.",
    },
  },
  {
    id: 2,
    title: "Halal Investing 101",
    microDescription: "Understand halal investing principles and make informed, responsible choices.",
    expandedContent: {
      intro: "Halal Investing 101 introduces the foundations of investing through an Islamic ethical framework.",
      supportsLabel: "This strand helps women:",
      supports: [
        "understand what makes an investment halal or questionable",
        "learn core investing concepts without jargon or pressure",
        "assess risk, timelines, and personal readiness",
        "ask better questions before committing capital",
      ],
      closing: "The focus is not on quick wins, but on informed participation — supporting women to engage with investing responsibly, confidently, and in alignment with their values.",
    },
  },
  {
    id: 3,
    title: "Barakah-Led Entrepreneurship",
    microDescription: "Explore business and income generation through purpose, ethics, and sustainability.",
    expandedContent: {
      intro: "Entrepreneurship & Barakah is for women considering self-employment, side projects, or business growth — without sacrificing wellbeing or values.",
      supportsLabel: "This strand supports women to:",
      supports: [
        "reflect on intention, capacity, and timing",
        "understand the realities of entrepreneurship beyond social media narratives",
        "consider ethical income, responsibility, and sustainability",
        "build businesses that serve both livelihood and purpose",
      ],
      closing: "The emphasis is on long-term barakah, not hustle — helping women decide whether, when, and how entrepreneurship fits into their wider life.",
    },
  },
  {
    id: 4,
    title: "Community & Network",
    microDescription: "Connect with a trusted community of women navigating similar decisions.",
    expandedContent: {
      intro: "The Rizq Sistas Network is a curated, women-only space for connection, learning, and accountability.",
      supportsLabel: "Through circles, events, and shared experiences, members benefit from:",
      supports: [
        "peer support grounded in trust and discretion",
        "exposure to diverse paths, professions, and perspectives",
        "opportunities for collaboration and shared learning",
        "a sense of belonging without competition or comparison",
      ],
      closing: "The network exists to reduce isolation and support better decision-making — recognising that provision is often strengthened through community.",
    },
  },
];

export default function WorkshopStrands() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedStrand, setSelectedStrand] = useState<Strand | null>(null);

  return (
    <>
      <div className="text-right text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-8">
        Workshops + Meetups
      </div>

      {strands.map((strand) => (
        <div
          key={strand.id}
          className="border-t border-neutral-300 py-6 flex justify-between items-start group cursor-pointer relative"
          onMouseEnter={() => setHoveredId(strand.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => setSelectedStrand(strand)}
        >
          <div className="flex-1">
            <span className="group-hover:text-neutral-900 transition-colors text-2xl font-normal text-neutral-500 font-geist block">
              {strand.title}
            </span>
            {/* Micro description on hover */}
            <span
              className={`text-sm font-light text-neutral-400 mt-2 block transition-all duration-300 ${
                hoveredId === strand.id ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
              } overflow-hidden`}
            >
              {strand.microDescription}
            </span>
          </div>
          <span className="text-[10px] text-neutral-400 font-sans tracking-widest mt-2">
            {String(strand.id).padStart(2, "0")}
          </span>
        </div>
      ))}

      {/* Modal */}
      {selectedStrand && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedStrand(null)}
        >
          <div
            className="bg-[#F8F8F8] max-w-2xl w-full max-h-[85vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#1A2118] px-8 py-10">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C25E30] mb-4 block">
                {String(selectedStrand.id).padStart(2, "0")} — Workshop Strand
              </span>
              <h3 className="text-3xl md:text-4xl font-normal text-[#F2F4EF] tracking-tight font-playfair">
                {selectedStrand.title}
              </h3>
              <p className="text-base font-light text-[#F2F4EF]/70 leading-relaxed mt-4">
                {selectedStrand.microDescription}
              </p>
            </div>

            {/* Content */}
            <div className="px-8 py-10 space-y-8">
              <p className="text-base font-light text-neutral-600 leading-[1.9]">
                {selectedStrand.expandedContent.intro}
              </p>

              <div className="border-l-2 border-[#C25E30]/30 pl-6 space-y-3">
                <p className="text-sm font-medium text-neutral-700 mb-4">
                  {selectedStrand.expandedContent.supportsLabel}
                </p>
                {selectedStrand.expandedContent.supports.map((item, idx) => (
                  <p key={idx} className="text-base font-light text-neutral-500 leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>

              <p className="text-base font-light text-neutral-600 leading-[1.9]">
                {selectedStrand.expandedContent.closing}
              </p>

              <div className="pt-4 flex gap-6">
                <button
                  onClick={() => setSelectedStrand(null)}
                  className="text-[10px] uppercase tracking-[0.25em] border-b border-neutral-300 pb-1 hover:border-neutral-900 transition-colors"
                >
                  Close
                </button>
                <a
                  href="#"
                  className="text-[10px] uppercase tracking-[0.25em] text-[#C25E30] border-b border-[#C25E30]/30 pb-1 hover:border-[#C25E30] transition-colors"
                >
                  View Sessions
                </a>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setSelectedStrand(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-[#F2F4EF]/60 hover:text-[#F2F4EF] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

