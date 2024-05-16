import { ChangeEvent, useState } from 'react'
import cls from './range-input.module.scss'
import classNames from '@utils/lib/class-name';

type RangeInputProps = {
    className?: string;
};

export function RangeInput({ className }: RangeInputProps) {
    const [value, setValue] = useState<number>(100);

    return (
        <div className={classNames(cls.wrapper, className)}>
            <div className={cls.header}>
                <p className={cls.text}>Sed ut perspiciatis, unde omnis iste natus</p>
                <span className={cls.percent}>{value}%</span>
            </div>

            <input
                className={cls.input}
                type='range'
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value))}
            />
        </div>
    )
}