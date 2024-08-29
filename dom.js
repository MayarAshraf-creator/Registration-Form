const invalidemail = document.getElementById('invalidemail');
const inputemail =document.getElementById('email');
const form =document.getElementById('form')
const invalidfname =document.getElementById('invalidfname')
const invalidlname =document.getElementById('invalidlname')
const invalidpass =document.getElementById('invalidpass')
const invalidphnum =document.getElementById('invalidphnum')
const invalidpassconf =document.getElementById('invalidpassconf')
const fname =document.getElementById('fname')
const lname =document.getElementById('lname')
const pass =document.getElementById('pass')
const confpass =document.getElementById('confpass')
const numb =document.getElementById('numb')
const image =document.getElementById('image')
const btnform =document.getElementById('btnform')
const email =document.getElementById('email')


form.addEventListener('submit', e => {
    e.preventDefault();
    
});
const formInputsValue = {
    fname: '',
    lname: '',
    email: '',
    pass: '',
    confpass:'',
    numb:'',
    image: null
}
fname.addEventListener('input', (event) => {
    const value = event.target.value;
    console.log(value.length);
    
    if(value.length > 10 || value.trim().length ==0) {
        invalidfname.style.display = 'block';
        isfnameValid = false;
    } else {
        invalidfname.style.display = 'none';
        isfnameValid = true;
        formInputsValue.fname = value;
        }
    })

    let isemailvalid  = false; 
    let isfnameValid= false; 
    let islnamevalid = false; 
    let ispassvalid = false; 
    let isimagevalid = false; 

    lname.addEventListener('input', (event) => {
        const value = event.target.value;
        console.log(value.length);
        
        if(value.length > 10 || value.trim().length ==0) {
            invalidlname.style.display = 'block';
            islnameValid = false;
        } else {
            invalidlname.style.display = 'none';
            islnameValid = true;
            formInputsValue.lname = value;
            }
        })
    
const emailRegex =/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
email.addEventListener('input',(event) => {
    const value = event.target.value;
    if(emailRegex.test(value)){
        invalidemail.style.display='none'; 
    } else{
        invalidemail.style.display='block';  
    }
})

pass.addEventListener('input', (event) => {
    var value = event.target.value;
    console.log(value.length);
    
    if(value.length > 8 || value.trim().length ==0) {
        invalidpass.style.display = 'block';
        ispassvalid = false;
       
    } else {
        invalidpass.style.display = 'none';
        ispassvalid = true;
        formInputsValue.invalidpass = value;
        }
    })
    const phoneNumberRegex = /^01[0125][0-9]{8}$/;
    numb.addEventListener('input',(event) => {
        const value = event.target.value;
        if(phoneNumberRegex.test(value)){
            invalidphnum.style.display='none'; 
        } else{
            invalidphnum.style.display='block';  
        }
    })
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{9,}$/;
    pass.addEventListener('input',(event) => {
        const value = event.target.value;
        if(passwordRegex.test(value)){
            invalidpass.style.display='none'; 
        } else{
            invalidpass.style.display='block';  
        }
    })
   
   
    
     
         document.getElementById('image').addEventListener('change', (e) => {

            const file = e.target.files[0];
        
            const fileName = file.name;
        
            const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        
            if(!allowedExtensions.exec(fileName)) {
        
                document.getElementById('invalidfile').style.display = 'block';
               

                e.target.value = '';
            }
        
            else {
        
                document.getElementById('invalidfile').style.display = 'none';
        
            }
        
        })      