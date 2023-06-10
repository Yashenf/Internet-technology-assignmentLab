/*
* Created by : @yash
*              4/26/2023 , Wednesday
*              06:11 PM
* Project : book_store
* Contact me : contact.yashen@gmail.com 
*/

const toDashboard = () => {
    toOrderPage();
}

const toOrderPage = () => {
    $('#orders').css('display', 'block');
    $('#customer').css('display', 'none');
    $('#product').css('display', 'none');
    $('#placeOrder').css('display', 'none');
}

const toCustomerPage = () => {
    $('#orders').css('display', 'none');
    $('#customer').css('display', 'block');
    $('#product').css('display', 'none');
    $('#placeOrder').css('display', 'none');
}

const toProductPage = () => {
    $('#orders').css('display', 'none');
    $('#customer').css('display', 'none');
    $('#product').css('display', 'block');
    $('#placeOrder').css('display', 'none');
}

const toPlaceOrderPage = () => {
    $('#orders').css('display', 'none');
    $('#customer').css('display', 'none');
    $('#product').css('display', 'none');
    $('#placeOrder').css('display', 'block');
}


/*------------------    Database  -------------*/
let customers = [];
const saveCustomersToLocalStorage = () => {
    localStorage.setItem('customers', JSON.stringify(customers));
};

const loadCustomersFromLocalStorage = () => {
    const storedCustomers = localStorage.getItem('customers');
    if (storedCustomers) {
        customers = JSON.parse(storedCustomers);
    }
};
loadCustomersFromLocalStorage();
/*-----X------------    Database  ---------X---*/


/*--------------------Customer------------------------------*/
/*-------- Load Data -------*/
const loadCustomerData= ()=>{
    loadCustomersFromLocalStorage();
    $('#customerTable').html("");
    customers.map((result,id)=>{
        let cusId= result._id;
        $('#customerTable').append(`
        <tr onclick="showData('${cusId}')">
            <td>${result._id}</td>
            <td>${result._name}</td>
            <td>${result._email}</td>
            <td>${result._option}</td>
        </tr>
    `);
    });
}

/*---------  validations  -----------*/

        const regexCusId=/^Cus-\d{3}$/;
        $('#customer_id').on('keyup',(e)=>{
            if (regexCusId.test($('#customer_id').val())){
                $('#customer_id').css('border','2px solid green');
                $('#cusIdErr').css('display','none');
                if (e.key === "Enter"){
                    $('#customer_name').focus();
                }
            }else{
                $('#customer_id').css('border','2px solid red');
                $('#cusIdErr').css('display','block');
                $('#cusIdErr').text('wrong input format ex:- Cus-001');
                $('#saveCustomerBtn').prop('disabled',true);
            }
        });

        const regexCusName=/^[a-zA-Z\s']+$/;
        $('#customer_name').on('keyup',(e)=>{
            if (regexCusName.test($('#customer_name').val())){
                $('#customer_name').css('border','2px solid green');
                $('#cusNameErr').css('display','none');
                if (e.key === "Enter"){
                    $('#customer_email').focus();
                }
            }else{
                $('#customer_name').css('border','2px solid red');
                $('#cusNameErr').css('display','block');
                $('#cusNameErr').text('Invalied Name');
                $('#saveCustomerBtn').prop('disabled',false);
            }
        });

        const regexCusEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        $('#customer_email').on('keyup',(e)=>{
            if (regexCusEmail.test($('#customer_email').val())){
                $('#customer_email').css('border','2px solid green');
                $('#cusEmailErr').css('display','none');
            }else{
                $('#customer_email').css('border','2px solid red');
                $('#cusEmailErr').css('display','block');
                $('#cusEmailErrcusEmailErr').text('Invalied Email');
                $('#saveCustomerBtn').prop('disabled',false);
            }
        });
/*-----X---  validations  -----X-----*/



const deleteCustomer= (cusId)=>{
    customers.map((res,index)=>{
        if (res._id === cusId){
            customers.splice(res._id,1);
        }
    });
    saveCustomersToLocalStorage();
    loadCustomersFromLocalStorage();
    loadCustomerData();
}


loadCustomerData();

const isExistsCusId = (cusId) => {
    const existingCustomer = customers.find((customer) => customer._id === cusId);
    if (existingCustomer) {
        console.log(cusId, ' is duplicated!');
        return true;
    }
    console.log(cusId, ' run');
    return false;
};





const saveCustomer = () => {
    const id = $('#customer_id').val().trim();
    if(isExistsCusId(id)){
        console.log('is exists meth');
        $('#customer_id').css('border','2px solid red');
        $('#cusIdErr').text('Duplicate Customer Id');
        console.log('duplicated');
    }else{
        console.log('is exists meth2');
        const name = $('#customer_name').val();
        const email = $('#customer_email').val();
        const deleteBtn = `<div class="btn btn-danger" onclick="deleteCustomer('${id}')">delete</div>`;


        let newCustomer={
            _id:id,
            _name:name,
            _email:email,
            _option:deleteBtn
        }
        customers.push(newCustomer);
        saveCustomersToLocalStorage();
        loadCustomersFromLocalStorage();
        loadCustomerData();
    }
}


const showData= (cusId)=>{
    const customer= customers.find(customer => customer._id === cusId);
    $('#customer_id').text(customer._id);
    $('#customer_name').text(customer._name);
    $('#customer_email').text(customer._email);
}


const updateCustomer= (cusId)=>{
    const customer= customers.find(customer => customer._id === cusId);
    // const deleteBtn = `<div class="btn btn-danger" onclick="deleteCustomer('${id}')">delete</div>`;
    loadCustomersFromLocalStorage();
    loadCustomerData();
}

/*--------X--------Customer------------------X--------------*/