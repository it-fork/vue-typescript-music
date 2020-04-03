import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state: IState = {
  searchKeyWrold: window.sessionStorage.getItem('searchKeyWrold')
    ? window.sessionStorage.getItem('searchKeyWrold')
    : '',
  searchHistory: JSON.parse(
    window.localStorage.getItem('musicHistorySearch') || '[]'
  ),
  loginAccount: window.sessionStorage.getItem('loginAccount') ? window.sessionStorage.getItem('loginAccount') : '',
  account: (<any>window.localStorage).getItem('account') || {},
  playList: JSON.parse((<any>window.localStorage).getItem('playlist') || '[]'),  // 播放列表中的容器
  currentPlayIndex: parseInt((<any>window.localStorage).getItem('playIndex')) || -1, // 当前播放容器的索引值
  playMode: parseInt((<any>window.localStorage).getItem('mode')) || EPlayMode.listLoop
}
import { IState, EPlayMode } from './interface'
import { mutations } from './mutatioins'
import { actions } from './actions'
import getters from './getters'
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
