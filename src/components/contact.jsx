function ContactSection() {
    return (
        <section
        id="contact-section"
        className="pb-20 px-6 md:px-12 lg:px-20 bg-black text-[#9f9f9f]"
        >
        {/* Header */}
        <div className="text-center mb-20">
            <h1 className="text-3xl md:text-5xl pb-2 font-bold">Get in Touch</h1>
            <p className="mt-2 text-lg">
            Let's discuss opportunities and collaborate on exciting projects
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-semibold mb-2">Let's Connect</h2>
                <p className="">
                I'm always open to exciting opportunities—be it a challenging
                project, a collaborative venture, or simply a meaningful
                conversation about technology. Don't hesitate to get in touch!
                </p>
            </div>

            {/* Links */}
            <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-center gap-4 bg-[#0e0e0e] text-white p-3 rounded-lg shadow-none hover:shadow-[0_4px_15px_rgba(255,255,255,0.3)] transition">
                <a
                    href="https://wa.me/917023892505?text=Hello!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 text-3xl"
                >
                    <i className="fa fa-whatsapp text-green-700"></i>
                </a>
                <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <span className="text-gray-600 text-sm">
                    Direct Message me on WhatsApp
                    </span>
                </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-4 bg-[#0e0e0e] text-white p-3 rounded-lg shadow-none hover:shadow-[0_4px_15px_rgba(255,255,255,0.3)] transition">
                <a
                    href="https://www.linkedin.com/in/deepak-saini-59216a206/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-3xl"
                >
                    <i className="fa fa-linkedin"></i>
                </a>
                <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <span className="text-gray-600 text-sm">
                    Connect over LinkedIn
                    </span>
                </div>
                </div>

                {/* Mail */}
                <div className="flex items-center gap-4 bg-[#0e0e0e] text-white p-3 rounded-lg shadow-none hover:shadow-[0_4px_15px_rgba(255,255,255,0.3)] transition">
                <a
                    href="mailto:deepak170602@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 text-3xl"
                >
                    <i className="fa fa-envelope"></i>
                </a>
                <div>
                    <h4 className="font-semibold">Mail</h4>
                    <span className="text-gray-600 text-sm">
                    deepak170602@gmail.com
                    </span>
                </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-4 bg-[#0e0e0e] text-white p-3 rounded-lg shadow-none hover:shadow-[0_4px_15px_rgba(255,255,255,0.3)] transition">
                <a
                    href="https://github.com/176deepak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 text-3xl"
                >
                    <i className="fa fa-github"></i>
                </a>
                <div>
                    <h4 className="font-semibold">GitHub</h4>
                    <span className="text-gray-600 text-sm">Explore my work</span>
                </div>
                </div>
            </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#0e0e0e] p-6 rounded-xl shadow-lg">
            <h1 className="text-2xl font-semibold mb-4 text-[#ffffff]">Send a Message</h1>
            <form
                action="https://api.web3forms.com/submit"
                method="POST"
                id="form"
                className="space-y-4"
            >
                <input
                type="hidden"
                name="access_key"
                value="78cab654-4403-40da-b796-175a14ce32d3"
                className="bg-black"
                />

                <input
                type="text"
                name="name"
                required
                placeholder="Name..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E2225] bg-black"
                />
                <input
                type="email"
                name="email"
                required
                placeholder="Email..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E2225] bg-black"
                />
                <textarea
                name="message"
                required
                placeholder="Message..."
                rows="5"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E2225] bg-black"
                ></textarea>

                <div className="w-full">
                <div
                    className="h-captcha"
                    data-captcha="true"
                    data-sitekey="your-hcaptcha-site-key"
                    style={{ display: "block", margin: "auto", width: "100%" }}
                ></div>
                </div>

                <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                />

                <div>
                <button
                    type="submit"
                    className="w-full bg-[#0091ff] text-white py-3 rounded-lg hover:bg-gray-800 transition"
                >
                    Submit
                </button>
                </div>
            </form>
            </div>
        </div>
        </section>
    );
}

export default ContactSection;
