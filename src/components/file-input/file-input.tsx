import classNames from '@utils/lib/class-name';
import cls from './file-input.module.scss'

type FileInputProps = {
    className?: string;
}
export function FileInput({ className }: FileInputProps) {
    return (
        <>
            <label htmlFor="file-input" className={classNames(cls.label, className)}>
                <img className={cls.inputImage} src="/images/file.svg" alt="file picture" />
                <p className={cls.inputText}>прикрепить файл</p>
            </label>
            <input type="file" id="file-input" className={cls.input} />
        </>
    )
}