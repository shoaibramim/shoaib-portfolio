import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { cpData, testimonialsData } from "../../data/portfolioData";

export const Research: React.FC = () => {
  return (
    <Section id="research" title="Experience & Research">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column: Research & CP */}
        <div className="space-y-12">
          {/* Research */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">
              Academic Research
            </h3>
            <div className="bg-bgSecondary p-6 rounded-2xl border border-gray-800">
              <h4 className="text-xl font-semibold text-accent mb-2">
                Thesis: Cotton Leaf Disease Detection and Classification Using
                Fine-tuned ResNet50 Architecture
              </h4>
              <p className="text-textSecondary mb-4 text-sm leading-relaxed">
                Fine-tuned and evaluated deep learning models for cotton leaf
                disease detection using Python, TensorFlow, and Scikit-learn
                under varied augmentation, class balancing, dropout, and
                learning rate settings, and deployed the best-performing model
                on Hugging Face Spaces with a Gradio interface, integrating it
                into a React-based web application hosted on Vercel to enable
                image-based inference via APIs.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://drive.google.com/file/d/1GqX_BBJdZYkOvJ7ycFt11dqDwYU3xv4k/view?usp=sharing#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white hover:text-accent transition-colors underline underline-offset-4 decoration-gray-700 hover:decoration-accent"
                >
                  Read Manuscript
                </a>
                <a
                  href="https://huggingface.co/spaces/shoaibramim/CLDD_ResNet50"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white hover:text-accent transition-colors underline underline-offset-4 decoration-gray-700 hover:decoration-accent"
                >
                  View Deployment (Hugging Face)
                </a>
              </div>
            </div>
          </motion.div>

          {/* Competitive Programming */}
          {/* <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Competitive Programming</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cpData.map((cp, idx) => (
                <div key={idx} className="bg-bgPrimary p-4 rounded-xl border border-gray-800 text-center">
                  <div className="text-lg font-bold text-white mb-1">{cp.platform}</div>
                  <div className="text-accent font-semibold">{cp.rating}</div>
                  <div className="text-xs text-gray-500 mt-2">{cp.solved}+ Solved</div>
                </div>
              ))}
            </div>
          </motion.div> */}
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
                className="relative bg-bgSecondary p-6 rounded-2xl border border-gray-800"
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
