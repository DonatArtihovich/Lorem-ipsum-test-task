import cls from './main-content.module.scss'

export function MainContent() {
    return (
        <section className={cls.main}>
            <div className={cls.mainWrapper}>
                <div className={cls.textWrapper}>
                    <h1 className={cls.mainHeader}>
                        <span className={cls.blue}>Lorem ipsum</span> dolor sit<br />amet
                        consectetur <span className={cls.blue}>adipiscing</span>
                    </h1>

                    <div>
                        <p className={cls.text}>At vero eos et accusamus et iusto odio dignissimos ducimus!</p>
                        <ul className={cls.mainList}>
                            <li className={cls.listItem}>Totam rem aperiam eaque ipsa</li>
                            <li className={cls.listItem}>Sit voluptatem accusantium doloremque laudantium</li>
                            <li className={cls.listItem}>Sed ut perspiciatis, unde omnis iste natus error</li>
                        </ul>
                    </div>

                    <div className={cls.buttonsWrapper}>
                        <button className={cls.orderButton}>Заказать</button>
                        <button className={cls.moreButton}>Подробнее</button>
                    </div>

                </div>
            </div>
        </section >
    )
}