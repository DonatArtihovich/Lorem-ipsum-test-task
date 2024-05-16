import classNames from '@utils/lib/class-name'
import cls from './input.module.scss'

export function TextInput(props: any) {
    return (
        <input
            type='text'
            className={classNames(cls.input, props.className)}
            {...props}
        />
    )
}