import * as C from '../const'

export default class HandleService {
    public listItem:HTMLCollection
    public formElement:HTMLFormElement
    public selectItem:HTMLDivElement
    public btnSub:HTMLElement
    public apiRequest:string
    public listArray:Array<string>
    public itemObj:string = null
    public formObj:{}



    mapItems(elemen:HTMLElement){
                elemen.classList.add("itemStyle")
                this.itemObj = elemen.dataset.name
    }


    initContainer(container:HTMLSpanElement, title:string):boolean{
        if(title !== ""){
            container.innerHTML = `<div class='resultRequest_title'>${title}</div>` 
            setTimeout(function(){
                container.innerHTML = ""
            },3000)
         return true   
        }

        return false

    }

    isMap(container:HTMLSpanElement){
        if(this.itemObj === null){
            for(let i = 0; i<C.serviceItem.length; i++){
                C.serviceItem[i].classList.add("notItem")
            }
            this.initContainer(container, "Выберите услугу")
            return false
        }else{
            for(let i = 0; i<C.serviceItem.length; i++){
                C.serviceItem[i].classList.remove("notItem")
            }
            return true        
        }
    }



    mapFormData(container:HTMLSpanElement):boolean{
        if((C.nameEuphoria.value != "") && (C.emailEuphoria.value != "") && (C.telEuphoria.value != "") ){
            this.formObj = {...{nameEuphoria:C.nameEuphoria.value, emailEuphoria:C.emailEuphoria.value, telEuphoria:C.telEuphoria.value}}
            container.innerHTML = ""
            return true
        }
        this.initContainer(container, "Не все данные заполнены")
        return false
    }









    btnSubmit(apiRequest:String, container:HTMLSpanElement){
        container.innerHTML = ""
        if( !this.mapFormData(container)) return false
        if( !this.isMap(container)) return false
            fetch(`${apiRequest}`, {
                method:"post",
                headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},
                body:"formData="+JSON.stringify(this.formObj)+"&servicesItem="+this.itemObj
            })
            .then(req => this.initContainer(container,"Данные отправлены"))
            .catch(er => this.initContainer(container,"Ошибка отправки данных"))
    }

}