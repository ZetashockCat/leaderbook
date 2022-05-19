app.alert("Your digital signature has the same legal effect and consequences as a hand written signature.\n\nThe individual who signs this digital signature, has the sole authority to clear or delete this digital signature.",1);

var fldVal = event.targetName;
console.println(fldVal);

///////////////////////////////////////

"FieldName.0"
>get SoldierSignature.X -> convert to string
>subtract "SoldierSignature." and add val X to variable
>concat X to "FieldName." to get form field

//////////////////////////////////////

// Initialize form fields with variables
var sName = "SoldierName";
var ssn = "LastFourSSN";
var sSign = "SoldierSignature";
var dSign = "DateSigned";

SoldierSignature.0: remove values 0-16 with fldVal.slice

var fldVal = event.targetName; //Get field that is being signed
var i = fldVal.slice(17); //Get numerical value at end of field

///////////////////////////////////////////

	Mouse Down
app.alert("Your digital signature has the same legal effect and consequences as a hand written signature.\n\nThe individual who signs this digital signature, has the sole authority to clear or delete this digital signature.",1);
	SIGNED
var fldName = event.targetName;
var sName1 = fldName.replace(sSign,sName);
var ssn1 = fldVal.replace(sSign,ssn);
var dSign1 = fldVal.replace(sSign,dSign);

this.getField(dSign1).value = util.printd("dd-mmm-yyyy", new Date());
this.getField(sName1).readonly = true;
this.getField(ssn1).readonly = true;
	OnBlur
var fldName = event.targetName;
var sName1 = fldName.replace(sSign,sName);
var ssn1 = fldVal.replace(sSign,ssn);
var dSign1 = fldVal.replace(sSign,dSign);

if (this.getField(fldName).value !== '') {
   this.getField(sName1).readonly = true;
   this.getField(ssn1).readonly = true;
   this.getField(dSign1).readonly = true;
}// signature is present
else {
    this.getField(dSign1).value = '';
    this.getField(sName1).readonly = false;
    this.getField(ssn1).readonly = false;
}
