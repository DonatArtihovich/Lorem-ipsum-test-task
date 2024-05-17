import cls from './footer.module.scss'

export function Footer() {
    return (
        <footer className={cls.footer}>
            <div className={cls.wrapper}>
                <span className={cls.copyright}>© 2018 «LoremIpsum.net» Все права защищены.</span>
                <span className={cls.divider} />
                <div className={cls.walletsWrapper}>
                    <a className={cls.contactWrapper}>
                        <img src="/images/qiwi.svg" alt="qiwi" />
                        <span>QIWI wallet</span>
                    </a>

                    <a className={cls.contactWrapper}>
                        <img src="/images/yandex-money.svg" alt="Yandex Money" />
                        <span>Yandex Money</span>
                    </a>

                    <a className={cls.contactWrapper}>
                        <img src="/images/web-money.svg" alt="Web Money" />
                        <span>Web Money</span>
                    </a>
                </div>
                <span className={cls.divider} />
                <div className={cls.contactsWrapper}>
                    <a className={cls.contactWrapper}>
                        <img src="/images/email.svg" alt="email" />
                        <span>info@ipsum228.com</span>
                    </a>

                    <a className={cls.contactWrapper}>
                        <img src="/images/email.svg" alt="email" />
                        <span>Мы вконтакте</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}