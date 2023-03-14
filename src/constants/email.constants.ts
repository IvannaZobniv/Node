import { EEmailActions } from "../enums/email.enum";

export const allTemplates: {
  [key: string]: { subject: string; templateName: string };
} = {
  [EEmailActions.WELCOME]: {
    subject: "Раді бачити вас у нашому додатку!",
    templateName: "register",
  },
  [EEmailActions.FORGOT_PASSWORD]: {
    subject:
      "Ми контролюємо ваш пароль, просто виконуйте всі кроки, і все буде добре",
    templateName: "forgotPassword",
  },
};
