import cls from './footer.module.scss'

export function Footer() {
    return (
        <footer className={cls.footer}>
            <div className={cls.wrapper}>
                <span className={cls.copyright}>© 2018 «LoremIpsum.net» Все права<br />защищены.</span>
                <span className={cls.divider} />
                <div className={cls.walletsWrapper}>
                    <span className={cls.contactWrapper}>
                        <img src="/images/qiwi.svg" alt="qiwi" />
                        <span>QIWI wallet</span>
                    </span>

                    <span className={cls.contactWrapper}>
                        <img src="/images/yandex-money.svg" alt="Yandex Money" />
                        <span>Yandex Money</span>
                    </span>

                    <span className={cls.contactWrapper}>
                        <img src="/images/web-money.svg" alt="Web Money" />
                        <span>Web Money</span>
                    </span>
                </div>
                <span className={cls.divider} />
                <div className={cls.contactsWrapper}>
                    <span className={cls.contactWrapper}>
                        <img src="/images/email.svg" alt="email" />
                        <span>info@ipsum228.com</span>
                    </span>

                    <span className={cls.contactWrapper}>
                        <img src="/images/email.svg" alt="email" />
                        <span>Мы вконтакте</span>
                    </span>
                </div>
            </div>
        </footer>
    )
}