import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Education from "../Components/Education";
import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
        <section
            id="about"
            className="min-h-screen w-screen p-7 flex flex-col bg-[var(--background)]">
            <motion.h1
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-5xl lg:text-8xl font-bold text-[var(--text)] leading-tight mb-4">
                {t("AboutTitle")}
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="border-t-2 border-[var(--gris)] w-1/4 h-1 mx-auto my-4"
            />
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-lg lg:text-xl text-[var(--text)] lg:max-w-[70vw] mx-auto">
                {t("AboutText")}
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="border-t-2 border-[var(--gris)] w-1/4 h-1 mx-auto my-4"
            />
            <Education />
        </section>
    );
}
