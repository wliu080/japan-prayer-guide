import { useTranslation } from "next-i18next"

//TODO.links: Update redirect to purchase links
const PurchaseButtons: React.FC = () => {
  const { t } = useTranslation("booklet")
  return (
    <div className="d-flex flex-column flex-md-row justify-content-center">
      <button onClick={() => window.open("https://www.davidsonpublishing.org/prayer-guides1.html", "_blank")}>
        {t("buttons.northAmerica")}
      </button>
      <button
        onClick={() =>
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSf03r2GXDfFa17f5ICL_HTy_NuQOpaJcmNgRyFQN10ghgEYqQ/viewform",
            "_blank"
          )
        }
      >
        {t("buttons.japan")}
      </button>
      <button
        onClick={() =>
          window.open("https://uk.10ofthose.com/product/9780853631965/beneath-the-surface-paperback", "_blank")
        }
      >
        {t("buttons.international")}
      </button>
    </div>
  )
}

export { PurchaseButtons }
