
   var utils = {
        getMenuList(){
            this.$http.get('/resource/menuList').then(res=>{
                localStorage.setItem('menuList',JSON.stringify(res.data.data)); 
            })
        },

    }


export default utils

