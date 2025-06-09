import { motion } from "motion/react";
import type IExperience from "../interfaces/experience.interface";
import { FaArrowRight } from "react-icons/fa";
import Nature from "../enums/nature.enum";
import { useTranslation } from "react-i18next";

export default function Item(experience: IExperience) {
    const { t } = useTranslation();
    const getNature = (nature: Nature) => {
        switch (nature) {
            case Nature.Pro:
                return t("Pro");
            case Nature.Perso:
                return t("Perso");
            case Nature.Etu:
                return t("Etu");
            default:
                return t("Other");
        }
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className=" flex flex-col form-container">
                <div className=" flex justify-between items-center gap-12">
                    <h3 className=" text-base font-bold text-[#2c2c2c]">
                        {experience.duree}
                    </h3>
                    <h3 className=" text-base font-bold text-[#2c2c2c] text-right">
                        {getNature(experience.nature)}
                    </h3>
                </div>
                <div className=" flex flex-col gap-0">
                    <h2 className=" text-2xl mb-1 capitalize ">
                        {experience.title}
                    </h2>
                    {experience.company && (
                        <h3 className=" text-base italic font-bold">
                            [{experience.company}]
                        </h3>
                    )}
                </div>

                <div className=" mb-4 flex gap-2 flex-wrap">
                    {experience.tags.map((tag, index) => (
                        <span
                            key={index}
                            className=" bg-[#e6007e] py-[4px] px-[8px] uppercase text-[12px] font-semibold rounded-[50em]">
                            {tag}
                        </span>
                    ))}
                </div>
                <p>{experience.description}</p>
                {experience.url && (
                    <a
                        href={experience.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className=" flex gap-2 mt-2 items-center hover:text-[var(--rose)] visited:text-[var(--rose)] transition-colors duration-300 group">
                        {t("SeeMore")}
                        <FaArrowRight className=" size-4 group-hover:-rotate-45 transition-all duration-300" />
                    </a>
                )}
            </motion.div>
        </>
    );
}
