import { SetStateAction, Dispatch } from 'react'

export interface IIconProps {
  type: string
  props: any
}

export interface IOpenAIMessages {
  role: string
  content: string
}

export interface IOpenAIUserHistory {
  user: string
  assistant: string
  fileIds?: any[]
}

export interface IOpenAIStateWithIndex {
  index: string
  messages: IOpenAIUserHistory[]
}

export interface IThemeContext {
  theme: any
  themeName: string
}

export interface Model {
  name: string;
  label: string;
  icon: any
}

export interface IAppContext {
  chatType: Model
  setChatType: Dispatch<SetStateAction<Model>>
  handlePresentModalPress: () => void
  closeModal: () => void
  clearChat: () => void
  clearChatRef: React.MutableRefObject<(() => void) | undefined>
}