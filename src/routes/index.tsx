import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Briefcase,
  Compass,
  Eye,
  HandHeart,
  HeartPulse,
  Lightbulb,
  Mic,
  Sparkles,
  Target,
  Handshake,
  Users,
  UserRound,
  ShieldCheck,
  ScrollText,
  Building2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppCTA } from "@/components/site/WhatsAppCTA";
import { Counter } from "@/components/site/Counter";
import { Testimonials } from "@/components/site/Testimonials";
import hero from "@/assets/hero.jpg";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import founder from "@/assets/founder.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Golden Brains Youth Foundation — Empowering Young Minds" },
      {
        name: "description",
        content:
          "A youth-focused foundation building leaders through education, mentorship, skills and community development. Partner, volunteer or collaborate with us on WhatsApp.",
      },
      {
        property: "og:title",
        content: "Golden Brains Youth Foundation — Empowering Young Minds",
      },
      {
        property: "og:description",
        content:
          "Education, mentorship, skills and community development for the next generation of African leaders.",
      },
    ],
  }),
  component: Index,
});

const focusAreas = [
  {
    Icon: Sparkles,
    title: "Youth Empowerment",
    text: "Programmes that give young people the confidence, tools and networks to shape their own future.",
  },
  {
    Icon: Compass,
    title: "Leadership Development",
    text: "Academies and fellowships that raise principled leaders for schools, campuses and communities.",
  },
  {
    Icon: BookOpen,
    title: "Education Access",
    text: "Learning support, materials and scholarships that keep bright students in the classroom.",
  },
  {
    Icon: Briefcase,
    title: "Skills Acquisition",
    text: "Hands-on vocational and digital training that translates directly into income and dignity.",
  },
  {
    Icon: Users,
    title: "Community Development",
    text: "Locally-led projects designed with residents, not for them, and maintained long after launch.",
  },
  {
    Icon: HandHeart,
    title: "Mentorship",
    text: "One-to-one guidance pairing young people with professionals who stay for the long journey.",
  },
  {
    Icon: UserRound,
    title: "Women & Girl Child",
    text: "Safe spaces, sponsorship and advocacy so girls stay in school and step into leadership.",
  },
  {
    Icon: HeartPulse,
    title: "Health Awareness",
    text: "Outreaches on wellbeing, mental health and preventive care in underserved communities.",
  },
  {
    Icon: Lightbulb,
    title: "Innovation & Enterprise",
    text: "Incubation, seed support and business coaching for young founders solving local problems.",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Youth Empowered" },
  { value: 120, suffix: "+", label: "Community Programmes" },
  { value: 50, suffix: "+", label: "Active Volunteers" },
  { value: 15, suffix: "+", label: "Communities Reached" },
];

const gallery = [
  { src: g1, alt: "Young people raising hands at a leadership summit", w: 800, h: 1000 },
  { src: g2, alt: "Volunteers distributing learning materials to students", w: 800, h: 600 },
  { src: g3, alt: "A young girl smiling while reading in a community library", w: 800, h: 1000 },
  { src: g4, alt: "Health awareness outreach in a rural community", w: 800, h: 600 },
  { src: g5, alt: "Young people in a digital skills training lab", w: 800, h: 900 },
  { src: g6, alt: "A mentor speaking with a young mentee outdoors", w: 800, h: 700 },
];

const helpCards = [
  {
    Icon: HandHeart,
    title: "Become a Volunteer",
    text: "Give your time, skill or weekend to a programme close to your heart.",
    message: "Hello, I would like to volunteer with Golden Brains Youth Foundation.",
    cta: "Volunteer on WhatsApp",
  },
  {
    Icon: Handshake,
    title: "Partner With Us",
    text: "Bring your organisation alongside ours for deeper, measurable community impact.",
    message: "Hello, my organisation is interested in partnering with Golden Brains Youth Foundation.",
    cta: "Discuss a partnership",
  },
  {
    Icon: Award,
    title: "Sponsor a Project",
    text: "Fund a scholarship, a training cohort or a full community programme.",
    message: "Hello, I would like to sponsor a Golden Brains Youth Foundation project.",
    cta: "Sponsor a project",
  },
  {
    Icon: Sparkles,
    title: "Support Our Programmes",
    text: "Back the everyday work — materials, logistics, mentors and follow-up.",
    message: "Hello, I would like to support the programmes of Golden Brains Youth Foundation.",
    cta: "Support our work",
  },
  {
    Icon: Mic,
    title: "Invite the Foundation",
    text: "Have us speak, train or run a session at your school, campus or event.",
    message: "Hello, I would like to invite Golden Brains Youth Foundation to an event.",
    cta: "Send an invitation",
  },
  {
    Icon: Building2,
    title: "Collaborate",
    text: "Co-create research, campaigns or joint initiatives with our team.",
    message: "Hello, I would like to explore a collaboration with Golden Brains Youth Foundation.",
    cta: "Start a conversation",
  },
];

const trust = [
  {
    Icon: ShieldCheck,
    title: "Integrity",
    text: "We do what we said we would do, in the community we said we would do it in.",
  },
  {
    Icon: ScrollText,
    title: "Transparency",
    text: "Every programme is documented and reported to the people and partners behind it.",
  },
  {
    Icon: Users,
    title: "Community Impact",
    text: "Local leaders help design our work, so results outlive our presence.",
  },
  {
    Icon: Sparkles,
    title: "Youth Development",
    text: "Young people are not beneficiaries here — they are decision-makers and facilitators.",
  },
  {
    Icon: Compass,
    title: "Long-Term Vision",
    text: "We measure success in a decade of changed trajectories, not a day of photographs.",
  },
  {
    Icon: Award,
    title: "Professional Leadership",
    text: "A governed board, disciplined operations and experienced programme staff.",
  },
];

const faqs = [
  {
    q: "How do I volunteer with the foundation?",
    a: "Send us a message on WhatsApp telling us your city, availability and the kind of work that interests you. Our volunteer coordinator will share the current openings, the onboarding session dates and what a typical commitment looks like.",
  },
  {
    q: "How can my organisation partner with you?",
    a: "We work with companies, schools, faith communities and other non-profits on co-designed programmes. Message us on WhatsApp and we will schedule a call to align on objectives, scope, timelines and reporting before anything is announced.",
  },
  {
    q: "Where does support go?",
    a: "This website does not collect payments of any kind. All support is arranged directly with our team, and every contribution — whether funds, materials or expertise — is assigned to a named programme with documented outcomes shared back to the supporter.",
  },
  {
    q: "How can we invite the foundation to an event?",
    a: "Send the event details, date, audience and location on WhatsApp. We regularly speak at schools, universities, youth conferences and community forums, and we will confirm availability within a few working days.",
  },
  {
    q: "Do you work outside your current communities?",
    a: "Yes. We expand where there is a committed local partner and a clear need. Reach out with the community context and we will assess it against our programme calendar.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[92vh] overflow-hidden bg-navy">
        <img
          src={hero}
          alt="Young people standing together at golden hour, hopeful and confident"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/35" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pt-32 pb-24 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-gold">Golden Brains Youth Foundation</p>
            <h1 className="mt-6 text-4xl leading-[1.05] text-background sm:text-6xl lg:text-7xl">
              Empowering young minds.
              <span className="block text-gold">Transforming communities.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-background/75 sm:text-lg">
              We find brilliance where the world rarely looks for it — and we stay long enough to
              see it grow. Through education, mentorship, skills and community-led projects, we help
              young people become the leaders their communities have been waiting for.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <WhatsAppCTA message="Hello, I would like to support the mission of Golden Brains Youth Foundation.">
                Support Our Mission
              </WhatsAppCTA>
              <WhatsAppCTA
                variant="outline"
                className="text-background"
                message="Hello, I would like to partner with Golden Brains Youth Foundation."
              >
                Partner With Us
              </WhatsAppCTA>
            </div>
          </Reveal>

          <Reveal delay={220} className="mt-20 grid gap-8 border-t border-background/15 pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-gold">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs tracking-[0.14em] text-background/60 uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative">
            <img
              src={about1}
              alt="A mentor teaching attentive students in a bright classroom"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
            <img
              src={about2}
              alt="A young woman learning a practical trade skill"
              width={1024}
              height={800}
              loading="lazy"
              className="absolute -bottom-10 -right-4 hidden w-1/2 rounded-2xl border-4 border-background object-cover shadow-lift sm:block"
            />
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow gold-rule text-gold">Who We Are</p>
            <h2 className="mt-6 text-3xl leading-tight text-navy sm:text-5xl">
              Talent is everywhere. Opportunity is not.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Golden Brains Youth Foundation was founded on a simple conviction: no young person
                should lose their future to a postcode. Across the communities we serve, we meet
                students with extraordinary capability and almost no scaffolding around them — no
                mentor, no materials, no map.
              </p>
              <p>
                So we build the scaffolding. We run leadership academies, keep bright students in
                school, teach practical and digital skills, and place experienced mentors beside
                young people for years, not weeks. Every programme is designed with the community
                that will carry it forward.
              </p>
              <p>
                The result is not charity. It is capacity — young leaders who employ their peers,
                teach the next cohort and change what their community believes is possible.
              </p>
            </div>
            <div className="mt-9">
              <WhatsAppCTA
                variant="navy"
                message="Hello, I would like to learn more about the work of Golden Brains Youth Foundation."
              >
                Learn more about our work
              </WhatsAppCTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-secondary/60 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow gold-rule text-gold">Our Compass</p>
            <h2 className="mt-6 text-3xl leading-tight text-navy sm:text-5xl">
              What we are building, and how we build it.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {[
              {
                Icon: Eye,
                label: "Vision",
                title: "A generation of young Africans leading with skill and integrity.",
                text: "We see communities where every capable young person has a mentor, a marketable skill and a seat at the table where decisions about their future are made.",
              },
              {
                Icon: Target,
                label: "Mission",
                title: "To equip young people through education, mentorship and enterprise.",
                text: "We deliver structured, measurable programmes in education, leadership, skills and health — designed with local partners and sustained through long-term relationships.",
              },
            ].map((card, i) => (
              <Reveal
                key={card.label}
                delay={i * 140}
                className="group rounded-3xl border border-border bg-background p-10 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold transition-transform duration-500 group-hover:scale-105">
                  <card.Icon size={24} />
                </span>
                <p className="eyebrow mt-8 text-gold">{card.label}</p>
                <h3 className="mt-4 text-2xl leading-snug text-navy">{card.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{card.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section id="focus" className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
        <Reveal className="max-w-2xl">
          <p className="eyebrow gold-rule text-gold">Focus Areas</p>
          <h2 className="mt-6 text-3xl leading-tight text-navy sm:text-5xl">
            Nine disciplines. One outcome.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Our programmes are deliberately connected — a student we keep in school is the same
            young person we mentor, train and later fund into enterprise.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, i) => (
            <Reveal
              key={area.title}
              delay={(i % 3) * 110}
              className="group rounded-3xl border border-border bg-background p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-navy transition-colors duration-500 group-hover:bg-gold">
                <area.Icon size={20} />
              </span>
              <h3 className="mt-6 text-xl text-navy">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="bg-navy py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow gold-rule text-gold">Our Impact</p>
            <h2 className="mt-6 text-3xl leading-tight text-background sm:text-5xl">
              Numbers that represent names.
            </h2>
            <p className="mt-6 leading-relaxed text-background/70">
              Behind each figure is a young person we can call, a family that noticed the change and
              a community that decided to keep the programme running.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 110}
                className="border-t border-background/15 pt-8"
              >
                <p className="font-display text-5xl text-gold sm:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm tracking-[0.12em] text-background/65 uppercase">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
        <Reveal className="max-w-2xl">
          <p className="eyebrow gold-rule text-gold">Gallery</p>
          <h2 className="mt-6 text-3xl leading-tight text-navy sm:text-5xl">
            Moments from the field.
          </h2>
        </Reveal>

        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {gallery.map((img, i) => (
            <Reveal key={img.alt} delay={(i % 3) * 110} className="break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-3xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/85 via-navy/10 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-sm text-background">{img.alt}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section id="founder" className="bg-secondary/60 py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[0.85fr_1fr] lg:px-8">
          <Reveal>
            <img
              src={founder}
              alt="Portrait of the founder of Golden Brains Youth Foundation"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={140}>
            <p className="eyebrow gold-rule text-gold">Meet the Founder</p>
            <h2 className="mt-6 text-3xl leading-tight text-navy sm:text-5xl">
              “I was the boy with the books and no bookshelf.”
            </h2>
            <div className="mt-7 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Golden Brains began in a two-room flat with nine students and a borrowed whiteboard.
                Our founder had watched too many brilliant classmates disappear from school — not
                for lack of ability, but for lack of someone standing behind them.
              </p>
              <p>
                Today the foundation runs across multiple communities, but the principle has not
                changed: know each young person by name, stay past the difficult season, and hand
                them the tools rather than the outcome.
              </p>
              <p>
                “Our ambition for the next decade is simple. Every community we enter should, in
                time, no longer need us — because the young people we trained are now the mentors,
                the employers and the leaders.”
              </p>
            </div>
            <p className="mt-8 font-display text-xl text-navy">Emmanuel A. Okonkwo</p>
            <p className="text-sm text-muted-foreground">Founder & Executive Director</p>
            <div className="mt-8">
              <WhatsAppCTA message="Hello, I would like to reach the founder of Golden Brains Youth Foundation.">
                Reach the founder's office
              </WhatsAppCTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW YOU CAN HELP */}
      <section id="help" className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
        <Reveal className="max-w-2xl">
          <p className="eyebrow gold-rule text-gold">How You Can Help</p>
          <h2 className="mt-6 text-3xl leading-tight text-navy sm:text-5xl">
            Choose the way you want to stand with us.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Every conversation starts on WhatsApp with a real member of our team — no forms, no
            queues, no payment pages.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {helpCards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={(i % 3) * 110}
              className="group flex flex-col rounded-3xl border border-border bg-background p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold">
                <card.Icon size={20} />
              </span>
              <h3 className="mt-6 text-xl text-navy">{card.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {card.text}
              </p>
              <WhatsAppCTA variant="link" message={card.message} className="mt-6 self-start">
                {card.cta} →
              </WhatsAppCTA>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY PEOPLE SUPPORT US */}
      <section className="bg-secondary/60 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow gold-rule text-gold">Why People Support Us</p>
            <h2 className="mt-6 text-3xl leading-tight text-navy sm:text-5xl">
              Trust is earned quietly, over years.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {trust.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 100} className="flex gap-5">
                <item.Icon size={22} className="mt-1 shrink-0 text-gold" />
                <div className="min-w-0">
                  <h3 className="text-lg text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
        <Reveal>
          <Testimonials />
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-5 pb-28 lg:px-8 lg:pb-36">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow gold-rule text-gold">FAQ</p>
            <h2 className="mt-6 text-3xl leading-tight text-navy sm:text-4xl">
              Questions we are asked most.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Still unsure about something? Ask us directly — we answer every message.
            </p>
            <WhatsAppCTA
              variant="navy"
              className="mt-8"
              message="Hello, I have a question about Golden Brains Youth Foundation."
            >
              Ask a question
            </WhatsAppCTA>
          </Reveal>

          <Reveal delay={120}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="py-6 text-left font-display text-lg text-navy hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy py-28 lg:py-36">
        <Reveal className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className="eyebrow text-gold">Join the movement</p>
          <h2 className="mt-6 text-3xl leading-tight text-background sm:text-5xl">
            Somewhere nearby, a brilliant young mind is waiting for one person to believe in them.
          </h2>
          <p className="mt-7 leading-relaxed text-background/70">
            Be that person. Volunteer, partner, sponsor a programme or simply start a conversation —
            it takes one message.
          </p>
          <div className="mt-10 flex justify-center">
            <WhatsAppCTA
              className="px-10 py-4 text-base"
              message="Hello Golden Brains Youth Foundation, I would like to be part of the movement."
            >
              Message us on WhatsApp
            </WhatsAppCTA>
          </div>
        </Reveal>
      </section>
    </>
  );
}
