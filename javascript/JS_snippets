this.getField("01_Spouse's Name").hidden = false;
this.getField("01_Child's Name").hidden = false;
this.getField("01_Child Age").hidden = false;
this.getField("01_ChildSex").hidden = false;
this.getField("01_ChildEFMP").hidden = false;
this.getField("01_SpouseEFMP").hidden = false;
this.getField("01_SpouseMilitary").hidden = false;   


DOR:01_Date of Rank -> TIG:01_Time in Grade
BASD:01_Basic Active Service Date -> TIS:01_Time in Service
DOB:01_Date of Birth -> AGE:01_Age

var todayYear = todayDate.getFullYear();
var todayMonth = todayDate.getMonth();
console.println(birthMonth);
console.println(todayYear);
console.println(todayMonth);

var todayDate = new Date();
var oneYear = 1000 * 60 * 60 * 24 * 365;
var todayMonth = todayDate.getMonth();
var todayYear = todayDate.getFullYear();

if(this.getField("01_Date of Birth").value != ("" || undefined || null)) {
 var dateBirth = util.scand("yyyy-mm-dd",this.getField("01_Date of Birth").value);
 var diff = todayDate - dateBirth;
 var age = Math.floor(diff/oneYear);
 this.getField("01_Age").value = util.printf(age + " years");
}
else {
 this.getField("01_Age").value = util.printf("");
}

var dor = util.scand("yyyy-mm-dd",this.getField("01_Date of Rank").value);
var dorMonth = dor.getMonth();
var dorYear = dor.getFullYear();
var diffDORMonth = (todayMonth - dorMonth)+12;
if (diffDORMonth == 12) {
 var diffDORYear = (todayYear - dorYear);
 diffDORMonth = 0;
}
else {
 var diffDORYear = (todayYear - dorYear) - 1;
}
this.getField("01_Time in Grade").value = util.printf(diffDORYear + " year(s), " + diffDORMonth + " month(s)")

var tis = util.scand("yyyy-mm-dd",this.getField("01_Basic Active Service Date").value);
var tisMonth = tis.getMonth();
var tisYear = tis.getFullYear();
var diffTISMonth = (todayMonth - tisMonth)+12;
if (diffTISMonth == 12) {
 var diffTISYear = (todayYear - tisYear);
 diffTISMonth = 0;
}
else {
 var diffTISYear = (todayYear - dorYear) - 1;
}
this.getField("01_Time in Service").value = util.printf(diffTISYear + " year(s), " + diffTISMonth + " month(s)")
