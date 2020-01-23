var student=function(id,name,namel,m1,m2,m3){
    this.id=id;
    this.fname=name;
    this.lname=namel;
    this.m1=m1;
    this.m2=m2;
    this.m3=m3;
    this.gettotal=function(){
        var c= this.m1+this.m2+this.m3;
        return c
    }
    this.getgrade=function(c){
        var tot=this.gettotal();
        if(tot>=80){
           console.log("A") 
        }
        if(tot<80&&tot>=70){
            console.log("B")
        }
        if(tot<70&&tot>60){
            console.log('c')
        }
        if(tot<=60&&tot>35){
            console.log("faile")
        }
        }
        this.getfullname=function(){
            return this.fname+this.lname;
        }
}
var std1=new student(101,'kolikonda','venky',50,30,20)
console.log(std1.gettotal())
console.log(std1.getgrade())
console.log(std1.getfullname())
var std2=new student(102,'dora','papa',20,10,15)
console.log(std2.gettotal())
console.log(std2.getgrade())
console.log(std2.getfullname())
var std3=new student(100,'jai','thoupu',20,40,20)
console.log(std3.gettotal())
console.log(std3.getgrade())
console.log(std3.getfullname())
var std4=new student(100,'phani','anna',20,10,9)
console.log(std4.gettotal())
console.log(std4.getgrade())
console.log(std4.getfullname())
var std5=new student(100,'raj','bro',30,60,40)
console.log(std5.gettotal())
console.log(std5.getgrade())
console.log(std5.getfullname())
var std6=new student(100,'siva','bro',20,30,10)
console.log(std6.gettotal())
console.log(std6.getgrade())
console.log(std6.getfullname())