"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Calendar, DollarSign, Instagram, MessageSquare, Scissors, Sparkles, Star, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Classic Cuts Barbershop"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Premium Barbershop Experience"
          description="Where traditional craftsmanship meets modern style. Book your appointment for the finest haircut and grooming services in town."
          tag="Est. 2010"
          tagIcon={Award}
          buttons={[
            {
              text: "Book Appointment",
              href: "contact"
            },
            {
              text: "View Services",
              href: "feature"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/4969838/pexels-photo-4969838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Classic Cuts Barbershop interior"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Us"
          description={[
            "For over a decade, Classic Cuts has been the premier destination for discerning gentlemen who appreciate quality grooming.",
            "Our master barbers combine time-honored techniques with contemporary styles to deliver exceptional results every time."
          ]}
          buttons={[
            {
              text: "Meet Our Team",
              href: "team"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Our Services"
          description="Professional grooming services tailored to the modern gentleman"
          tag="Services"
          tagIcon={Scissors}
          features={[
            {
              title: "Classic Haircuts",
              description: "Precision cuts using traditional techniques and modern styling for a timeless look",
              icon: Scissors
            },
            {
              title: "Beard Trimming",
              description: "Expert beard shaping and maintenance to complement your facial structure perfectly",
              icon: Zap
            },
            {
              title: "Hot Towel Shaves",
              description: "Luxurious straight razor shaves with hot towel treatment for the ultimate experience",
              icon: Sparkles
            },
            {
              title: "Hair Styling",
              description: "Professional styling with premium products to achieve your desired look",
              icon: Star
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Service Pricing"
          description="Quality grooming at fair prices with no hidden fees"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "haircut",
              badge: "Most Popular",
              badgeIcon: Scissors,
              price: "$35",
              subtitle: "Classic precision haircut",
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "feature"
                }
              ],
              features: [
                "Consultation included",
                "Wash and style",
                "Hot towel finish",
                "30-day style guarantee"
              ]
            },
            {
              id: "full-service",
              badge: "Premium",
              badgeIcon: Sparkles,
              price: "$65",
              subtitle: "Complete grooming package",
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Details",
                  href: "feature"
                }
              ],
              features: [
                "Haircut and wash",
                "Beard trim and shape",
                "Hot towel treatment",
                "Premium styling products",
                "Complimentary beverage"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Don't just take our word for it - hear from our satisfied customers"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Michael Anderson",
              role: "Business Executive",
              company: "Tech Solutions Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/450214/pexels-photo-450214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Anderson portrait",
              content: "Outstanding service every time! Marcus and his team always deliver exactly what I'm looking for. The attention to detail is incredible."
            },
            {
              id: "2",
              name: "James Rodriguez",
              role: "Marketing Director",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Rodriguez portrait",
              content: "Best barbershop in town! The hot towel shave is absolutely luxurious. Worth every penny for the premium experience."
            },
            {
              id: "3",
              name: "David Chen",
              role: "Entrepreneur",
              company: "StartupVentures",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7562140/pexels-photo-7562140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Chen portrait",
              content: "Professional, skilled, and friendly. I've been coming here for 3 years and wouldn't go anywhere else. Highly recommended!"
            },
            {
              id: "4",
              name: "Robert Wilson",
              role: "Finance Manager",
              company: "Investment Group",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Robert Wilson portrait",
              content: "Classic Cuts delivers consistency and quality every visit. The traditional techniques combined with modern style is perfect."
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Master Barbers"
          description="Experienced professionals dedicated to delivering exceptional grooming services"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "Master Barber & Owner",
              imageSrc: "https://images.pexels.com/photos/3831164/pexels-photo-3831164.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Johnson portrait",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/marcuscuts"
                }
              ]
            },
            {
              id: "2",
              name: "Tony Rodriguez",
              role: "Senior Barber",
              imageSrc: "https://images.pexels.com/photos/7697436/pexels-photo-7697436.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Tony Rodriguez portrait",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/tonythebarber"
                }
              ]
            },
            {
              id: "3",
              name: "Alex Thompson",
              role: "Barber & Stylist",
              imageSrc: "https://images.pexels.com/photos/7518740/pexels-photo-7518740.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alex Thompson portrait",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/alexcuts"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our services and appointments"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "Do I need to make an appointment?",
              content: "While walk-ins are welcome, we highly recommend booking an appointment to ensure your preferred time slot and barber availability."
            },
            {
              id: "2",
              title: "How long does a typical haircut take?",
              content: "A standard haircut takes approximately 45 minutes, including consultation, cut, wash, and styling. Full-service packages may take up to 90 minutes."
            },
            {
              id: "3",
              title: "What forms of payment do you accept?",
              content: "We accept cash, all major credit cards, and digital payments including Apple Pay and Google Pay for your convenience."
            },
            {
              id: "4",
              title: "Do you offer hair washing services?",
              content: "Yes, all our haircut services include a complimentary wash and conditioning treatment with premium products."
            },
            {
              id: "5",
              title: "Can you work with all hair types?",
              content: "Absolutely! Our experienced barbers are skilled in working with all hair types and textures, from straight to curly, thick to fine."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Book Now"
          tagIcon={Calendar}
          title="Schedule Your Appointment"
          description="Ready for a fresh new look? Book your appointment today and experience the Classic Cuts difference."
          inputPlaceholder="Enter your email"
          buttonText="Book Appointment"
          termsText="By booking, you agree to our cancellation policy. 24-hour notice required for changes."
          imageSrc="https://images.pexels.com/photos/7697232/pexels-photo-7697232.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Classic Cuts Barbershop interior"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Haircuts",
                  href: "feature"
                },
                {
                  label: "Beard Trimming",
                  href: "feature"
                },
                {
                  label: "Hot Towel Shaves",
                  href: "feature"
                },
                {
                  label: "Hair Styling",
                  href: "feature"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "Reviews",
                  href: "testimonial"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Book Appointment",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "contact"
                },
                {
                  label: "FAQ",
                  href: "faq"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Classic Cuts Barbershop. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}