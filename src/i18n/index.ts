import { createI18n } from "vue-i18n";
import EN from "./en";
import ZH from "./zh";
const messages ={
    en:{
        ...EN
    },
    zh:{
        ...ZH
    }
}
//获取当前语言
const getCurrentLanguage =() =>{
    const UAlang = localStorage.getItem('lang') || 'zh' //navigator.language //zh-CH
    const langCode = UAlang.indexOf('zh') !==-1 ?'zh':'en'
    //localStorage.setItem('lang',langCode)
    return langCode
}

const i18n = createI18n({
    legacy:false,
    globalInjection:true,
    locale:getCurrentLanguage() || 'zh', //默认语言
    messages:messages //引入语言文件
})

export default i18n