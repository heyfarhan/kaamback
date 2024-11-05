import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import aboutImg from '../assets/aboutImg.png';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: (direction:any) => ({
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="bg-white px-6 lg:px-24 lg:py-16 py-6">
      <h1 className="text-3xl font-bold text-center lg:text-left text-[#181B38]">About Us</h1>
      <div ref={ref} className="flex lg:flex-row lg:mt-[30px] mt-[40px] flex-col items-center">
        <motion.div
          className="lg:w-2/3 w-full"
          custom="left"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <p className="lg:font-normal tracking-wide font-normal text-lg">
            <span className="font-bold">KAAMBACK</span> is a platform where experienced professionals, including retirees and career-breakers, can find project-based work, offering them a chance to earn extra income by utilizing their vast industry expertise in meaningful short-term engagements. This approach not only provides a flexible way to stay professionally active but also ensures that their deep-seated knowledge and skills continue to make an impactful contribution to various industries. Kaamback thus serves as a gateway for these professionals to engage in rewarding work, matching their experience with the right project, and enabling a seamless blend of earning and expertise-sharing.
            <br /><br />
            Our vision embraces a progressive approach to sabbaticals, viewing them as invaluable opportunities for skill enhancement and personal development. We aim to assure that individuals on sabbaticals have a clear and welcoming pathway back to their careers, enriched with new insights and capabilities. In parallel, we are committed to revolutionizing hiring practices by acknowledging and valuing the distinct strengths and perspectives that those who have taken sabbaticals bring to the table. This approach is key to fostering a dynamic, innovative, and inclusive workplace culture, where diverse experiences are not just recognized but celebrated.
          </p>
        </motion.div>
        <motion.div
          className="lg:w-1/3 flex lg:justify-end w-full lg:mt-0 mt-10 justify-center"
          custom="right"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <img src={aboutImg} className="w-[350px] h-[350px]" alt="About Us" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
