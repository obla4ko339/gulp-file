import * as C from './components/Request/const'
import HandleService from './components/Request/angine'


const service = new HandleService()
service.mapCollection(C.serviceItem)
service.btnSub = C.formRequest
service.btnSubmit("http://razvlru43.7rw.ru/test.php", C.resultRequest)

console.log(C.serviceItem)