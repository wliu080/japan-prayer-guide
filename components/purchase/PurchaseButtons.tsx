import { useTranslation } from "next-i18next";

//TODO.links: Update redirect to purchase links
const PurchaseButtons: React.FC = () => {
  const { t } = useTranslation("purchase");
  return (
    <div>
      <button
        onClick={() => window.open('https://google.com', "_blank")}
      >
        {t('buttons.usa')}
      </button>
      <button
        onClick={() => window.open('https://google.com', "_blank")}
      >
        {t('buttons.international')}
      </button>
    </div>
  )
}

export { PurchaseButtons };
