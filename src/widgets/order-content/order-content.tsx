import { SelectInput } from '@components/select-input'
import cls from './order-content.module.scss'
import { TextInput } from '@components/input'
import { RangeInput } from '@components/range-input'
import { FileInput } from '@components/file-input'
import { Slider } from '@components/slider'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { createPost } from '@utils/telegram/post'

export function OrderContent() {
    const [selectedValue, setSelectedValue] = useState<string>('Sed ut perspiciatis');
    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [range, setRange] = useState<number>(100)
    const fileInput = useRef();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        console.log(fileInput.current);

        const message = `email: ${email}, name: ${name}, range: ${range}, selected: ${selectedValue}`
        await createPost(message);
    }

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

                <form
                    className={cls.form}
                    onSubmit={handleSubmit}
                >
                    <div className={cls.inputsWrapper}>
                        <SelectInput
                            value={selectedValue}
                            setValue={setSelectedValue}
                        />
                        <TextInput
                            placeholder="Ваш email"
                            value={email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                        <TextInput
                            placeholder="Ваше имя"
                            value={name}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        />
                        <RangeInput
                            className={cls.rangeInput}
                            value={range}
                            setValue={setRange}
                        />
                        <FileInput
                            ref={fileInput}
                            className={cls.fileInput}
                            onChange={(e) => setFile(e.target.files?.[0])}
                        />
                    </div>

                    <button type="submit" className={cls.sendButton}>отправить</button>
                </form>

                <Slider />
            </div>
        </section>
    )
}