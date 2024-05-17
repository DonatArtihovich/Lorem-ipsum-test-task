import classNames from '@utils/lib/class-name';
import cls from './file-input.module.scss'
import { forwardRef } from 'react';

type FileInputProps = {
    className?: string;
}
export const FileInput = forwardRef(({ className }: FileInputProps, ref) => {
    return (
        <div className={classNames(cls.wrapper, className)}>
            <label htmlFor="file-input" className={cls.label}>
                <img className={cls.inputImage} src="/images/file.svg" alt="file picture" />
                <p className={cls.inputText}>прикрепить файл</p>
            </label>
            <input type="file" id="file-input" className={cls.input} ref={ref as React.LegacyRef<HTMLInputElement>} />
        </div>
    )
})