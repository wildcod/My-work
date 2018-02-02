$(function (){

    let newToInput = $("#todotext")
    let addnewToBtn  = $("#todoBtn")
    let newToList = $('#todoList')

    addnewToBtn.click(function (){
      //  console.log("Button was clicked")

      let newtodo = newToInput.val()
      console.log(newtodo)
    })
})