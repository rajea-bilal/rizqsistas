import Link from "next/link";
import Image from "next/image";
import DynamicNav from "./components/DynamicNav";

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
            <span className="text-[9px] uppercase block font-medium text-[#C25E30] tracking-[0.3em] border-[#C25E30]/30 border-l mb-12 pl-3">
              Welcome to Rizq Sistas
            </span>
            
            <h1 className="lg:text-7xl xl:text-8xl leading-[0.9] text-7xl font-normal text-[#F2F4EF] tracking-tight font-instrument-serif mb-10">
              Learn Strategy.<br />
              Trust Provision.<br />
              <span className="italic text-[#8f9e85] pr-2">Build Together.</span>
            </h1>
            
            <p className="text-sm font-light text-[#F2F4EF]/80 leading-[2] mb-14 max-w-md">
              Rizq Sistas is a community turning financial planning into practical action. We learn, invest, and steward our wealth side by side, grounded in faith.
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
      <section className="lg:px-12 pt-32 pr-6 pb-32 pl-6">
        <div className="flex flex-col text-center max-w-screen-xl mr-auto ml-auto items-center">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#C25E30]">Our Philosophy</span>
            <div className="h-[1px] w-12 bg-neutral-300"></div>
          </div>
          
          <h2 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-normal text-neutral-900 tracking-tight font-instrument-serif max-w-6xl mb-16">
            Your Rizq is written.<br /><span className="text-neutral-400 italic">Your effort is required.</span>
          </h2>
          
          <div className="max-w-xl mx-auto space-y-8">
            <p className="leading-[1.9] text-base font-light text-neutral-600">
              Spiritual trust and financial strategy go hand in hand. We reject the idea that ambition contradicts devotion. At Rizq Sistas, we provide the practical tools to steward your provision responsibly.
            </p>
            <p className="leading-[1.9] text-base font-light text-neutral-600">
              No vague advice. Just a clear path forward, supported by women who are doing the work to grow together, not apart.
            </p>
            <div className="pt-8">
              <Link href="#" className="text-[10px] uppercase tracking-[0.25em] border-b border-neutral-300 pb-1 hover:border-neutral-900 transition-colors">Read the Manifesto</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="lg:px-12 bg-[#f6f1eb] border-neutral-100 border-t pt-12 pr-6 pb-12 pl-6">
        <div className="flex font-instrument-serif mb-24 items-end justify-between">
          <span className="text-4xl italic text-neutral-700 tracking-tight">The Rizq Sistas Approach</span>
          <Link href="#" className="text-[10px] uppercase tracking-[0.2em] border-b border-transparent hover:border-neutral-900 pb-0.5 transition-colors">Join Us</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {/* Value 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] bg-neutral-100 mb-10 overflow-hidden relative">
              <Image src="https://via.placeholder.com/800x600/f0f0f0/666?text=Education" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale opacity-90" alt="Education" width={800} height={600} />
            </div>
            <h3 className="lg:text-4xl text-3xl font-normal text-neutral-700 tracking-tighter font-geist mb-4">Practical Halal Literacy</h3>
            <p className="text-sm font-light text-neutral-500 leading-loose max-w-sm">Clear, actionable lessons on budgeting and investing that align with your values and daily life.</p>
          </div>

          {/* Value 2 */}
          <div className="group cursor-pointer md:mt-20">
            <div className="aspect-[4/3] bg-neutral-100 mb-10 overflow-hidden relative">
              <Image src="/images/approach/image01.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale opacity-90" alt="Community" width={800} height={600} />
            </div>
            <h3 className="lg:text-4xl text-3xl font-normal text-neutral-700 tracking-tighter font-geist mb-4">The Rizq Sistas Circle</h3>
            <p className="text-sm font-light text-neutral-500 leading-loose max-w-sm">Real conversations about money. No judgment, just shared growth and accountability with women who get it.</p>
          </div>

          {/* Value 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] bg-neutral-100 mb-10 overflow-hidden relative">
              <Image src="/images/approach/tools-for-action.jpeg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale opacity-90" alt="Tools" width={800} height={600} />
            </div>
            <h3 className="lg:text-4xl text-3xl font-normal text-neutral-700 tracking-tighter font-geist mb-4">Tools for Action</h3>
            <p className="text-sm font-light text-neutral-500 leading-loose max-w-sm">Spreadsheets, checklists, and frameworks you can use today to manage the provision you have been given.</p>
          </div>

          {/* Value 4 */}
          <div className="group cursor-pointer md:mt-20">
            <div className="aspect-[4/3] bg-neutral-100 mb-10 overflow-hidden relative">
              <Image src="/images/sessions/sistas.jpeg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale opacity-90" alt="Network" width={800} height={600} />
            </div>
            <h3 className="lg:text-4xl text-3xl font-normal text-neutral-700 tracking-tighter font-geist mb-4">Collective Growth</h3>
            <p className="text-sm font-light text-neutral-500 leading-loose max-w-sm">Opportunities multiply when we build together. Connect with partners and mentors who share your ethics.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="lg:px-12 bg-[#F8F8F8] mt-12 pt-24 pr-6 pb-24 pl-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 border-b border-neutral-200 pb-12">
          <div className="col-span-1 lg:col-span-7">
            <h2 className="lg:text-8xl leading-[0.9] text-6xl font-normal text-neutral-800 tracking-tight font-instrument-serif">
              Join Rizq Sistas<span className="block italic text-neutral-400">Live & Online</span>
            </h2>
          </div>
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-end">
            <div className="text-right text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-8">Workshops + Meetups</div>
            
            <div className="border-t border-neutral-300 py-6 flex justify-between items-center group cursor-pointer">
              <span className="group-hover:text-neutral-900 transition-colors text-2xl font-normal text-neutral-500 font-geist">Halal Investing 101</span>
              <span className="text-[10px] text-neutral-400 font-sans tracking-widest">01</span>
            </div>
            <div className="flex group cursor-pointer border-neutral-300 border-t pt-6 pb-6 items-center justify-between">
              <span className="group-hover:text-neutral-900 transition-colors text-2xl font-normal text-neutral-500 font-geist">Debt Elimination Strategy</span>
              <span className="text-[10px] text-neutral-400 font-sans tracking-widest">02</span>
            </div>
            <div className="border-t border-neutral-300 py-6 flex justify-between items-center group cursor-pointer">
              <span className="group-hover:text-neutral-900 transition-colors text-2xl text-neutral-500 font-geist">Entrepreneurship & Barakah</span>
              <span className="text-[10px] text-neutral-400 font-sans tracking-widest">03</span>
            </div>
            <div className="border-t border-neutral-300 py-6 flex justify-between items-center group cursor-pointer">
              <span className="group-hover:text-neutral-900 transition-colors text-2xl font-normal text-neutral-500 font-geist">Rizq Sistas Networking</span>
              <span className="text-[10px] text-neutral-400 font-sans tracking-widest">04</span>
            </div>
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
          <div className="col-span-1 lg:col-span-4 flex flex-col h-full gap-x-12 gap-y-12 justify-between">
            <div className="flex justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-neutral-800 stroke-[1]">
                <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
              </svg>
            </div>
            
            <div className="mt-auto">
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-6 block">Our Mission</span>
              <p className="md:text-3xl leading-relaxed text-2xl font-light italic text-neutral-500 tracking-tight font-geist">
                &ldquo;Rizq Sistas exists to help you steward your wealth with clarity, confidence, and faith.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="lg:px-12 border-neutral-100 border-t pt-12 pr-6 pb-12 pl-6">
        <div className="flex mb-20 items-end justify-between">
          <span className="text-4xl italic text-neutral-700 tracking-tight font-instrument-serif">Latest Resources</span>
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
            <p className="text-sm font-light text-[#F2F4EF]/80 leading-relaxed max-w-[320px]">
              Giving you the tools for both worlds.<br />—<br />
              Designing, building, and growing financial futures for ambitious women worldwide.
            </p>
          </div>
          
          {/* Links Cols */}
          <div className="lg:col-span-2">
            <h5 className="text-[11px] uppercase tracking-widest text-[#C25E30] mb-8">Company</h5>
            <ul className="space-y-3">
              <li className=""><Link href="#" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">About us</Link></li>
              <li><Link href="#" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Work</Link></li>
              <li className=""><Link href="#" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Book a Call</Link></li>
              <li className=""><Link href="#" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h5 className="text-[11px] uppercase tracking-widest text-[#C25E30] mb-8">Services</h5>
            <ul className="space-y-3">
              <li className=""><Link href="#" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Halal Investing</Link></li>
              <li className=""><Link href="#" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Financial Planning</Link></li>
              <li className=""><Link href="#" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Debt Management</Link></li>
              <li className=""><Link href="#" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Community</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h5 className="text-[11px] uppercase tracking-widest text-[#C25E30] mb-8">Work</h5>
            <ul className="space-y-3">
              <li className=""><Link href="#" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Case Studies</Link></li>
              <li className=""><Link href="#" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Testimonials</Link></li>
              <li className=""><Link href="#" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Impact Report</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h5 className="text-[11px] uppercase tracking-widest text-[#C25E30] mb-8">Resources</h5>
            <ul className="space-y-3">
              <li className=""><Link href="#" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Blog</Link></li>
              <li className=""><Link href="#" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Calculators</Link></li>
              <li className=""><Link href="#" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Podcast (Coming)</Link></li>
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
        <div className="max-w-[1800px] mx-auto border-t border-[#8F9E85]/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            <Link href="#" className="text-xs text-[#F2F4EF]/60 hover:text-[#F2F4EF]">Privacy Policy</Link>
            <Link href="#" className="text-xs text-[#F2F4EF]/60 hover:text-[#F2F4EF]">Terms of Use</Link>
          </div>
          <div className="text-xs text-[#F2F4EF]/60">
            © 2024 Rizq Sistas. All rights reserved.
          </div>
          <div className="flex gap-10">
            <Link href="#" className="text-xs text-[#F2F4EF]/60 hover:text-[#F2F4EF]">Facebook</Link>
            <Link href="#" className="text-xs text-[#F2F4EF]/60 hover:text-[#F2F4EF]">Twitter</Link>
            <Link href="#" className="text-xs text-[#F2F4EF]/60 hover:text-[#F2F4EF]">Linkedin</Link>
            <Link href="#" className="text-xs text-[#F2F4EF]/60 hover:text-[#F2F4EF]">Instagram</Link>
            <Link href="#" className="text-xs text-[#F2F4EF]/60 hover:text-[#F2F4EF]">Dribbble</Link>
            <Link href="#" className="text-xs text-[#F2F4EF]/60 hover:text-[#F2F4EF]">Layers</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
