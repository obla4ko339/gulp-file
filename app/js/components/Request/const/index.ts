const euphoriaShow:HTMLElement = document.getElementById("euphoriaShow") as HTMLElement
const euphoriaProgramm:HTMLElement = document.getElementById("euphoriaProgramm") as HTMLElement
const euphoriaPaper:HTMLElement = document.getElementById("euphoriaPaper") as HTMLElement
const euphoriaBirthday:HTMLElement = document.getElementById("euphoriaBirthday") as HTMLElement
const serviceItem:HTMLCollection = document.getElementsByClassName("serviceItem") as HTMLCollection
const btnRequest:HTMLFormElement = document.getElementById("btnRequest") as HTMLFormElement
const formRequest:HTMLElement = document.getElementById("formRequest") as HTMLElement
const resultRequest:HTMLSpanElement = document.getElementById("resultRequest") as HTMLSpanElement

export {
    euphoriaShow,
    euphoriaProgramm,
    euphoriaPaper,
    euphoriaBirthday,
    serviceItem,
    btnRequest,
    formRequest,
    resultRequest
}