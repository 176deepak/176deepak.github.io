function WorkAreaSection() {
    const skills = [
        { src: "../assets/py.png", alt: "Python" },
        { src: "../assets/sklearn.png", alt: "Scikit-learn" },
        { src: "../assets/tf.png", alt: "TensorFlow" },
        { src: "../assets/pt.png", alt: "PyTorch" },
        { src: "../assets/llm.png", alt: "LLMs" },
        { src: "../assets/flask.png", alt: "Flask" },
        { src: "../assets/fastapi.png", alt: "FastAPI" },
        { src: "../assets/huggingface.png", alt: "HuggingFace" },
    ];

    return (
        <section
        id="work-section"
        className="pb-20 px-6 md:px-12 lg:px-20 bg-black text-[#1E2225]"
        >
        {/* Header */}
        <div className="text-center mb-12">
            <h1 className="text-[#9f9f9f] text-3xl md:text-5xl font-bold border-[#1E2225] inline-block pb-2">
            Work Area
            </h1>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
            {skills.map((skill, index) => (
            <div
                key={index}
                className="flex flex-col items-center justify-center bg-[#0e0e0e] rounded-xl shadow-md hover:shadow-xl transition p-6"
            >
                <img
                src={skill.src}
                alt={skill.alt}
                className="w-16 h-16 object-contain mb-3"
                />
                <p className="text-sm md:text-base font-medium text-[#9f9f9f]">{skill.alt}</p>
            </div>
            ))}
        </div>
        </section>
    );
}

export default WorkAreaSection;
