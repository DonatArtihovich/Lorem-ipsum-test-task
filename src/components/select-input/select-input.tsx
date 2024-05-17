import { ChangeEvent } from 'react'
import cls from './select-input.module.scss'
import classNames from '@utils/lib/class-name';

type SelectInputProps = {
    value: string;
    setValue: (s: string) => void;
    className?: string;
}
export function SelectInput({ value, setValue, className }: SelectInputProps) {
    return (
        <div className={cls.selecteWrapper}>
            <select
                value={value}
                className={classNames(cls.select, className)}
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