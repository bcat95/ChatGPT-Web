import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://chatgptvietnam.org/assets/favicon.png',
      name: 'chatgptvietnam.org',
      description: 'Trải nghiệm ngay <a href="https://chatgptvietnam.org" class="text-blue-500" target="_blank" >ChatGPT Vietnamese không cần tài khoản</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
