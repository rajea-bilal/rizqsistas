import { ExternalLink } from 'lucide-react';

export default function UpcomingEventsSection() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-[1000px] mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-instrument-serif text-4xl md:text-5xl tracking-tight text-white mb-4">
          Upcoming Events
        </h2>
        <p className="text-zinc-400 leading-relaxed max-w-xl mx-auto">
          Join our workshops and circle conversations designed to build your financial confidence through community.
        </p>
      </div>

      {/* Compact Events Display */}
      <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden">
        {/* Compact iframe with heavy masking */}
        <div className="relative h-[520px] overflow-hidden">
          {/* Strong dark overlay to minimize snowflakes */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/30 via-[#0f0f0f]/10 to-[#0f0f0f]/30 pointer-events-none z-10"></div>
          
          <iframe
            src="https://lu.ma/embed-checkout/evt-m4L20mR1EIKIaGs"
            width="100%"
            height="550"
            className="w-full scale-110 -translate-y-2"
            style={{ 
              border: 'none',
              background: '#0f0f0f',
              filter: 'brightness(0.8) contrast(1.2) saturate(0.8)',
            }}
            title="Upcoming Events"
          />
          
          {/* Bottom fade to hide cut-off content */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none z-20"></div>
        </div>
        
        {/* Clean bottom CTA */}
        <div className="px-6 py-4 bg-[#0f0f0f] border-t border-white/5 text-center">
          <a
            href="https://luma.com/rizqsistas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors"
          >
            View All Events & Register
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-zinc-500 text-xs mt-2">
            Online & in-person events across various cities
          </p>
        </div>
      </div>
    </section>
  );
}
