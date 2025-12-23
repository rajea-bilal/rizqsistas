import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, BookOpen, Users, MapPin, ChevronRight, ChevronDown, PenTool, Twitter, Instagram, Youtube } from 'lucide-react';
import UpcomingEventsSection from './_components/UpcomingEventsSection';

export default function CommunityPage() {
  return (
    <div className="bg-[#050505] text-white antialiased font-geist selection:bg-white selection:text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-black/50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo/logo.png" 
                alt="Rizq Sistas Logo" 
                width={48} 
                height={48} 
                className="w-12 h-12"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-400 font-medium">
            <a href="#" className="hover:text-white transition-colors">Product</a>
            <a href="#" className="hover:text-white transition-colors">Teams</a>
            <a href="#" className="hover:text-white transition-colors">Resources</a>
            <a href="#" className="text-white">Community</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">Enterprise</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-4 text-sm font-medium">
            <a href="#" className="text-zinc-400 hover:text-white hidden sm:block">Log in</a>
            <a href="#" className="bg-white text-black px-3 py-1.5 rounded-lg hover:bg-zinc-200 transition-colors">Sign up</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Typography & Content */}
          <div className="space-y-10 z-10 relative">
            <h1 className="font-instrument-serif text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-white">
              Build Rizq. <br />
              <span className="text-zinc-400">Together.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-zinc-400 font-normal leading-relaxed max-w-lg">
              Local and online gatherings for Muslim women committed to faith-led financial growth, honest conversations, and collective barakah.
            </p>

            <ul className="space-y-3 text-lg text-zinc-400 font-normal">
              <li className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-white" />
                <span>Attend intimate, values-aligned meetups</span>
              </li>
              <li className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-white" />
                <span>Learn practical halal finance in community</span>
              </li>
              <li className="flex items-center gap-3">
                <Users className="w-5 h-5 text-white" />
                <span>Connect with women walking the same path</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#" className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors">
                Explore Gatherings
              </a>
              <a href="#" className="bg-zinc-900 border border-zinc-800 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors">
                Become a Host
              </a>
            </div>
          </div>

          {/* Right: Scattered Image Grid */}
          <div className="relative h-[500px] w-full hidden lg:block perspective-1000">
            
            {/* Image 1: Top Right */}
            <div className="absolute top-0 right-0 w-48 h-64 rounded-xl overflow-hidden shadow-2xl border border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500 hover:z-20">
              <Image src="/images/sessions/sistas.jpeg" className="w-full h-full object-cover" alt="Rizq Sistas Community" width={400} height={600} />
            </div>

            {/* Image 2: Center Left */}
            <div className="absolute top-12 left-10 w-56 h-40 rounded-xl overflow-hidden shadow-2xl border border-white/10 -rotate-3 hover:rotate-0 transition-transform duration-500 hover:z-20">
              <Image src="/images/sessions/foundations-of-wealth.jpeg" className="w-full h-full object-cover" alt="Learning Session" width={400} height={300} />
            </div>

            {/* Image 3: Center */}
            <div className="absolute top-32 left-1/3 w-40 h-52 rounded-xl overflow-hidden shadow-2xl border border-white/10 rotate-6 hover:rotate-0 transition-transform duration-500 z-10">
              <Image src="/images/sessions/circle.jpeg" className="w-full h-full object-cover" alt="Circle Discussion" width={400} height={500} />
            </div>

            {/* Image 4: Bottom Right */}
            <div className="absolute bottom-10 right-12 w-64 h-40 rounded-xl overflow-hidden shadow-2xl border border-white/10 -rotate-2 hover:rotate-0 transition-transform duration-500 hover:z-20">
              <Image src="/images/sessions/markets.jpeg" className="w-full h-full object-cover" alt="Financial Learning" width={600} height={400} />
            </div>

            {/* Image 5: Bottom Left */}
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-xl overflow-hidden shadow-2xl border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500 hover:z-20">
              <Image src="/images/approach/tools-for-action.jpeg" className="w-full h-full object-cover" alt="Tools and Resources" width={400} height={400} />
            </div>
          </div>
          {/* Mobile Fallback for Images */}
          <div className="lg:hidden flex overflow-x-auto gap-4 pb-4 snap-x">
            <Image src="/images/sessions/sistas.jpeg" className="w-64 h-48 object-cover rounded-xl snap-center border border-white/10" alt="Rizq Sistas Community" width={400} height={300} />
            <Image src="/images/sessions/foundations-of-wealth.jpeg" className="w-64 h-48 object-cover rounded-xl snap-center border border-white/10" alt="Learning Session" width={400} height={300} />
            <Image src="/images/sessions/markets.jpeg" className="w-64 h-48 object-cover rounded-xl snap-center border border-white/10" alt="Financial Learning" width={400} height={300} />
          </div>

        </div>
      </section>

      {/* Section: Ways to gather */}
      <section className="py-24 md:py-32 px-6 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-instrument-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none">
            Ways to gather
          </h2>
          <a href="#" className="inline-flex items-center justify-center text-xs font-medium border border-zinc-700 bg-zinc-900 rounded-full px-4 py-1.5 hover:bg-zinc-800 transition-colors">
            Become a host
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {/* Card 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 border border-white/10 relative">
              <Image src="/images/sessions/circle.jpeg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Circle Conversations" width={800} height={600} />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Circle Conversations</h3>
            <p className="text-zinc-400 text-base leading-relaxed">
              Small, facilitated discussions where women speak openly about money, goals, and challenges — without shame or comparison.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 border border-white/10 relative">
              <Image src="/images/sessions/foundations-of-wealth.jpeg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Learning Sessions" width={800} height={600} />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Learning Sessions</h3>
            <p className="text-zinc-400 text-base leading-relaxed">
              Practical workshops on halal investing, budgeting, business, and financial planning — grounded in Islamic principles.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 border border-white/10 relative">
              <Image src="/images/sessions/markets.jpeg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Guest Conversations" width={800} height={600} />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Guest Conversations</h3>
            <p className="text-zinc-400 text-base leading-relaxed">
              Thoughtful talks with scholars, professionals, and practitioners bridging deen and dunya with clarity and humility.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Support */}
      <section className="py-24 md:py-32 px-6 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-6">
          <div>
            <h2 className="font-instrument-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-6">
              Support for <br />
              Rizq Sistas Hosts
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
              We support women who open space for others — with structure, guidance, and intention.
            </p>
          </div>
          <a href="#" className="inline-flex items-center justify-center text-xs font-medium border border-zinc-700 bg-zinc-900 rounded-full px-4 py-1.5 hover:bg-zinc-800 transition-colors mt-2">
            Become a host
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          
          {/* Support Item 1 */}
          <div className="group">
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-5 border border-white/10">
              <Image src="/images/approach/tools-for-action.jpeg" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Resources" width={800} height={450} />
            </div>
            <h3 className="text-lg font-medium text-white mb-1">Free resources for hosts</h3>
            <p className="text-zinc-400 text-base">Access discussion prompts, facilitation guides, and community principles to help you host with confidence.</p>
          </div>

          {/* Support Item 2 */}
          <div className="group">
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-5 border border-white/10">
              <Image src="/images/approach/image01.jpg" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Guidance" width={800} height={450} />
            </div>
            <h3 className="text-lg font-medium text-white mb-1">Guidance & planning support</h3>
            <p className="text-zinc-400 text-base">From setting the tone to structuring sessions, we help you create gatherings that feel purposeful and welcoming.</p>
          </div>

          {/* Support Item 3 */}
          <div className="group">
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-5 border border-white/10">
              <Image src="/images/sessions/rizq-circle.jpeg" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Community Standards" width={800} height={450} />
            </div>
            <h3 className="text-lg font-medium text-white mb-1">Community standards</h3>
            <p className="text-zinc-400 text-base">All gatherings are rooted in adab, trust, and shared values — ensuring safe, respectful spaces for learning and growth.</p>
          </div>

        </div>
      </section>

      {/* Luma Events Integration */}
      <UpcomingEventsSection />

      {/* Footer / Apply Section */}
      <section className="relative mt-20 border-t border-white/10 bg-[#050505] overflow-hidden">
        
        {/* Background Grid of Images with Overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Staggered Grid of Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 w-full h-full opacity-40 grayscale-[50%]">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-6 -mt-10">
              <Image src="/images/sessions/sistas.jpeg" className="w-full h-64 object-cover rounded-xl bg-zinc-800" alt="" width={600} height={640} />
              <Image src="/images/sessions/foundations-of-wealth.jpeg" className="w-full h-48 object-cover rounded-xl bg-zinc-800" alt="" width={600} height={480} />
              <Image src="/images/sessions/circle.jpeg" className="w-full h-64 object-cover rounded-xl bg-zinc-800" alt="" width={600} height={640} />
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-6 md:pt-16">
              <Image src="/images/sessions/markets.jpeg" className="w-full h-56 object-cover rounded-xl bg-zinc-800" alt="" width={600} height={560} />
              <Image src="/images/approach/tools-for-action.jpeg" className="w-full h-72 object-cover rounded-xl bg-zinc-800" alt="" width={600} height={720} />
              <Image src="/images/sessions/rizq-circle.jpeg" className="w-full h-48 object-cover rounded-xl bg-zinc-800" alt="" width={600} height={480} />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6 -mt-8 hidden md:flex">
              <Image src="/images/approach/image01.jpg" className="w-full h-64 object-cover rounded-xl bg-zinc-800" alt="" width={600} height={640} />
              <Image src="/images/hero/backs.jpg" className="w-full h-56 object-cover rounded-xl bg-zinc-800" alt="" width={600} height={560} />
              <Image src="/images/hero/hike.jpg" className="w-full h-64 object-cover rounded-xl bg-zinc-800" alt="" width={600} height={640} />
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-6 md:pt-12 hidden md:flex">
              <Image src="/images/sessions/sistas.jpeg" className="w-full h-60 object-cover rounded-xl bg-zinc-800" alt="" width={600} height={600} />
              <Image src="/images/sessions/foundations-of-wealth.jpeg" className="w-full h-64 object-cover rounded-xl bg-zinc-800" alt="" width={600} height={640} />
              <Image src="/images/sessions/circle.jpeg" className="w-full h-56 object-cover rounded-xl bg-zinc-800" alt="" width={600} height={560} />
            </div>
          </div>
          
          {/* Dark Overlay and Gradients for fading effect */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#050505] to-transparent"></div>
        </div>

        <div className="relative z-10 pt-20 pb-32 px-6">
          
          {/* Application Form Card */}
          <div className="max-w-xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl relative">
            <div className="mb-6">
              <PenTool className="w-6 h-6 text-white mb-4" />
              <h3 className="text-2xl font-medium text-white mb-2">Host a Rizq Sistas Gathering</h3>
              <p className="text-zinc-400 text-sm mb-2">If you feel called to bring women together in your city or community, we&apos;d love to support you.</p>
              <p className="text-zinc-400 text-sm">You don&apos;t need to be an expert — just grounded, intentional, and committed to creating space for growth.</p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Full name</label>
                  <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" placeholder="Full name" />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Email</label>
                  <input type="email" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" placeholder="Email" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Role</label>
                  <div className="relative">
                    <select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-zinc-600 appearance-none cursor-pointer">
                      <option>Expert</option>
                      <option>Beginner</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-zinc-500 absolute right-3 top-2.5 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">City</label>
                  <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" placeholder="City" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Portfolio URL</label>
                <input type="url" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" placeholder="https://" />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Event Description</label>
                <textarea rows={3} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700 resize-none" placeholder="Describe the type of event you would like to host..."></textarea>
              </div>

              <button className="bg-white text-black text-sm font-semibold rounded-lg px-6 py-2 hover:bg-zinc-200 transition-colors mt-2">
                Apply to Host
              </button>
            </form>
          </div>

          {/* Footer Links */}
          <div className="max-w-[1400px] mx-auto mt-24 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 text-xs">
            
            <div className="col-span-2 md:col-span-2 lg:col-span-2 pr-10">
              <Image 
                src="/logo/logo.png" 
                alt="Rizq Sistas Logo" 
                width={40} 
                height={40} 
                className="w-10 h-10 mb-6"
              />
              <div className="flex gap-4 mb-4">
                <a href="#" className="text-zinc-500 hover:text-white"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="text-zinc-500 hover:text-white"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="text-zinc-500 hover:text-white"><Youtube className="w-4 h-4" /></a>
              </div>
              <div className="text-zinc-600 mb-2">
                © 2024 Rizq Sistas.
              </div>
              <div className="text-zinc-600 leading-relaxed">
                A women-led community building financial clarity, confidence, and barakah — together.
                <br /><br />
                Grounded in faith.<br />
                Guided by intention.<br />
                Strengthened through sisterhood.
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-white">Product</h4>
              <ul className="space-y-2 text-zinc-500">
                <li><a href="#" className="hover:text-white">AI</a></li>
                <li><a href="#" className="hover:text-white">Design</a></li>
                <li><a href="#" className="hover:text-white">Publish</a></li>
                <li><a href="#" className="hover:text-white">CMS</a></li>
                <li><a href="#" className="hover:text-white">Scale</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-white">Compare</h4>
              <ul className="space-y-2 text-zinc-500">
                <li><a href="#" className="hover:text-white">Figma</a></li>
                <li><a href="#" className="hover:text-white">Webflow</a></li>
                <li><a href="#" className="hover:text-white">Wordpress</a></li>
                <li><a href="#" className="hover:text-white">Squarespace</a></li>
                <li><a href="#" className="hover:text-white">Wix</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-white">Resources</h4>
              <ul className="space-y-2 text-zinc-500">
                <li><a href="#" className="hover:text-white">Templates</a></li>
                <li><a href="#" className="hover:text-white">Plugins</a></li>
                <li><a href="#" className="hover:text-white">Vectors</a></li>
                <li><a href="#" className="hover:text-white">Marketplace</a></li>
                <li><a href="#" className="hover:text-white">Downloads</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-zinc-500">
                <li><a href="#" className="hover:text-white">Meetups</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
