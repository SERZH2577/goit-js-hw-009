import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const o=document.querySelector(".feedback-form"),m="feedback-form-state";o.addEventListener("input",r);o.addEventListener("click",s);const a={email:"",message:""};l(o);function r(e){e.target.name==="email"&&(a.email=e.target.value.trim()),e.target.name==="message"&&(a.message=e.target.value.trim()),localStorage.setItem("feedback-form-state",JSON.stringify(a))}function s(e){e.preventDefault(),e.target.type==="submit"&&(a.email!==""&&a.message!==""?(console.log(a),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),a.email="",a.message=""):alert("Все поля должны быть заполнены!"))}function l(e){const t=JSON.parse(localStorage.getItem(m));t!==null&&(a.email=t.email,a.message=t.message,e[0].value=t.email,e[1].value=t.message)}
//# sourceMappingURL=commonHelpers.js.map