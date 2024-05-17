import { useState } from 'react';
import cls from './slider.module.scss'
import classNames from '@utils/lib/class-name';

type Feedback = {
    author: string;
    feedback: string;
}

const feedbacks: Feedback[] = [{
    author: "Mariya1",
    feedback: "All is Good"
},
{
    author: "Mariya2",
    feedback: "All is Good"
},
{
    author: "Mariya3",
    feedback: "All is Good"
},
{
    author: "Mariya4",
    feedback: "All is Good"
},
{
    author: "Mariya5",
    feedback: "All is Good"
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