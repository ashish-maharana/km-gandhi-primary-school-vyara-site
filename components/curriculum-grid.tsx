import Image from "next/image";
import type { CurriculumCardItem } from "@/lib/types";

const skillTags: Record<string, string[]> = {
  "Computer Science": ["લોજિક", "ડિજિટલ", "સમस्या ઉકેલ"],
  "Primary Education": ["સાક્ષરતા", "ગણિત આધાર", "આધાર"],
  Science: ["તપાસ", "પ્રયોગ", "શોધ"],
  "Public Speaking": ["આત્મવિશ્વાસ", "અભિવ્યક્તિ", "મંચ કૌશલ્ય"],
  Mathematics: ["તર્ક", "ધારણાઓ", "અનુપ્રયોગ"],
  Languages: ["વાંચન", "લખાણ", "સંચાર"],
};

export function CurriculumGrid({ items }: { items: CurriculumCardItem[] }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="curriculum-card group overflow-hidden rounded-[1.5rem] border-2 border-white bg-white shadow-[0_18px_42px_rgba(21,17,43,0.08)] transition duration-300 hover:-translate-y-1"
        >
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            width={420}
            height={280}
            className="aspect-[4/3] w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-[#15112b]">{item.title}</h3>
            <p className="mt-3 text-sm font-medium leading-6 text-[#5b5570]">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 opacity-90 transition group-hover:opacity-100">
              {(skillTags[item.title] ?? ["ભવિષ્ય તૈયાર", "સર્જનાત્મક", "કેન્દ્રિત"]).map((tag) => (
                <span
                  key={tag}
                  className={`inline-flex -translate-y-1 rounded-full px-2.5 py-1 text-[11px] font-extrabold text-[#15112b] transition duration-300 group-hover:translate-y-0 ${
                    index % 3 === 0 ? "bg-[#ffd84d]" : index % 3 === 1 ? "bg-[#2ee881]" : "bg-[#22c7e8]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}





