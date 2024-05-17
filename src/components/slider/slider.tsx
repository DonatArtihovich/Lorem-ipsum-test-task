import { useState } from 'react';
import cls from './slider.module.scss'
import classNames from '@utils/lib/class-name';

type Feedback = {
    author: string;
    feedback: string;
}

const feedbacks: Feedback[] = [{
    author: "Мария",
    feedback: "Отличный продукт, я очень доволен покупкой."
},
{
    author: "Иван",
    feedback: "Мне очень понравилось качество обслуживания, всем рекомендую."
},
{
    author: "Анастасия",
    feedback: "Я пользуюсь этим продуктом уже несколько месяцев и очень довольна результатами."
},
{
    author: "Сергей",
    feedback: "Отличное соотношение цены и качества, я очень доволен своей покупкой."
},
{
    author: "Ольга",
    feedback: "Я очень довольна обслуживанием и качеством продукта, всем рекомендую."
},
{
    author: 'Петр',
    feedback: 'Я очень доволен качеством обслуживания и продукта, всем рекомендую.'
}]

export function Slider() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isSwipedRight, setIsSwipedRight] = useState<boolean>(false);
    const [isSwipedLeft, setIsSwipedLeft] = useState<boolean>(false);

    const swipeLeft = () => {
        setIsSwipedLeft(true);
    }

    const swipeRight = () => {
        setIsSwipedRight(true);
    }

    const handleAnimationEnd = () => {
        if (isSwipedRight) {
            setIsSwipedRight(false);

            if (currentIndex < feedbacks.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex(0);
            }
        }

        if (isSwipedLeft) {
            setIsSwipedLeft(false);

            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            } else {
                setCurrentIndex(feedbacks.length - 1);
            }
        }
    }

    return (
        <div className={cls.slider}>
            <button
                onClick={swipeLeft}
                className={cls.arrowButton}
                style={{ transform: 'rotate(180deg)' }}
            >
                <img src="/images/arrow.svg" alt="arrow" />
            </button>
            <div className={cls.feedbacksListWrapper}>
                <ul
                    className={classNames(cls.feedbacksList, isSwipedRight && cls.swipedRight, isSwipedLeft && cls.swipedLeft)}
                    onAnimationEnd={handleAnimationEnd}
                >
                    {feedbacks.slice(currentIndex, currentIndex + 5).concat(feedbacks.slice(0, 5)).slice(0, 5).map((feedback: Feedback) => (
                        <div className={cls.feedbackCard}>
                            <h3>{feedback.author}</h3>
                            <p>{feedback.feedback}</p>
                        </div>
                    ))}
                </ul>
            </div>

            <button
                onClick={swipeRight}
                className={cls.arrowButton}
            >
                <img src="/images/arrow.svg" alt="arrow" />
            </button>
        </div>
    )
}