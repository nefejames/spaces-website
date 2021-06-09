import styled from "styled-components";
import Image from "next/image";
import { SemiBoldText, SmallText } from "../styles/styles";
import { SectionLayout } from "../Layout";
import { TestimonialCard } from "../components/Cards";

const testimonialsData = [
  {
    id: 1,
    review:
      "Every single person comes away and says - wow that's a really slick experience, that was so easy to use. I feel so much less stressed as I now know we're doing everything by the book.",
    name: "Monkey D Luffy",
    position: "CEO, Pirates Schibukai",
    imageUrl: "/images/avatars/avatar1.jpg",
  },
  {
    id: 2,
    review:
      "I feel so much less stressed  as I now know we're doing everything by the book.",
    name: "Nico Robin",
    position: "COO, Amazon Enterprises",
    imageUrl: "/images/avatars/avatar2.jpg",
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
