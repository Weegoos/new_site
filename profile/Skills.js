class Skills{
    user_skills(){
        // return this.range
    }    
    getRang(){
        current_range.setAttribute('style', `width: calc(var(--main_var) * ${web_local * 1.5});`)
        current_website_skills.setAttribute('style', `width: calc(var(--main_var) * ${markup_local * 1.5});`)
        one_skills_current.setAttribute('style', `width: calc(var(--main_var) * ${page_local * 1.5});`)
        current_range_template.setAttribute('style', `width: calc(var(--main_var) * ${mobile_local * 1.5});`)
        api_current_range.setAttribute('style', `width: calc(var(--main_var) * ${backend_local * 1.5});`)
    }
}

class Web_skills extends Skills{
    constructor(name_occupation){
        super()
        this.name_occupation = name_occupation
        name_occupation = "Web Design" 
        web_skills.innerHTML = name_occupation
        this.range = web_local
        web_range.title = `${web_local} / 10`
    }
}

class WebSite_skills extends Skills{
    constructor(name_occupation){
        super()
        this.name_occupation = name_occupation
        name_occupation = "Website Markup"
        website_skills.innerHTML = name_occupation
        website_range.title = `${markup_local} / 10`
    }
}

class One_page_skills extends Skills{
    constructor(name_occupation){
        super()
        this.name_occupation = name_occupation
        name_occupation = "One Page Skills"
        one_skills.innerHTML = name_occupation
        one_skills_range.title = `${page_local} / 10`
    }
}

class Mobile_template extends Skills{
    constructor(name_occupation){
        super()
        this.name_occupation = name_occupation
        name_occupation = "Mobile Template"
        template_skills.innerHTML = name_occupation
        template_range.title = `${mobile_local} / 10`
    }
}

class Api extends Skills{
    constructor(name_occupation){
        super()
        this.name_occupation = name_occupation
        name_occupation = "Backend API"
        api_skills.innerHTML = name_occupation
        api_range.title = `${backend_local} / 10`
    }
}

class Commute{
    overall(skill){
        return skill.getRang()
    }

}

const commute = new Commute()
console.log(commute.overall(new Web_skills()));
console.log(commute.overall(new WebSite_skills()));
console.log(commute.overall(new One_page_skills()));
console.log(commute.overall(new Mobile_template()));
console.log(commute.overall(new Api()));

function null_type(){
 switch (web_local.length) {
    case 0:
        web_range.title = `0 / 10`
        
        break;
 
    default:
        break;
 }

 switch (markup_local.length) {
    case 0:
        website_range.title = `0 / 10`
        
        break;
 
    default:
        break;
 }

 switch (page_local.length) {
    case 0:
        one_skills_range.title = `0 / 10`
        
        break;
 
    default:
        break;
 }

 if (mobile_local.length == 0){
    template_range.title = `0 / 10`
 }
 if (backend_local.length == 0){
    api_range.title = `0 / 10`
 }
}
null_type()
