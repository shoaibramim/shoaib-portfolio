import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { testimonialsData } from "../../data/portfolioData";

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
                <svg
                  className="absolute top-4 right-4 w-8 h-8 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <div className="flex items-center mb-4">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? "fill-current" : "text-gray-600"}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
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
