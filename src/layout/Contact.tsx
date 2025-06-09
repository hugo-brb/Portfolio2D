import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
    const formRef = useRef<HTMLFormElement>(null);

    const [nameError, setNameError] = useState<string | null>(null);
    const [mailError, setMailError] = useState<string | null>(null);
    const [messageError, setMessageError] = useState<string | null>(null);

    const validateForm = (): boolean => {
        let valid = true;
        const name = (
            formRef.current?.elements.namedItem(
                "name"
            ) as HTMLInputElement | null
        )?.value.trim();
        const mail = (
            formRef.current?.elements.namedItem(
                "mail"
            ) as HTMLInputElement | null
        )?.value.trim();
        const message = (
            formRef.current?.elements.namedItem(
                "message"
            ) as HTMLTextAreaElement | null
        )?.value.trim();

        setNameError(null);
        setMailError(null);
        setMessageError(null);

        if (!name) {
            setNameError(t("NameError"));
            valid = false;
        }
        if (!mail) {
            setMailError(t("MailError"));
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(mail)) {
            setMailError(t("MailErrorFormat"));
            valid = false;
        }
        if (!message) {
            setMessageError(t("MessageError"));
            valid = false;
        }

        return valid;
    };

    const sendEmail = () => {
        if (!formRef.current) return;

        emailjs
            .sendForm(
                "service_ffvnleb",
                "template_wr3kw9b",
                formRef.current,
                "-p-h0aUqjP1m5OF5E"
            )
            .then((result) => {
                console.log("Email envoyé !", result.text);
                formRef.current?.reset();
            })
            .catch((error) => {
                console.error("Erreur envoi email :", error.text);
            });
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className=" w-screen p-7 flex flex-col bg-[var(--background)]">
            {/* --- Titre --- */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-5xl lg:text-8xl font-bold text-[var(--text)] leading-tight mb-4">
                {t("ContactTitle")}
            </motion.h1>

            {/* --- Séparateur --- */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="border-t-2 border-[var(--gris)] w-1/4 h-1 mx-auto my-4"
            />

            {/* --- Icônes sociales --- */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className=" my-4 text-lg lg:text-xl text-[var(--text)] lg:max-w-[70vw] mx-auto flex gap-12">
                <a
                    href="mailto:hugo.barbieri@mobiteach.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:!bg-gradient-to-l !from-[var(--violet)] !to-[var(--rose)] cursor-pointer form-container !p-1 flex flex-col items-center gap-4">
                    <IoIosMail className="size-12" />
                </a>
                <a
                    href="https://github.com/hugo-brb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:!bg-gradient-to-l !from-[var(--violet)] !to-[var(--rose)] cursor-pointer form-container !p-1 flex flex-col items-center gap-4">
                    <FiGithub className="size-12" />
                </a>
                <a
                    href="https://www.linkedin.com/in/hugo-barbieri-9b37982a1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:!bg-gradient-to-l !from-[var(--violet)] !to-[var(--rose)] cursor-pointer form-container !p-1 flex flex-col items-center gap-4">
                    <FaLinkedinIn className="size-12" />
                </a>
            </motion.div>

            {/* --- Séparateur --- */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="border-t-2 border-[var(--gris)] w-1/4 h-1 mx-auto my-4"
            />

            {/* --- Formulaire --- */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-3xl lg:text-5xl font-bold text-[var(--text)] mb-4 mx-auto">
                {t("ContactForm")}
            </motion.h2>
            <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-lg lg:text-xl text-[var(--text)] lg:max-w-[70vw] mx-auto mb-4">
                {t("ContactText")}
            </motion.h3>
            <motion.form
                ref={formRef}
                onSubmit={(e) => {
                    e.preventDefault();
                    if (validateForm()) {
                        sendEmail();
                    }
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-[var(--dark)] font-bold flex flex-col items-center gap-2 form-container md:mx-auto max-w-[80vw] lg:max-w-[60vw]">
                {/* Champ Name */}
                <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="name">{t("ContactName")}</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder={t("YourName")}
                        className="text-lg w-[60vw] lg:max-w-[40vw] outline-0 rounded-xl p-2 ring-2 focus:ring-[var(--violet)] transition-all duration-300"
                    />
                    {nameError && (
                        <span className="text-red-500 text-sm">
                            {nameError}
                        </span>
                    )}
                </div>

                {/* Champ Company */}
                <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="company">
                        {t("CompanyName")}{" "}
                        <span className="text-[var(--violet)]">
                            {t("Optional")}
                        </span>
                    </label>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder={t("YourCompany")}
                        className="text-lg w-full outline-0 rounded-xl p-2 ring-2 focus:ring-[var(--violet)] transition-all duration-300"
                    />
                </div>

                {/* Champ Email */}
                <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="mail">{t("ContactEmail")}</label>
                    <input
                        id="mail"
                        name="mail"
                        type="email"
                        placeholder={t("YourEmail")}
                        className="text-lg w-full outline-0 rounded-xl p-2 ring-2 focus:ring-[var(--violet)] transition-all duration-300"
                    />
                    {mailError && (
                        <span className="text-red-500 text-sm">
                            {mailError}
                        </span>
                    )}
                </div>

                {/* Champ Message */}
                <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="message">{t("ContactMessage")}</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder={t("YourMessage")}
                        rows={5}
                        className="text-lg w-full outline-0 rounded-xl p-2 ring-2 focus:ring-[var(--violet)] transition-all duration-300"
                    />
                    {messageError && (
                        <span className="text-red-500 text-sm">
                            {messageError}
                        </span>
                    )}
                </div>

                {/* Bouton Submit */}
                <button
                    type="submit"
                    className="px-4 py-2 rounded-lg text-lg font-bold bg-[var(--gris)] hover:bg-white text-white hover:text-[var(--gris)] transition-colors duration-300 cursor-pointer">
                    {t("ContactButton")}
                </button>
            </motion.form>
        </section>
    );
}
