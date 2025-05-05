import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';
import './../../i18n';


function Footer() {
    const { t, i18n } = useTranslation();

    const footerSections = [
        {
            title: t("footer.sections.info.title"),
            className: styles.footerInform,
            line: [
                t("footer.sections.info.items.0"),
                t("footer.sections.info.items.1"),
                t("footer.sections.info.items.2"),
                t("footer.sections.info.items.3"),
                t("footer.sections.info.items.4")
            ]
        },
        {
            title: t("footer.sections.support.title"),
            className: styles.supportService,
            line: [
                t("footer.sections.support.items.0"),
                t("footer.sections.support.items.1"),
                t("footer.sections.support.items.2")
            ]
        },
        {
            title: t("footer.sections.additional.title"),
            className: styles.additionally,
            line: [
                t("footer.sections.additional.items.0"),
                t("footer.sections.additional.items.1"),
                t("footer.sections.additional.items.2")
            ]
        },
        {
            title: t("footer.sections.account.title"),
            className: styles.personalAccount,
            line: [
                t("footer.sections.account.items.0"),
                t("footer.sections.account.items.1"),
                t("footer.sections.account.items.2"),
                t("footer.sections.account.items.3")
            ]
        }
    ];

    return (
        <footer>
            <div className="conatiner">
                <div className={styles.container}>
                    <div className={styles.footerInformation}>
                        {footerSections.map((section, index) => (
                            <div key={index} className={section.className}>
                                <h4>{section.title}</h4>
                                <ul>
                                    {section.line.map((item, i) => (
                                        <li key={i}>
                                            <a href="#">
                                                {item.split('\n').map((line, ix) => (
                                                    <span key={ix}>
                                                        {line}
                                                    </span>
                                                ))}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className={styles.footerLine}></div>

                    <div className={styles.footerContact}>
                        <div className={styles.footerCont}>
                            <h4>{t("footer.contact.title")}</h4>
                            <ul>
                                <a href="#"><li><img src="/assets/img/footerVector1.svg" alt="phone" /><span>{t("footer.contact.phone")}</span></li></a>
                                <a href="#"><li><img src="/assets/img/footerVector2.svg" alt="working hours" /><span>{t("footer.contact.hours")}</span></li></a>
                                <a href="#"><li><img src="/assets/img/footerVector3.svg" alt="address" /><span>{t("footer.contact.address")}</span></li></a>
                                <a href="#"><li><img src="/assets/img/footerVector4.svg" alt="email" /><span>{t("footer.contact.email")}</span></li></a>
                            </ul>
                            <div className={styles.footerContCommunication}>
                                <a href="https://www.facebook.com/" target='_blank'>
                                    <img src="/assets/img/facebook.svg" alt="Facebook icon" />
                                </a>
                                <a href="https://www.viber.com/ru/" target='_blank'>
                                    <img src="/assets/img/viber.png" alt="Viber icon" />
                                </a>
                                <a href="https://web.telegram.org/" target='_blank'>
                                    <img src="/assets/img/telegram.png" alt="Telegram icon" />
                                </a>
                                <a href="https://web.whatsapp.com/" target='_blank'>
                                    <img src="/assets/img/whatsapp.png" alt="WhatsApp icon" />
                                </a>
                            </div>
                        </div>

                        <div className={styles.usefulLinks}>
                            <h4>{t("footer.usefulLinks.title")}</h4>
                            <span>{t("footer.usefulLinks.item")}</span>
                        </div>

                        <div className={styles.ourGuarantee}>
                            <h4>{t("footer.guarantee.title")}</h4>
                            <p>{t("footer.guarantee.text")}
                                <span>{t("footer.guarantee.linkText")}</span>
                            </p>
                        </div>

                        <div className={styles.newSletter}>
                            <h4>{t("footer.newsletter.title")}</h4>
                            <span>{t("footer.newsletter.subtitle")}</span>
                            <form>
                                <div className={styles.footerMail}>
                                    <input className={styles.footerMailWrite} type="email" name="email" placeholder={t("footer.newsletter.placeholder")} />
                                    <button className={styles.footerVector} type="submit">
                                        <img src="/assets/img/Vector.svg" alt="Submit" />
                                    </button>
                                </div>
                                <div className={styles.checkboxGroup}>
                                    <input type="checkbox" id="agree" />
                                    <label htmlFor="agree">{t("footer.newsletter.agreement")}</label>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className={styles.footerLine}></div>

                    <div className={styles.footerCode}>
                        <div className={styles.footerCodeText}>
                            <p>{t("footer.disclaimer.text")}</p>
                        </div>
                        <span>{t("footer.copyright")}</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
