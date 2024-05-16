import classNames from '@utils/lib/class-name'
import cls from './header.module.scss'

export function Header() {
    return (
        <header className={cls.Header}>
            <div className={cls.wrapper}>
                <div className={cls.logo}>
                    <div className={cls.logoMainWrapper}>
                        <span>LOREMIPSUM.</span>
                        <span>NE</span>
                    </div>
                    <span>T</span>
                </div>

                <nav className={cls.headerNav}>
                    <a className={classNames(cls.headerLink, cls.selected)}>Бизнес</a>
                    <a className={cls.headerLink}>О нас</a>
                    <a className={cls.headerLink}>Цены</a>
                    <a className={cls.headerLink}>Оформить заказ</a>
                </nav>
            </div>
        </header>
    )
}