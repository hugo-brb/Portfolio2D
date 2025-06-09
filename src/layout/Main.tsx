import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Home() {
    const { t } = useTranslation();

    return (
        <main className="h-screen w-screen p-7 flex flex-col justify-center bg-[var(--background)]">
            <motion.h1
                className="text-5xl lg:text-8xl font-bold text-[var(--text)] leading-tight mb-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible">
                <motion.div variants={itemVariants}>{t("Hello")}</motion.div>
                <motion.div variants={itemVariants}>
                    {t("IM")}{" "}
                    <span className="text-[var(--violet)]">HUGO BARBIERI</span>
                </motion.div>
                <motion.div variants={itemVariants}>
                    {t("A")}{" "}
                    <span className="text-[var(--rose)]">FRONT-END</span>{" "}
                    {t("Developer")}
                </motion.div>
                <motion.div variants={itemVariants}>
                    {t("Based")}{" "}
                    <span className="bg-clip-text bg-gradient-to-br from-[var(--violet)] to-[var(--rose)] text-transparent">
                        FRANCE
                    </span>
                </motion.div>
            </motion.h1>
        </main>
    );
}
