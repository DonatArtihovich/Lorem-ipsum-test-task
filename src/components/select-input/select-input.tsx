import cls from './select-input.module.scss'

export function SelectInput() {
    return (
        <div className={cls.selecteWrapper}>
            <select className={cls.select}>
                <option value="Sed ut perspiciatis">Sed ut perspiciatis</option>
                <option value="Nemo enim ipsam">Nemo enim ipsam</option>
                <option value="Et harum quidem">Et harum quidem</option>
                <option value="Temporibus autem">Temporibus autem</option>
                <option value="Itaque earum rerum">Itaque earum rerum</option>
            </select>
        </div>
    )
}