import { ESmsActionEnum } from "../enums";

export const smsTemplates: { [key: string]: string } = {
  [ESmsActionEnum.WELCOME]: "Раді бачити вас у нашому додатку!",
  [ESmsActionEnum.FORGOT_PASSWORD]:
    "Ми контролюємо ваш пароль, просто виконуйте всі кроки, і все буде добре",
};
