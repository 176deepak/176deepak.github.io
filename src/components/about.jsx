function AboutSection() {
    return (
        <section
        id="about-section"
        className="pb-20 px-6 md:px-12 lg:px-20 bg-black text-[#9f9f9f]"
        >
        <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold border-[#1E2225] inline-block pb-2">
            About Me
            </h1>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
            <div className="md:w-2/3 text-justify">
            <span className="block text-lg font-semibold text-[#e9e9e9] mb-3">
                Hello all!
            </span>
            <p className="leading-relaxed text-base md:text-lg">
                I am Deepak Saini, a passionate explorer and student in the dynamic
                field of Artificial Intelligence and Generative AI. My journey spans
                from mastering traditional Machine Learning techniques to delving
                into cutting-edge Generative AI innovations. With a hands-on
                approach, I've worked on diverse projects, pushing the boundaries of
                AI applications.
                <br />
                <br />
                Driven by a vision to make AI accessible and impactful, I'm actively
                exploring its integration into areas like Android and Web
                Development. My goal is to craft seamless solutions that deliver the
                benefits of AI to end-users with unparalleled efficiency and
                effectiveness.
                <br />
                <br />
                I am committed to leveraging technology to solve real-world
                challenges, constantly learning, and staying at the forefront of
                innovation. Let's connect to create transformative solutions
                together!
            </p>
            </div>

            <div className="md:w-1/3 flex justify-center">
            <img
                src="../assets/about-bg.jpg"
                alt="About background"
                className="hidden md:block rounded-2xl shadow-lg"
            />
            <img
                src="../assets/about-bg-1.jpg"
                alt="About background mobile"
                className="block md:hidden rounded-2xl shadow-lg"
            />
            </div>
        </div>
        </section>
    );
    }

export default AboutSection;
