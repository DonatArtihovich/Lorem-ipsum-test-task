import { ChangeEvent } from 'react'
import cls from './range-input.module.scss'
import classNames from '@utils/lib/class-name';

type RangeInputProps = {
    className?: string;
    value: number;
    setValue: (n: number) => void;
};

export function RangeInput({ className, value, setValue }: RangeInputProps) {

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