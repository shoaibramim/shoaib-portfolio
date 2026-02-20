import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { testimonialsData } from "../../data/portfolioData";
import {
  MdFormatQuote,
  MdStar,
  MdStarOutline,
  MdOpenInNew,
} from "react-icons/md";

export const Reviews: React.FC = () => {
  return (
    <Section id="reviews" title="Beyond Development">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:gap-24 gap-16">
        {/* Left Column: Freelancing and Stuff */}
        <div className="space-y-12">
          {/* Freelancing */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">
              Video Editing and Graphics Designing
            </h3>
            <div className="bg-bgSecondary p-6 rounded-2xl border border-gray-800 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
              <h4 className="text-xl font-semibold text-accent mb-2">
                Davinci Resolve Studio and Adobe Tools Expert
              </h4>
              <p className="text-textSecondary mb-4 text-sm leading-relaxed">
                An experienced video editing specialist proficient in DaVinci
                Resolve Studio and Adobe tools. Successfully completed multiple
                projects including short promotional videos from stock footage,
                video podcasts with minimal editing, and detailed sleep-related
                documentaries requiring strict style adherence. Core skills
                include video post-editing, audio mixing, and graphic design,
                applied to create polished visuals and cohesive branding across
                diverse content forms. Committed to high-quality results and
                seamless project workflows.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.upwork.com/freelancers/~01770797642491d376"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white hover:text-accent transition-colors underline underline-offset-4 decoration-gray-700 hover:decoration-accent"
                >
                  Find me on Upwork
                  <span className="inline-block ml-1 align-middle">
                    <MdOpenInNew size={16} />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Stuff */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">
              Pastimes
            </h3>
            <div className="bg-bgSecondary p-6 rounded-2xl border border-gray-800 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
              <h4 className="text-xl font-semibold text-accent mb-2">
                Watching Football, Movies, TV Shows, Anime and Playing Video
                Games!
              </h4>
              <p className="text-textSecondary mb-4 text-sm leading-relaxed">
                I am football geek and my favorite teams are FC Barcelona and
                Argentina. I also love watching movies, TV shows and anime. My
                favorite movie is Avengers: Endgame, favorite anime is Shingeki
                no Kyojin (Attack on Titan), and my favorite TV show is Game of
                Thrones. I also enjoy playing video games that have a strong
                narrative or great combat mechanics, loved playing Ghost of
                Tsushima.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Client Testimonials */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">
            Client Work & Reviews
          </h3>
          <div className="space-y-6">
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative bg-bgSecondary p-6 rounded-2xl border border-gray-800 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              >
                <span className="absolute top-4 right-4 text-gray-800">
                  <MdFormatQuote size={32} />
                </span>
                <div className="flex items-center mb-4">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) =>
                      i < testimonial.rating ? (
                        <span key={i} className="text-accent">
                          <MdStar size={16} />
                        </span>
                      ) : (
                        <span key={i} className="text-gray-600">
                          <MdStarOutline size={16} />
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <p className="text-textSecondary italic mb-4 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
