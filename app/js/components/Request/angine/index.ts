export default class HandleService {
    public listItem:HTMLCollection
    public formElement:HTMLFormElement
    public selectItem:HTMLDivElement
    public btnSub:HTMLElement
    public apiRequest:string

    getElementCollection(){
        const elemetnResult:HTMLCollection = this.listItem
    }

    mapCollection(list:HTMLCollection){
        for(let i = 0; i<list.length; i++){
            list[i].addEventListener("click",function(e){
                this.selectItem = e.currentTarget
            })
        }
    }

    btnSubmit(apiRequest:String, container:HTMLSpanElement){
        container.innerHTML = ""
        this.btnSub.addEventListener("submit", function(e){
            e.preventDefault()
            
            fetch(`${apiRequest}`, {
                method:"post",
                headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},
                body:""
            })
            .then(req => container.innerHTML = "Данные отправлены")
            .catch(er => container.innerHTML = "Ошибка отправки данных")

        })
    }

}