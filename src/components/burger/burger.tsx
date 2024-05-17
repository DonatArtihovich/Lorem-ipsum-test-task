import classNames from '@utils/lib/class-name';
import cls from './burger.module.scss'

type BurgerProps = {
    isMenuOpened: boolean;
    setIsMenuOpened: (b: boolean) => void;
}

export function Burger({ isMenuOpened, setIsMenuOpened }: BurgerProps) {

    const handleClick = () => {
        setIsMenuOpened(!isMenuOpened);
    }

    return (
        <button
            className={classNames(cls.burger, isMenuOpened ? cls.turned : cls.unturned)}
            onClick={handleClick}
        >
            <span className={cls.burgerLine}></span>
            <span className={cls.burgerLine}></span>
            <span className={cls.burgerLine}></span>
        </button>
    )
}