import { SelectInput } from '@components/select-input'
import cls from './order-content.module.scss'
import { TextInput } from '@components/input'
import { RangeInput } from '@components/range-input'
import { FileInput } from '@components/file-input'

export function OrderContent() {
    return (
        <section className={cls.orderContent}>
            <div className={cls.wrapper}>
                <div className={cls.headerWrapper}>
                    <article className={cls.header}>
                        <span>оформление </span>
                        <span className={cls.blue}>заказа</span>
                    </article>
                    <p className={cls.warning}>Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>
                </div>
                <img className={cls.iconsImage} src="/images/icons.svg" alt="" />

                <form className={cls.form}>
                    <div className={cls.inputsWrapper}>
                        <SelectInput />
                        <TextInput placeholder="Ваш email" />
                        <TextInput placeholder="Ваше имя" />
                        <RangeInput className={cls.rangeInput} />
                        <FileInput className={cls.fileInput} />
                    </div>

                    <button type="submit" className={cls.sendButton}>отправить</button>
                </form>

            </div>
        </section>
    )
}