import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I came from a poor background but after I met with Golden Brains' Youth Foundation, my life changed. They paid for my tailoring education and after 2 years, they supported me to open a shop and also got equipment for me.",
    name: "Amarachi Obi",
    role: "Programme Alumna, Skills Academy",
  },
  {
    quote:
      "We have partnered with many organisations. Golden Brains is one of the very few that reports honestly, shows up early and stays after the cameras leave.",
    name: "Daniel Ekong",
    role: "CSR Lead, Meridian Group",
  },
  {
    quote:
      "Their mentorship programme changed the atmosphere in our school. Attendance rose, and our students now speak about the future with confidence.",
    name: "Mrs. Halima Sule",
    role: "Principal, Unity Community School",
  },
  {
    quote:
      "As a volunteer I expected to give a few weekends. I found a family that treats young people with real dignity. I have not left since.",
    name: "Tobi Adeyemi",
    role: "Volunteer Coordinator",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + count) % count), [count]);

  useEffect(() => {
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
  }, [go]);

  const active = testimonials[index];

  return (
    <div className="mx-auto max-w-3xl text-center">
      <Quote className="mx-auto text-gold" size={32} />
      <blockquote
        key={index}
        className="mt-8 text-2xl leading-snug text-navy transition-opacity duration-500 sm:text-[2rem]"
      >
        “{active.quote}”
      </blockquote>
      <div className="mt-8">
        <p className="text-sm font-semibold text-navy">{active.name}</p>
        <p className="mt-1 text-sm text-muted-foreground">{active.role}</p>
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border text-navy transition-colors hover:border-gold hover:text-gold"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-gold" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border text-navy transition-colors hover:border-gold hover:text-gold"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}