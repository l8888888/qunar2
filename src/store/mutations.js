export default {
  changeCity(state,data){
    state.city = data
    try{
      localStorage.city = data
    }catch (e) {

    }
  }
}