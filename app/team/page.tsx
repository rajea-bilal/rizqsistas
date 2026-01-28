import Link from "next/link";
import Image from "next/image";
import DynamicNav from "../components/DynamicNav";

const teamMembers = [
  {
    name: "Muna Ibrahim",
    role: "Founder",
    image: "/images/team/muna.jpg",
    bio: "Leads the strategic direction of Rizq Sistas, overseeing vision, growth, and impact across all areas.",
  },
  {
    name: "Manal Wolf",
    role: "Director of Programs & Learning",
    image: "/images/team/manal-wolf.png",
    bio: "Oversees events, courses, and member financial learning journeys, ensuring content is faith-aligned, healing, and high-impact.",
  },
  {
    name: "Hiba Belassouli",
    role: "Advisory Board Member, Education & Economic Reform",
    image: "/images/team/heba.png",
    bio: "Leads ISoc Student Ambassadors and Volunteers, and advises on education reform, youth leadership, and economic empowerment.",
  },
  {
    name: "Nafisa Gudal",
    role: "Advisory Board Member, Environment & Social Impact",
    image: "/images/team/nafisa.png",
    bio: "Advises on sustainability, climate action, and community-led environmental initiatives.",
  },
];

export default function TeamPage() {
  return (
    <>
      <DynamicNav />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Image */}
        <Image 
          src="/images/hero/team-hero.jpeg" 
          alt="Rizq Sistas Team" 
          fill
          className="object-cover grayscale"
          priority
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2118] via-[#1A2118]/90 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full px-8 lg:px-16 py-24">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#C25E30] mb-6 block">
              Our Team
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-normal text-[#F2F4EF] tracking-tight font-playfair mb-8">
              The women behind<br />
              <span className="italic text-[#8f9e85]">Rizq Sistas</span>
            </h1>
            <p className="text-base font-light text-[#F2F4EF]/70 leading-[1.9] max-w-md">
              A collective of passionate women dedicated to supporting Muslim women in stewarding their provision with faith, clarity, and intention.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="lg:px-12 px-6 py-24 bg-[#f6f1eb]">
        <div className="max-w-screen-xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-neutral-400"></div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                Meet the Team
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                {/* Image Container with Hover Overlay */}
                <div className="relative aspect-[3/4] bg-neutral-200 overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  
                  {/* Bio Overlay - appears on hover */}
                  <div className="absolute inset-0 bg-[#1A2118]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-sm font-light text-[#F2F4EF]/90 leading-[1.8]">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="border-t border-neutral-300 pt-4">
                  <h3 className="text-xl font-normal text-neutral-800 tracking-tight font-geist mb-1 group-hover:text-[#C25E30] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="lg:px-12 px-6 py-24 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#C25E30] mb-6 block">
                Join Us
              </span>
              <h2 className="text-4xl md:text-5xl leading-[1.1] font-normal text-neutral-800 tracking-tight font-playfair mb-6">
                Interested in <span className="italic text-neutral-400">contributing?</span>
              </h2>
              <p className="text-base font-light text-neutral-600 leading-[1.9] max-w-lg mb-8">
                We&apos;re always looking for passionate individuals who share our vision of empowering Muslim women. Whether as a facilitator, contributor, or partner.
              </p>
              <Link
                href="/community"
                className="inline-flex items-center text-[10px] uppercase font-medium text-neutral-800 tracking-[0.2em] border-b border-[#C25E30] pb-1 hover:opacity-70 transition-opacity"
              >
                Get in Touch
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-square bg-neutral-100 overflow-hidden">
                <Image
                  src="/images/hero/backs.jpg"
                  alt="Join our team"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="lg:px-12 text-[#F2F4EF] bg-gradient-to-bl from-[#2F3A25] to-[#1A2118] border-[#8F9E85]/20 border-t pt-32 pr-6 pb-16 pl-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-8 mb-40 max-w-[1800px] mx-auto">
          <div className="lg:col-span-4 pr-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C25E30] font-medium mb-4">
              Educate. Connect. Prepare.
            </p>
            <p className="text-base font-light text-[#F2F4EF]/80 italic font-playfair mb-4">
              Stewarding rizq, together.
            </p>
            <p className="text-xs text-[#F2F4EF]/50">UK-founded · Global community</p>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-[11px] uppercase tracking-widest text-[#C25E30] mb-8">About</h5>
            <ul className="space-y-3">
              <li><Link href="/#why-we-exist" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Why We Exist</Link></li>
              <li><Link href="/#our-approach" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Our Approach</Link></li>
              <li><Link href="/team" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Our Team</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-[11px] uppercase tracking-widest text-[#C25E30] mb-8">Connect</h5>
            <ul className="space-y-3">
              <li><Link href="/#events" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Events</Link></li>
              <li><Link href="/community" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Join Community</Link></li>
              <li><Link href="/#resources" className="text-sm font-light text-[#F2F4EF]/70 hover:text-[#F2F4EF] transition-colors">Resources</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1800px] mx-auto mb-10 overflow-visible">
          <h1 className="text-[12.5vw] leading-none uppercase select-none font-light text-[#F2F4EF] tracking-tight font-playfair text-center w-full">
            Rizq Sistas
          </h1>
        </div>

        <div className="max-w-[1800px] mx-auto border-t border-[#8F9E85]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            <Link href="#" className="text-xs text-[#F2F4EF]/60 hover:text-[#F2F4EF]">Privacy Policy</Link>
            <Link href="#" className="text-xs text-[#F2F4EF]/60 hover:text-[#F2F4EF]">Terms of Use</Link>
          </div>
          <div className="text-xs text-[#F2F4EF]/60">© Rizq Sistas</div>
          <div className="flex gap-8">
            <Link href="#" className="text-xs text-[#F2F4EF]/60 hover:text-[#F2F4EF]">Instagram</Link>
            <Link href="#" className="text-xs text-[#F2F4EF]/60 hover:text-[#F2F4EF]">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
