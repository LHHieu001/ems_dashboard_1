import React from 'react'
import { useTranslation, Trans } from 'react-i18next';

const lngs: { [key: string]: { nativeName: string } } = {
    en: { nativeName: 'English' },
    vn: { nativeName: 'Vietnam' }
  };

const Translation = () => {

    const { t, i18n } = useTranslation();

  return (
    <>
        <div>
            {Object.keys(lngs).map((lng) => (
                <button className='p-1 bg-slate-300 rounded-lg mr-3' key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                    {lngs[lng].nativeName}
                </button>
            ))}
        </div>

        <p>
          <Trans i18nKey="description.part1">
            {t('description.part2')}
          </Trans>
        </p>
    </>
    
  )
}

export default Translation