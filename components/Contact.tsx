import Link from "next/link";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:amandithathsaraniuni1@gmail.com";
  };

  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      {/* <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What’s Next?
      </p> */}
      <h2 className="mb-4 font-serif text-5xl font-semibold">Get In Touch</h2>
      <p className="font-serif max-w-[600px] text-center text-textDark">
        Get in touch! If you have any questions or feedback, feel free to reach out. I&apos;d love to hear from you!
      </p>

      <button
        onClick={handleEmailClick}
        className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300"
      >
        Say Hello
      </button>
    </section>
  );
};

export default Contact;
