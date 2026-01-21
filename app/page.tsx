import Link from "next/link";
import Image from "next/image";
import DynamicNav from "./components/DynamicNav";
import WorkshopStrands from "./components/WorkshopStrands";

export default function HomePage() {
  return (
    <>
      <DynamicNav />

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Left Text Content */}
        <div className="col-span-1 lg:col-span-5 relative flex flex-col justify-center px-8 py-24 lg:px-16 overflow-hidden bg-[#1A2118]">
          {/* Gradient Background */}
          <div className="z-0 bg-gradient-to-bl from-[#2F3A25] to-[#1A2118] absolute top-0 right-0 bottom-0 left-0"></div>
          
          {/* Content */}
          <div className="relative z-10 w-full">
            <h1 className="lg:text-6xl xl:text-7xl leading-[0.9] text-7xl font-normal text-[#F2F4EF] tracking-tight font-playfair mb-8">
              Rizq Sistas
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-[#8f9e85] leading-[1.4] mb-10 max-w-md font-playfair italic">
              Guiding women to care for and grow their provision with faith, clarity, and intention.
            </p>
            
            <div className="space-y-4 mb-12 max-w-md">
              <p className="text-sm font-light text-[#F2F4EF]/70 leading-[1.9]">
                Rizq Sistas is a global platform supporting Muslim women to steward their rizq across money, wellbeing, work, and life direction.
              </p>
              <p className="text-sm font-light text-[#F2F4EF]/70 leading-[1.9]">
                We focus on readiness and decision-making — helping women build the clarity, stability, and confidence required to take aligned financial, professional, and personal steps.
              </p>
            </div>

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C25E30] font-medium mb-10">
              Educate. Connect. Prepare.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <Link href="/community" className="inline-flex items-center text-[10px] uppercase hover:opacity-70 transition-opacity font-medium text-[#F2F4EF] tracking-[0.2em] border-[#C25E30] border-b pb-1">
                Join the Community
              </Link>
              <Link href="/community" className="inline-flex items-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#8F9E85] hover:text-[#F2F4EF] transition-colors">
                Explore Events
              </Link>
            </div>
          </div>
        </div>
        
        {/* Right Image Grid */}
        <div className="col-span-1 lg:col-span-7 grid grid-cols-2 h-[50vh] lg:h-auto">
          <div className="relative h-full bg-neutral-300 overflow-hidden border-r border-white/10">
            <Image src="/images/hero/backs.jpg" alt="Rizq Sistas Member" className="hover:scale-105 transition-transform duration-700 opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" width={800} height={600} />
          </div>
          <div className="relative h-full bg-neutral-200 overflow-hidden">
            <Image src="/images/hero/hike.jpg" alt="Collaborative Work" className="hover:scale-105 transition-transform duration-700 opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" width={800} height={600} />
          </div>
        </div>
      </section>

      {/* Philosophy / Manifesto Section */}
      <section id="why-we-exist" className="lg:px-12 pt-32 pr-6 pb-32 pl-6">
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#C25E30] mb-6 block">The Gap We Address</span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-normal text-neutral-900 tracking-tight font-playfair">
                Why Rizq Sistas<br /><span className="italic text-neutral-400">Exists</span>
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="text-base font-light text-neutral-600 leading-[1.9] max-w-xl lg:ml-auto">
                Muslim women are highly engaged in education, work, and community, yet remain under-supported when navigating financial decisions, career transitions, and long-term planning.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: What they lack */}
            <div className="lg:col-span-5">
              <div className="border-l-2 border-[#C25E30]/30 pl-6 space-y-4">
                <p className="leading-[1.9] text-base font-light text-neutral-600 mb-2">
                  Many are active earners or builders, but lack:
                </p>
                <p className="leading-[1.9] text-base font-light text-neutral-500">trusted spaces to reflect and plan</p>
                <p className="leading-[1.9] text-base font-light text-neutral-500">structured guidance before major decisions</p>
                <p className="leading-[1.9] text-base font-light text-neutral-500">support that aligns faith, wellbeing, and responsibility</p>
              </div>
            </div>

            {/* Right: Contrast + closing */}
            <div className="lg:col-span-7 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-3">Most platforms</p>
                  <p className="leading-[1.9] text-base font-light text-neutral-500">Prioritise speed and outcomes.</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#C25E30] mb-3">Rizq Sistas</p>
                  <p className="leading-[1.9] text-base font-light text-neutral-700">Prioritises alignment, readiness, and sustainability.</p>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-10">
                <p className="leading-[1.6] text-xl font-light text-neutral-700 italic font-playfair max-w-lg">
                  We exist to support women in stewarding their rizq — as provision across income, capacity, health, time, and direction.
                </p>
                <div className="pt-8">
                  <Link href="#" className="text-[10px] uppercase tracking-[0.25em] border-b border-neutral-300 pb-1 hover:border-neutral-900 transition-colors">Read the Manifesto</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="lg:px-12 bg-[#1A2118] pt-24 pr-6 pb-32 pl-6 relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2F3A25]/50 to-transparent"></div>
        
        <div className="relative z-10 max-w-screen-xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#C25E30] mb-6 block">What We Do</span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-normal text-[#F2F4EF] tracking-tight font-playfair">
                  Supporting informed,<br /><span className="italic text-[#8f9e85]">faith-aligned</span> decisions
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-base font-light text-[#F2F4EF]/70 leading-[1.9]">
                  Rizq Sistas does not rush women into programmes, products, or prescribed paths.
                </p>
              </div>
            </div>
          </div>

          {/* We support women to... */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-8 bg-[#8f9e85]/40"></div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#8f9e85]">We support women to</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1 */}
              <div className="group border border-[#8f9e85]/20 p-6 hover:border-[#C25E30]/40 transition-colors">
                <span className="text-3xl font-light text-[#C25E30]/40 font-geist mb-4 block">01</span>
                <p className="text-sm font-light text-[#F2F4EF] leading-relaxed">
                  Assess their current position with honesty and clarity
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="group border border-[#8f9e85]/20 p-6 hover:border-[#C25E30]/40 transition-colors">
                <span className="text-3xl font-light text-[#C25E30]/40 font-geist mb-4 block">02</span>
                <p className="text-sm font-light text-[#F2F4EF] leading-relaxed">
                  Understand their relationship with money, work, time, and responsibility
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="group border border-[#8f9e85]/20 p-6 hover:border-[#C25E30]/40 transition-colors">
                <span className="text-3xl font-light text-[#C25E30]/40 font-geist mb-4 block">03</span>
                <p className="text-sm font-light text-[#F2F4EF] leading-relaxed">
                  Identify risks, constraints, and opportunities before committing
                </p>
              </div>
              
              {/* Card 4 */}
              <div className="group border border-[#8f9e85]/20 p-6 hover:border-[#C25E30]/40 transition-colors">
                <span className="text-3xl font-light text-[#C25E30]/40 font-geist mb-4 block">04</span>
                <p className="text-sm font-light text-[#F2F4EF] leading-relaxed">
                  Make considered, faith-aligned decisions that can be sustained
                </p>
              </div>
            </div>
          </div>

          {/* Closing statement */}
          <div className="border-t border-[#8f9e85]/20 pt-12">
            <p className="text-xl md:text-2xl font-light text-[#F2F4EF]/90 leading-relaxed max-w-3xl font-playfair italic">
              This preparatory work strengthens outcomes across finance, career, entrepreneurship, and wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach - How We Work */}
      <section id="our-approach" className="lg:px-12 bg-[#f6f1eb] pt-32 pr-6 pb-24 pl-6">
        <div className="max-w-screen-xl mx-auto">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#C25E30] mb-6 block">Our Approach</span>
              <h2 className="text-5xl md:text-6xl leading-[1.05] font-normal text-neutral-800 tracking-tight font-playfair">
                How we <span className="italic text-neutral-500">work</span>
              </h2>
            </div>
          </div>

          {/* Three Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Principle 1 */}
            <div className="border-t border-neutral-300 pt-8">
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-6 block">01</span>
              <h3 className="text-2xl font-normal text-neutral-800 tracking-tight font-geist mb-4">Readiness & Alignment</h3>
              <p className="text-sm font-light text-neutral-500 leading-[1.9]">
                We focus on emotional, spiritual, and practical readiness as a prerequisite for effective decision-making.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="border-t border-neutral-300 pt-8">
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-6 block">02</span>
              <h3 className="text-2xl font-normal text-neutral-800 tracking-tight font-geist mb-4">Guided Pathways</h3>
              <p className="text-sm font-light text-neutral-500 leading-[1.9]">
                Women are supported through structured workshops, tools, and facilitated sessions that prioritise clarity over urgency.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="border-t border-neutral-300 pt-8">
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-6 block">03</span>
              <h3 className="text-2xl font-normal text-neutral-800 tracking-tight font-geist mb-4">Community & Environment</h3>
              <p className="text-sm font-light text-neutral-500 leading-[1.9]">
                We convene women in focused settings — from small circles to retreats — designed to support reflection, accountability, and long-term thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="what-we-offer" className="lg:px-12 bg-white pt-24 pr-6 pb-32 pl-6">
        <div className="max-w-screen-xl mx-auto">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#C25E30] mb-6 block">What We Offer</span>
              <h2 className="text-4xl md:text-5xl leading-[1.1] font-normal text-neutral-800 tracking-tight font-playfair">
                Structured support,<br /><span className="italic text-neutral-400">delivered thoughtfully</span>
              </h2>
            </div>
          </div>

          {/* Offerings List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
            {/* Left Column */}
            <div className="space-y-0">
              {/* Offering 1 */}
              <div className="border-t border-neutral-200 py-10 group">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-normal text-neutral-800 tracking-tight font-geist mb-3 group-hover:text-[#C25E30] transition-colors">
                      Readiness Workshops
                    </h3>
                    <p className="text-sm font-light text-neutral-500 leading-[1.9] max-w-md">
                      Online and in-person sessions focused on financial, professional, and life decision-making.
                    </p>
                  </div>
                  <span className="text-[10px] text-neutral-300 tracking-widest mt-1">01</span>
                </div>
              </div>

              {/* Offering 2 */}
              <div className="border-t border-neutral-200 py-10 group">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-normal text-neutral-800 tracking-tight font-geist mb-3 group-hover:text-[#C25E30] transition-colors">
                      Tools & Frameworks
                    </h3>
                    <p className="text-sm font-light text-neutral-500 leading-[1.9] max-w-md">
                      Practical diagnostics, planners, and reflection tools that support assessment, planning, and follow-through.
                    </p>
                  </div>
                  <span className="text-[10px] text-neutral-300 tracking-widest mt-1">02</span>
                </div>
              </div>

              {/* Offering 3 */}
              <div className="border-t border-neutral-200 py-10 group">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-normal text-neutral-800 tracking-tight font-geist mb-3 group-hover:text-[#C25E30] transition-colors">
                      Community Circles
                    </h3>
                    <p className="text-sm font-light text-neutral-500 leading-[1.9] max-w-md">
                      Facilitated spaces for discussion, shared learning, and accountability within a women-only environment.
                    </p>
                  </div>
                  <span className="text-[10px] text-neutral-300 tracking-widest mt-1">03</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-0">
              {/* Offering 4 */}
              <div className="border-t border-neutral-200 py-10 group lg:border-t">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-normal text-neutral-800 tracking-tight font-geist mb-3 group-hover:text-[#C25E30] transition-colors">
                      Retreats & Residential Experiences
                    </h3>
                    <p className="text-sm font-light text-neutral-500 leading-[1.9] max-w-md">
                      UK-based and international retreats that provide structured time for reflection, recalibration, and strategic thinking — supported by nature and guided facilitation.
                    </p>
                  </div>
                  <span className="text-[10px] text-neutral-300 tracking-widest mt-1">04</span>
                </div>
              </div>

              {/* Offering 5 */}
              <div className="border-t border-neutral-200 py-10 group">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-normal text-neutral-800 tracking-tight font-geist group-hover:text-[#C25E30] transition-colors">
                        Curated Learning
                      </h3>
                      <span className="text-[9px] uppercase tracking-widest text-[#C25E30] border border-[#C25E30]/30 px-2 py-0.5">Coming Soon</span>
                    </div>
                    <p className="text-sm font-light text-neutral-500 leading-[1.9] max-w-md">
                      Access to trusted specialists and educators, introduced at appropriate stages rather than all at once.
                    </p>
                  </div>
                  <span className="text-[10px] text-neutral-300 tracking-widest mt-1">05</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="lg:px-12 bg-[#F8F8F8] mt-12 pt-24 pr-6 pb-24 pl-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 border-b border-neutral-200 pb-12">
          <div className="col-span-1 lg:col-span-7">
            <h2 className="lg:text-8xl leading-[0.9] text-6xl font-normal text-neutral-800 tracking-tight font-playfair">
              Join Rizq Sistas<span className="block italic text-neutral-400">Live & Online</span>
            </h2>
          </div>
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-end">
            <WorkshopStrands />
          </div>
        </div>

        <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-12">Featured Sessions</div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Event 01 */}
          <div className="flex flex-col h-full justify-between">
            <div className="">
              <div className="aspect-square bg-neutral-200 mb-10 overflow-hidden">
                <Image src="/images/sessions/foundations-of-wealth.jpeg" className="w-full h-full object-cover" alt="Workshop" width={600} height={600} />
              </div>
              <span className="block text-5xl text-neutral-600 font-geist mb-8">01</span>
              <h3 className="text-3xl font-normal text-neutral-700 tracking-tighter font-geist mb-4">Foundations of Wealth</h3>
              <p className="text-sm font-light text-neutral-500 leading-loose mb-10 max-w-[280px]">
                A comprehensive workshop designed to reset your financial mindset and establish a halal roadmap for your future.
              </p>
            </div>
            <Link href="#" className="text-[10px] uppercase tracking-[0.2em] flex items-center justify-between border-t border-neutral-200 pt-5 group hover:text-[#C25E30] transition-colors text-[#C25E30]">
              Register Now
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </Link>
          </div>

          {/* Event 02 */}
          <div className="flex flex-col h-full justify-between">
            <div className="">
              <div className="aspect-square bg-neutral-200 mb-10 overflow-hidden">
                <Image src="/images/sessions/rizq-circle.jpeg" className="w-full h-full object-cover" alt="Discussion" width={600} height={600} />
              </div>
              <span className="block text-5xl font-normal text-neutral-600 font-geist mb-8">02</span>
              <h3 className="text-3xl font-normal text-neutral-700 tracking-tighter font-geist mb-4">Rizq Sistas Monthly</h3>
              <p className="leading-loose text-sm font-light text-neutral-500 max-w-[280px] mb-10">
                Our regular gathering focused on accountability, sharing practical wins, and navigating challenges as a group.
              </p>
            </div>
            <Link href="#" className="text-[10px] uppercase tracking-[0.2em] flex items-center justify-between border-t border-neutral-200 pt-5 group hover:text-[#C25E30] transition-colors text-[#C25E30]">
              Join Waitlist
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </Link>
          </div>

          {/* Event 03 */}
          <div className="flex flex-col h-full justify-between">
            <div className="">
              <div className="aspect-square bg-neutral-200 mb-10 overflow-hidden">
                <Image src="/images/sessions/markets.jpeg" className="w-full h-full object-cover" alt="Planning" width={600} height={600} />
              </div>
              <span className="block text-5xl text-neutral-600 font-geist mb-8">03</span>
              <h3 className="text-3xl font-normal text-neutral-700 tracking-tighter font-geist mb-4">Mastering Markets</h3>
              <p className="leading-loose text-sm font-light text-neutral-500 max-w-[280px] mb-10">
                Advanced strategies for ethical investing in public and private markets, tailored for the modern Muslim woman.
              </p>
            </div>
            <Link href="#" className="text-[10px] uppercase tracking-[0.2em] flex items-center justify-between border-t border-neutral-200 pt-5 group hover:text-[#C25E30] transition-colors text-[#C25E30]">
              View Syllabus
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Asymmetric About Section */}
      <section className="lg:px-12 pt-24 pr-6 pb-24 pl-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#f6f1eb] gap-x-8 gap-y-8 items-end">
          {/* Large Tablet Image */}
          <div className="col-span-1 lg:col-span-5 relative">
            <div className="bg-neutral-100 aspect-[3/4] overflow-hidden">
              <Image
                src="/images/approach/tools-for-action.jpeg"
                className="w-full h-full object-cover grayscale"
                alt="Digital tools"
                width={800}
                height={600}
              />
            </div>
          </div>
          
          {/* Middle Gap/Content */}
          <div className="col-span-1 lg:col-span-3">
            <div className="bg-neutral-100 aspect-[3/4] overflow-hidden">
              <Image
                src="/images/wallpaper/rizq-wallpaper.png"
                className="w-full h-full object-cover opacity-90"
                alt="Rizq Sistas pattern"
                width={800}
                height={600}
              />
            </div>
          </div>

          {/* Right Content Stack */}
          <div className="col-span-1 lg:col-span-4 flex flex-col h-full justify-end">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-4 block">Our Mission</span>
              <p className="text-base md:text-lg leading-relaxed font-light italic text-neutral-500 font-geist">
                &ldquo;Rizq Sistas exists to help you steward your wealth with clarity, confidence, and faith.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="resources" className="lg:px-12 border-neutral-100 border-t pt-12 pr-6 pb-12 pl-6">
        <div className="flex mb-20 items-end justify-between">
          <span className="text-4xl italic text-neutral-700 tracking-tight font-playfair">Latest Resources</span>
          <Link href="#" className="text-[10px] uppercase tracking-[0.2em] border-b border-transparent hover:border-neutral-900 pb-0.5 transition-colors">See More</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Article 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-square bg-neutral-200 mb-8 overflow-hidden">
              <Image src="https://via.placeholder.com/600x600/f0f0f0/666?text=Investment" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" alt="Investment" width={600} height={600} />
            </div>
            <div className="flex justify-between items-start gap-6">
              <div className="">
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest mb-3 block">Finance</span>
                <h4 className="leading-tight text-2xl font-normal text-neutral-700 tracking-tighter font-geist">Understanding Zakat on Investments</h4>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-neutral-400 mt-1">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </div>
          </div>

          {/* Article 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-square bg-neutral-200 mb-8 overflow-hidden">
              <Image src="https://via.placeholder.com/600x600/f0f0f0/666?text=Balance" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" alt="Balance" width={600} height={600} />
            </div>
            <div className="flex justify-between items-start gap-6">
              <div className="">
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest mb-3 block">Lifestyle</span>
                <h4 className="leading-tight text-2xl font-normal text-neutral-700 tracking-tighter font-geist">Balancing Dunya Goals with Akhirah Intentions</h4>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-neutral-400 mt-1">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </div>
          </div>

          {/* Article 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-square bg-neutral-200 mb-8 overflow-hidden">
              <Image src="https://via.placeholder.com/600x600/f0f0f0/666?text=Budgeting" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" alt="Budgeting" width={600} height={600} />
            </div>
            <div className="flex justify-between items-start gap-6">
              <div className="">
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest mb-3 block">Planning</span>
                <h4 className="leading-tight text-2xl font-normal text-neutral-600 tracking-tighter font-geist">Practical Budgeting Methods That Won&apos;t Break</h4>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-neutral-400 mt-1">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="lg:px-12 text-[#F2F4EF] bg-gradient-to-bl from-[#2F3A25] to-[#1A2118] border-[#8F9E85]/20 border-t pt-32 pr-6 pb-16 pl-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-8 mb-40 max-w-[1800px] mx-auto">
          {/* Left Text */}
          <div className="lg:col-span-4 pr-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C25E30] font-medium mb-4">
              Educate. Connect. Prepare.
            </p>
            <p className="text-base font-light text-[#F2F4EF]/80 italic font-playfair mb-4">
              Stewarding rizq, together.
            </p>
            <p className="text-xs text-[#F2F4EF]/50">
              UK-founded · Global community
            </p>
          </div>
          
          {/* Links Cols */}
          <div className="lg:col-span-2">
            <h5 className="text-[11px] uppercase tracking-widest text-[#C25E30] mb-8">About</h5>
            <ul className="space-y-3">
              <li><Link href="#why-we-exist" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Why We Exist</Link></li>
              <li><Link href="#our-approach" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Our Approach</Link></li>
              <li><Link href="#what-we-offer" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">What We Offer</Link></li>
              <li><Link href="#events" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h5 className="text-[11px] uppercase tracking-widest text-[#C25E30] mb-8">Workshop Strands</h5>
            <ul className="space-y-3">
              <li><Link href="#events" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Financial Foundations</Link></li>
              <li><Link href="#events" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Halal Investing 101</Link></li>
              <li><Link href="#events" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Barakah-Led Entrepreneurship</Link></li>
              <li><Link href="#events" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Community & Network</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h5 className="text-[11px] uppercase tracking-widest text-[#C25E30] mb-8">What We Offer</h5>
            <ul className="space-y-3">
              <li><Link href="#what-we-offer" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Readiness Workshops</Link></li>
              <li><Link href="#what-we-offer" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Tools & Frameworks</Link></li>
              <li><Link href="#what-we-offer" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Community Circles</Link></li>
              <li><Link href="#what-we-offer" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Retreats & Experiences</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h5 className="text-[11px] uppercase tracking-widest text-[#C25E30] mb-8">Connect</h5>
            <ul className="space-y-3">
              <li><Link href="#events" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Events</Link></li>
              <li><Link href="/community" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Join Community</Link></li>
              <li><Link href="#resources" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Resources</Link></li>
            </ul>
          </div>
        </div>
    
        {/* Big Text */}
        <div className="max-w-[1800px] mx-auto mb-10 overflow-visible">
          <h1 className="text-[12.5vw] leading-none uppercase select-none font-light text-[#F2F4EF] tracking-tight font-playfair text-center w-full">
            Rizq Sistas
          </h1>
        </div>
    
        {/* Divider & Bottom */}
        <div className="max-w-[1800px] mx-auto border-t border-[#8F9E85]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            <Link href="#" className="text-xs text-[#F2F4EF]/60 hover:text-[#F2F4EF]">Privacy Policy</Link>
            <Link href="#" className="text-xs text-[#F2F4EF]/60 hover:text-[#F2F4EF]">Terms of Use</Link>
          </div>
          <div className="text-xs text-[#F2F4EF]/60">
            © Rizq Sistas
          </div>
          <div className="flex gap-8">
            <Link href="#" className="text-xs text-[#F2F4EF]/60 hover:text-[#F2F4EF]">Facebook</Link>
            <Link href="#" className="text-xs text-[#F2F4EF]/60 hover:text-[#F2F4EF]">Twitter</Link>
            <Link href="#" className="text-xs text-[#F2F4EF]/60 hover:text-[#F2F4EF]">LinkedIn</Link>
            <Link href="#" className="text-xs text-[#F2F4EF]/60 hover:text-[#F2F4EF]">Instagram</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
