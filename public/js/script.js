const form = document.getElementById("Qrgenerator")


const qr = document.getElementById("qrcode")
form.addEventListener("submit",(e)=>{
      e.preventDefault();
      qr.innerHTML= ""
      const saveLink= document.getElementById("save-link")
      if(saveLink){
            saveLink.remove()
      }
      // alert("submit")
      const url = document.getElementById("url").value
      const size = document.getElementById("size").value
      // alert(url)
      // alert(size)
      if(url == ""){
            // alert("please enter a url")
      }else{
        document.getElementById("spinner").style.display ="block"

            setTimeout(() =>{
        document.getElementById("spinner").style.display ="none"
        generateCode(url,size)
        setTimeout(() =>{
            saveBtn(qr.querySelector("img").src)
        },50)
        
       

        



            },1000)
            


      }
      //   document.getElementById("spinner").style.display ="block"
      //   document.getElementById("spinner").style.display ="none"



})
const generateCode = (url,size)=>{
      const qrCode = new QRCode("qrcode",{
            text:url,
            height:size,
            width:size
      })

}
const saveBtn = (url)=>{
      const link = document.createElement("a")
      link.id = "save-link"
      link.classList= "bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5"
      link.href=url
      link.download ='qr'
      link.innerHTML="save image"
      document.getElementById("generated").appendChild(link)

  }