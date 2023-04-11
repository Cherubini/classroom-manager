class Student{

    constructor(name, surname, date){
        this.name = name;
        this.surname = surname;
        this.dob= this.fromStringToDate(date);
    }

    toString()
        {
        return this.name+' '+this.surname;
        } 
    
    fromStringToDate(strDate)
        {
        if(strDate!=undefined)
            {
            const dateArray=strDate.split('/');
            return new Date(dateArray[2],dateArray[1]-1,dateArray[0]);
            }
        }

    isBirthday()
    {
    let tempDate=new Date();
    let dob=this.dob;
    return tempDate.getMonth()===dob.getMonth() && tempDate.getDate()===dob.getDate();
    }
}