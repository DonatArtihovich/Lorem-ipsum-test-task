import axios from 'axios'

const BOT_TOKEN = '7036401302:AAFKnb5WOIr8HZ2cT6g2eL5vXWbFDRcWIc8';

const CHANNEL_ID = '-1002060270971';

export function createPost(message: string) {
    const data = {
        chat_id: CHANNEL_ID,
        text: message,
    };


    axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${data.chat_id}&text=${data.text}&parse_mode=HTML`)
    .then(() => {
        console.log('Сообщение отправлено успешно!');
    })
    .catch((error) => {
        console.log('Произошла ошибка при отправке сообщения:', error);
    });
}