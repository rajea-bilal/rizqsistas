import React from 'react';
import Image from 'next/image';
import { Calendar, BookOpen, Users, MapPin, ChevronRight, ChevronDown, PenTool, Twitter, Instagram, Youtube } from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="bg-[#050505] text-white antialiased font-geist selection:bg-white selection:text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-black/50">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {/* Logo */}
            <Image 
              src="/logo/logo.png" 
              alt="Rizq Sistas Logo" 
              width={48} 
              height={48} 
              className="w-12 h-12"
            />
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
              <img src="https://via.placeholder.com/400x600/333/fff?text=Community" className="w-full h-full object-cover" alt="Community" />
            </div>

            {/* Image 2: Center Left */}
            <div className="absolute top-12 left-10 w-56 h-40 rounded-xl overflow-hidden shadow-2xl border border-white/10 -rotate-3 hover:rotate-0 transition-transform duration-500 hover:z-20">
              <img src="https://via.placeholder.com/400x300/444/fff?text=Meeting" className="w-full h-full object-cover" alt="Meeting" />
            </div>

            {/* Image 3: Center */}
            <div className="absolute top-32 left-1/3 w-40 h-52 rounded-xl overflow-hidden shadow-2xl border border-white/10 rotate-6 hover:rotate-0 transition-transform duration-500 z-10">
              <img src="https://via.placeholder.com/400x500/555/fff?text=Discussion" className="w-full h-full object-cover" alt="Discussion" />
            </div>

            {/* Image 4: Bottom Right */}
            <div className="absolute bottom-10 right-12 w-64 h-40 rounded-xl overflow-hidden shadow-2xl border border-white/10 -rotate-2 hover:rotate-0 transition-transform duration-500 hover:z-20">
              <img src="https://via.placeholder.com/600x400/666/fff?text=Presentation" className="w-full h-full object-cover" alt="Presentation" />
            </div>

            {/* Image 5: Bottom Left */}
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-xl overflow-hidden shadow-2xl border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500 hover:z-20">
              <img src="https://via.placeholder.com/400x400/777/fff?text=Workspace" className="w-full h-full object-cover" alt="Workspace" />
            </div>
          </div>
          {/* Mobile Fallback for Images */}
          <div className="lg:hidden flex overflow-x-auto gap-4 pb-4 snap-x">
            <img src="https://via.placeholder.com/400x300/333/fff?text=Community" className="w-64 h-48 object-cover rounded-xl snap-center border border-white/10" alt="Community" />
            <img src="https://via.placeholder.com/400x300/444/fff?text=Meeting" className="w-64 h-48 object-cover rounded-xl snap-center border border-white/10" alt="Meeting" />
            <img src="https://via.placeholder.com/400x300/555/fff?text=Presentation" className="w-64 h-48 object-cover rounded-xl snap-center border border-white/10" alt="Presentation" />
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
              <img src="https://via.placeholder.com/800x600/333/fff?text=Circle+Conversations" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Circle Conversations" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Circle Conversations</h3>
            <p className="text-zinc-400 text-base leading-relaxed">
              Small, facilitated discussions where women speak openly about money, goals, and challenges — without shame or comparison.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 border border-white/10 relative">
              <img src="https://via.placeholder.com/800x600/444/fff?text=Learning+Sessions" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Learning Sessions" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Learning Sessions</h3>
            <p className="text-zinc-400 text-base leading-relaxed">
              Practical workshops on halal investing, budgeting, business, and financial planning — grounded in Islamic principles.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 border border-white/10 relative">
              <img src="https://via.placeholder.com/800x600/555/fff?text=Guest+Conversations" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Guest Conversations" />
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
              <img src="https://via.placeholder.com/800x450/333/fff?text=Resources" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Resources" />
            </div>
            <h3 className="text-lg font-medium text-white mb-1">Free resources for hosts</h3>
            <p className="text-zinc-400 text-base">Access discussion prompts, facilitation guides, and community principles to help you host with confidence.</p>
          </div>

          {/* Support Item 2 */}
          <div className="group">
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-5 border border-white/10">
              <img src="https://via.placeholder.com/800x450/444/fff?text=Guidance" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Guidance" />
            </div>
            <h3 className="text-lg font-medium text-white mb-1">Guidance & planning support</h3>
            <p className="text-zinc-400 text-base">From setting the tone to structuring sessions, we help you create gatherings that feel purposeful and welcoming.</p>
          </div>

          {/* Support Item 3 */}
          <div className="group">
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-5 border border-white/10">
              <img src="https://via.placeholder.com/800x450/555/fff?text=Community+Standards" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Community Standards" />
            </div>
            <h3 className="text-lg font-medium text-white mb-1">Community standards</h3>
            <p className="text-zinc-400 text-base">All gatherings are rooted in adab, trust, and shared values — ensuring safe, respectful spaces for learning and growth.</p>
          </div>

        </div>
      </section>

      {/* Section: Upcoming Gatherings */}
      <section className="py-24 md:py-32 px-6 max-w-[1000px] mx-auto">
        <div className="text-center mb-20 relative">
          <h2 className="font-instrument-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-white relative z-10">
            Upcoming <br />
            Gatherings
          </h2>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl md:text-9xl font-instrument-serif text-white/5 whitespace-nowrap blur-sm pointer-events-none select-none">
            Gatherings
          </div>
          <p className="text-zinc-400 text-lg mt-8 relative z-10">
            Join an upcoming Rizq Sistas circle — hosted by women in your city or online.
          </p>
        </div>

        <div className="space-y-4">
          
          {/* Event Card 1 */}
          <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 hover:border-white/20 transition-colors group">
            <div className="flex-1">
              <div className="text-zinc-500 text-sm font-medium mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                14 Jan 2026 Wednesday
              </div>
              
              <h3 className="text-2xl font-instrument-serif mb-4 group-hover:text-zinc-200 transition-colors">Framer Meetups x Baku</h3>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex -space-x-2">
                  <img src="https://via.placeholder.com/100x100/666/fff?text=U" className="w-8 h-8 rounded-full border-2 border-[#0f0f0f]" alt="" />
                  <img src="https://via.placeholder.com/100x100/777/fff?text=S" className="w-8 h-8 rounded-full border-2 border-[#0f0f0f]" alt="" />
                </div>
                <div className="text-sm text-zinc-400">By Ulvin Omarov, Framer & Shelg Allahyarli</div>
              </div>
              
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <MapPin className="w-4 h-4" />
                Genjlik Plaza
              </div>
              
              <div className="mt-4 inline-block px-2 py-0.5 rounded bg-green-900/30 text-green-400 text-[10px] font-mono tracking-wide uppercase">
                AZN 25
              </div>
            </div>
            
            <div className="w-full md:w-48 aspect-video rounded-lg overflow-hidden relative">
              <img src="https://via.placeholder.com/400x225/333/fff?text=Baku" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt="Baku" />
              <div className="absolute bottom-2 left-2 font-bold text-white text-lg">Baku</div>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 hover:border-white/20 transition-colors group">
            <div className="flex-1">
              <div className="text-zinc-500 text-sm font-medium mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                14 Jan 2026 Wednesday
              </div>
              
              <div className="text-xs font-mono text-orange-400 mb-2">17:30 - 19:30 GMT-5</div>
              <h3 className="text-2xl font-instrument-serif mb-4 group-hover:text-zinc-200 transition-colors">Design Space: Framer x Scylla x Station DC</h3>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex -space-x-2">
                  <img src="https://via.placeholder.com/100x100/888/fff?text=M" className="w-8 h-8 rounded-full border-2 border-[#0f0f0f]" alt="" />
                  <img src="https://via.placeholder.com/100x100/999/fff?text=G" className="w-8 h-8 rounded-full border-2 border-[#0f0f0f]" alt="" />
                </div>
                <div className="text-sm text-zinc-400">By Mark Pennypacker, Gretchen Lee...</div>
              </div>
              
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <MapPin className="w-4 h-4" />
                Washington, District of Columbia
              </div>
            </div>
            
            <div className="w-full md:w-48 aspect-video rounded-lg overflow-hidden relative">
              <img src="https://via.placeholder.com/400x225/444/fff?text=DC" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt="DC" />
              <div className="absolute bottom-2 left-2 font-bold text-white text-lg leading-none">Design<br />Space</div>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 hover:border-white/20 transition-colors group">
            <div className="flex-1">
              <div className="text-zinc-500 text-sm font-medium mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                24 Jan 2026 Saturday
              </div>
              
              <div className="text-xs font-mono text-yellow-400 mb-2">15:00 - 18:00 CET</div>
              <h3 className="text-2xl font-instrument-serif mb-4 group-hover:text-zinc-200 transition-colors">Framer x Katowice</h3>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex -space-x-2">
                  <img src="https://via.placeholder.com/100x100/aaa/fff?text=K" className="w-8 h-8 rounded-full border-2 border-[#0f0f0f]" alt="" />
                </div>
                <div className="text-sm text-zinc-400">By Karolina Hess & Framer</div>
              </div>
              
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <MapPin className="w-4 h-4" />
                Katowice International Conference Centre
              </div>
            </div>
            
            <div className="w-full md:w-48 aspect-video rounded-lg overflow-hidden relative">
              <img src="https://via.placeholder.com/400x225/555/fff?text=Katowice" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt="Katowice" />
              <div className="absolute bottom-2 left-2 font-bold text-white text-lg">Katowice</div>
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <a href="#" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
              Browse all <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer / Apply Section */}
      <section className="relative mt-20 border-t border-white/10 bg-[#050505] overflow-hidden">
        
        {/* Background Grid of Images with Overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Staggered Grid of Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 w-full h-full opacity-40 grayscale-[50%]">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-6 -mt-10">
              <img src="https://via.placeholder.com/600x640/333/fff?text=Img1" className="w-full h-64 object-cover rounded-xl bg-zinc-800" alt="" />
              <img src="https://via.placeholder.com/600x480/444/fff?text=Img2" className="w-full h-48 object-cover rounded-xl bg-zinc-800" alt="" />
              <img src="https://via.placeholder.com/600x640/555/fff?text=Img3" className="w-full h-64 object-cover rounded-xl bg-zinc-800" alt="" />
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-6 md:pt-16">
              <img src="https://via.placeholder.com/600x560/666/fff?text=Img4" className="w-full h-56 object-cover rounded-xl bg-zinc-800" alt="" />
              <img src="https://via.placeholder.com/600x720/777/fff?text=Img5" className="w-full h-72 object-cover rounded-xl bg-zinc-800" alt="" />
              <img src="https://via.placeholder.com/600x480/888/fff?text=Img6" className="w-full h-48 object-cover rounded-xl bg-zinc-800" alt="" />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6 -mt-8 hidden md:flex">
              <img src="https://via.placeholder.com/600x640/999/fff?text=Img7" className="w-full h-64 object-cover rounded-xl bg-zinc-800" alt="" />
              <img src="https://via.placeholder.com/600x560/aaa/fff?text=Img8" className="w-full h-56 object-cover rounded-xl bg-zinc-800" alt="" />
              <img src="https://via.placeholder.com/600x640/bbb/fff?text=Img9" className="w-full h-64 object-cover rounded-xl bg-zinc-800" alt="" />
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-6 md:pt-12 hidden md:flex">
              <img src="https://via.placeholder.com/600x600/ccc/fff?text=Img10" className="w-full h-60 object-cover rounded-xl bg-zinc-800" alt="" />
              <img src="https://via.placeholder.com/600x640/ddd/fff?text=Img11" className="w-full h-64 object-cover rounded-xl bg-zinc-800" alt="" />
              <img src="https://via.placeholder.com/600x560/eee/fff?text=Img12" className="w-full h-56 object-cover rounded-xl bg-zinc-800" alt="" />
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
              <p className="text-zinc-400 text-sm mb-2">If you feel called to bring women together in your city or community, we'd love to support you.</p>
              <p className="text-zinc-400 text-sm">You don't need to be an expert — just grounded, intentional, and committed to creating space for growth.</p>
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
