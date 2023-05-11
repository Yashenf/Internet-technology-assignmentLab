/*
* Created by : @yash
*              4/26/2023 , Wednesday
*              06:11 PM
* Project : book_store
* Contact me : contact.yashen@gmail.com 
*/

  const toDashboard= ()=> {
    toOrderPage();
}

const toOrderPage = ()=>{
    $('#orders').css('display','block');
    $('#customer').css('display','none');
    $('#product').css('display','none');
    $('#placeOrder').css('display','none');
}

const toCustomerPage = ()=>{
  $('#orders').css('display','none');
  $('#customer').css('display','block');
  $('#product').css('display','none');
  $('#placeOrder').css('display','none');
}

const toProductPage = ()=>{
  $('#orders').css('display','none');
  $('#customer').css('display','none');
  $('#product').css('display','block');
  $('#placeOrder').css('display','none');
}

const toPlaceOrderPage = ()=>{
  $('#orders').css('display','none');
  $('#customer').css('display','none');
  $('#product').css('display','none');
  $('#placeOrder').css('display','block');
}