import { useTranslation } from "react-i18next";
import { useScrollTop } from "../hooks/useScrollTop";
import { workEntries } from "../data/workEntries";

const InProgress = () => {
  const { t } = useTranslation();
  useScrollTop();

  return (
    <section className="content">
      <div className="headingContainer">
        <h3 className="projectsHeading">
          <i className="bi bi-laptop-fill"></i>
          {t("navigation.inProgress")}
        </h3>
      </div>
      <div className="workEntriesContainer">
        {workEntries.map((entry) => (
          <article className="workEntry" key={entry.id}>
            <div className="workEntryContent">
              <h3 className="workEntryTitle">{t(entry.title)}</h3>
              <p className="workEntryDate">{entry.date}</p>
              {t(entry.descrition).split("\n\n").map((p, i) => (
                <p className="workEntryDescription" key={i}>{p}</p>
              ))}
            </div>
            {entry.images.length > 0 && (
              <div className="workEntryImages">
                {entry.images.map((src, i) => (
                  <img key={i} src={src} alt={`${entry.title} screenshot ${i + 1}`} />
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default InProgress;
