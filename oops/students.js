var students=function(id,name,telugu,maths,physics,chemestry,botany,zoology,total,per,grade){
    this.id=id;
    this.name=name;
    this.telugu=telugu;
    this.maths=maths;
    this.physics=physics;
    this.chemestry=chemestry
    this.botany=botany;
    this.zoology=zoology;
    this.total=total;
    this.per=per;
    this.grade=grade;
}
var std1=new students(101,'venky',80,90,70,65,75,68,550,'50%','A')
var std2=new students(102,'jai',80,90,80,85,95,58,550,'80%','A+')
var std3=new students(103,'jai',70,90,80,85,95,58,550,'70%','A+')
console.log(std1)
console.log(std2)
console.log(std3)