import { motion } from "motion/react";
import { useAppContext } from "../../context";
import Formation from "./formation";
import { useTranslation } from "react-i18next";
import TypeFormation from "../../enums/typeFormation.enum";

export default function Education() {
    const { t } = useTranslation();
    const { formations } = useAppContext().state;

    return (
        <section className="h-fit max-w-screen md:p-7 flex flex-col bg-[var(--background)]">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl lg:text-5xl font-bold text-[var(--text)] mb-4">
                🏫 {t("EducationTitle")}
            </motion.h1>

            <div className=" flex flex-col gap-7 mt-7 md:mx-auto">
                {formations
                    .filter(
                        (formation) => formation.type !== TypeFormation.CERTIF
                    )
                    .map((formation, index) => (
                        <Formation key={index} {...formation} />
                    ))}
            </div>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className=" mt-12 text-3xl lg:text-5xl font-bold text-[var(--text)] mb-4">
                🏫 {t("CertifTitle")}
            </motion.h1>

            <div className=" flex flex-col gap-7 mt-7 md:mx-auto">
                {formations
                    .filter(
                        (formation) => formation.type === TypeFormation.CERTIF
                    )
                    .map((formation, index) => (
                        <Formation key={index} {...formation} />
                    ))}
            </div>
        </section>
    );
}
