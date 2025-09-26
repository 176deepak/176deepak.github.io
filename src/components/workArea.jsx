function WorkAreaSection() {
    const skills = [
        { src: "https://res.cloudinary.com/de9xwcbm1/image/upload/v1758890776/py_ovf4yv.png", alt: "Python" },
        { src: "https://res.cloudinary.com/de9xwcbm1/image/upload/v1758890777/sklearn_bir5x1.png", alt: "Scikit-learn" },
        { src: "https://res.cloudinary.com/de9xwcbm1/image/upload/v1758890777/tf_pw5ffg.png", alt: "TensorFlow" },
        { src: "https://res.cloudinary.com/de9xwcbm1/image/upload/v1758890775/pt_jn030n.png", alt: "PyTorch" },
        { src: "https://res.cloudinary.com/de9xwcbm1/image/upload/v1758890774/llm_eui1ue.png", alt: "LLMs" },
        { src: "https://res.cloudinary.com/de9xwcbm1/image/upload/v1758890778/flask_ukog94.png", alt: "Flask" },
        { src: "https://res.cloudinary.com/de9xwcbm1/image/upload/v1758890772/fastapi_niia7m.png", alt: "FastAPI" },
        { src: "https://res.cloudinary.com/de9xwcbm1/image/upload/v1758890773/huggingface_hxg709.png", alt: "HuggingFace" },
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
