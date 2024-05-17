import classNames from '@utils/lib/class-name'
import cls from './header.module.scss'
import { Burger } from '@components/burger'
import useResize from '@utils/hooks/use-resize'
import { useState } from 'react';

export function Header() {
    const width = useResize();
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(width > 760);

    return (
        <header className={cls.Header}>
            <div className={cls.wrapper}>
                <div className={cls.logo}>
                    <span>LOREMIPSUM.</span>
                    <span>NET</span>
                </div>

                {width < 760 && isMenuOpened && <div
                    className={cls.layer}
                    onClick={() => setIsMenuOpened(false)}
                />}
                {isMenuOpened &&
                    <nav className={classNames(
                        cls.headerNav,
                        width < 760 && isMenuOpened && cls.opening,
                        width < 760 && !isMenuOpened && cls.closing
                    )}
                    >
                        <a className={classNames(cls.headerLink, cls.selected)}>Бизнес</a>
                        <a className={cls.headerLink}>О нас</a>
                        <a className={cls.headerLink}>Цены</a>
                        <a className={cls.headerLink}>Оформить заказ</a>
                    </nav>
                }

                <Burger
                    isMenuOpened={isMenuOpened}
                    setIsMenuOpened={setIsMenuOpened}
                />
            </div>
        </header >
    )
}