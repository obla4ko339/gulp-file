
import * as C from './components/Request/const'
import HandleService from './components/Request/angine'




const service = new HandleService()
service.btnSub = C.formRequest

for(let i = 0; i<C.serviceItem.length; i++){
    C.serviceItem[i].addEventListener("click",function(e:any){
        for(let i = 0; i<C.serviceItem.length; i++){
            C.serviceItem[i].classList.remove("itemStyle")
            C.serviceItem[i].classList.remove("notItem")
        }
        service.mapItems(e.currentTarget)
    })
}

C.formRequest.addEventListener("submit",function(e){
    e.preventDefault()
    service.btnSubmit("http://razvlru43.7rw.ru/test.php", C.resultRequest)
})


