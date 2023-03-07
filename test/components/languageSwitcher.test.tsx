import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSwitcher from '../../components/languageSwitcher';

const changeLanguageSpy = jest.fn();

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: jest.fn(() => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: changeLanguageSpy,
      },
    };
  }),
  initReactI18next: {
    type: "3rdParty",
    init: () => {},
  },
}));

describe('LanguageSwitcher', () => {

  beforeEach(() => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");
    useRouter.mockReturnValue({
      push: () => {},
    });
  });

  test('renders a horizontal stack with 2 links', () => {
    render(<LanguageSwitcher />);
    const languageSwitcher = screen.getByTestId('language-switcher');
    const engLink = screen.getByTestId('link-english');
    const jpLink = screen.getByTestId('link-japanese');

    expect(languageSwitcher).toHaveClass('hstack');
    expect(languageSwitcher).toContainElement(engLink);
    expect(languageSwitcher).toContainElement(jpLink);
  });

  test('clicking on a language link should use i18n to change language', () => {

    render(<LanguageSwitcher />);
    const engLink = screen.getByTestId('link-english');

    fireEvent.click(engLink);

    expect(engLink).toHaveClass("link-light");
    expect(changeLanguageSpy).toHaveBeenCalledTimes(1);
    expect(changeLanguageSpy).toHaveBeenCalledWith("en");
  });
});

