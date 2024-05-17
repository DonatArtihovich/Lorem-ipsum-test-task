import { ChangeEvent } from 'react'
import cls from './select-input.module.scss'

type SelectInputProps = {
    value: string;
    setValue: (s: string) => void;
}
export function SelectInput({ value, setValue }: SelectInputProps) {
    return (
        <div className={cls.selecteWrapper}>
            <select
                value={value}
                className={cls.select}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setValue(e.target.value)}
            >
                <option value="Sed ut perspiciatis">Sed ut perspiciatis</option>
                <option value="Nemo enim ipsam">Nemo enim ipsam</option>
                <option value="Et harum quidem">Et harum quidem</option>
                <option value="Temporibus autem">Temporibus autem</option>
                <option value="Itaque earum rerum">Itaque earum rerum</option>
            </select>
        </div>
    )
}