export enum EEmailActions {
  WELCOME,
  FORGOT_PASSWORD,
}
export const allTemplates = {
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
