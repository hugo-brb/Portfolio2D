import { useEffect, useReducer } from "react";
import { AppContext } from "..";
import { appReducer, initialState } from "../reducer";
import { useTranslation } from "react-i18next";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const { i18n } = useTranslation();

    useEffect(() => {
        // Récuperer le fichier JSON des formations
        const fetchFormations = async () => {
            const locale = i18n.language || "fr";
            try {
                const response = await fetch(`/json/${locale}/formation.json`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                // Mettre en forme les données selon IFormation
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const formattedData = data.map((item: any) => ({
                    id: item.id,
                    title: item.title,
                    duree: item.duree,
                    type: item.type,
                    specialite: item.specialite || [],
                    url: item.url || undefined,
                }));

                dispatch({ type: "UPDATE_FORMATION", payload: formattedData });
            } catch (error) {
                console.error("Failed to fetch formations:", error);
            }
        };
        // Récuperer le fichier JSON des expériences
        const fetchExperiences = async () => {
            const locale = i18n.language || "fr";
            try {
                const response = await fetch(`/json/${locale}/experience.json`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                // Mettre en forme les données selon IExperience
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const formattedData = data.map((item: any) => ({
                    id: item.id,
                    title: item.title,
                    nature: item.nature,
                    company: item.company || undefined,
                    duree: item.duree,
                    tags: item.tags || [],
                    description: item.description,
                    url: item.url || undefined,
                    image: item.image || undefined,
                }));

                dispatch({ type: "UPDATE_EXPERIENCE", payload: formattedData });
            } catch (error) {
                console.error("Failed to fetch experiences:", error);
            }
        };

        fetchExperiences();
        fetchFormations();
    }, [i18n.language]);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
