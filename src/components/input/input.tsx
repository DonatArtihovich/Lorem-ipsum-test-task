import classNames from '@utils/lib/class-name'
import cls from './input.module.scss'

export function TextInput(props: any) {
    return (
        <input
            value={props.value}
            onChange={props.onChange}
            type='text'
            className={classNames(cls.input, props.className)}
            {...props}
        />
    )
}