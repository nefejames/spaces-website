import { SectionLayout } from "../Layout";
import { TestimonialCard } from "../components/Cards";
import avatar1 from "../public/images/avatars/avatar1.jpg";
import avatar2 from "../public/images/avatars/avatar2.jpg";

const testimonialsData = [
  {
    id: 1,
    review:
      "Every single person comes away and says - wow that's a really slick experience, that was so easy to use. I feel so much less stressed as I now know we're doing everything by the book.",
    name: "Monkey D Luffy",
    position: "CEO, Pirates Schibukai",
    img: avatar1,
  },
  {
    id: 2,
    review:
      "I feel so much less stressed  as I now know we're doing everything by the book.",
    name: "Nico Robin",
    position: "COO, Amazon Enterprises",
    img: avatar2,
  },
];

export default function Testimonials() {
  return (
    <SectionLayout smallMargin>
      {testimonialsData.map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </SectionLayout>
  );
}
