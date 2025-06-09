import { motion } from "motion/react";
import type IFormation from "../../interfaces/formation.interface";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Formation(formation: IFormation) {
    const { t } = useTranslation();
    console.log("Formation:", formation);
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="flex flex-col form-container">
                <h3 className=" text-base font-bold text-[#2c2c2c]">
                    {formation.duree}
                </h3>
                <h2 className=" text-2xl font-krungthep mb-1">
                    {formation.title}
                </h2>
                <div className=" mb-4 flex gap-2 flex-wrap">
                    {formation.specialite?.map((spe, index) => (
                        <span
                            key={index}
                            className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
                            {spe}
                        </span>
                    ))}
                </div>
                {formation.url && (
                    <a
                        href={formation.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className=" flex gap-2 mt-2 items-center visited:text-[var(--rose)] hover:text-[var(--rose)] transition-colors duration-300 group">
                        {t("SeeMore")}
                        <FaArrowRight className=" size-4 group-hover:-rotate-45 transition-all duration-300" />
                    </a>
                )}
            </motion.div>
        </>
    );
}
