import { createContext } from 'react'
import { IThemeContext, IAppContext } from '../types'
import { MODELS } from '../constants'

const ThemeContext = createContext<IThemeContext>({
  theme: {},
  setTheme: () => null,
  themeName: ''
})

const AppContext = createContext<IAppContext>({
  chatType: MODELS.gpt,
  setChatType: () => null,
  handlePresentModalPress: () => null,
  closeModal: () => null,
  clearChat: () => null,
  clearChatRef: { current: undefined }
})

export {
  ThemeContext, AppContext
}