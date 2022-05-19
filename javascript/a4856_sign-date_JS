	preSign
xfa.host.messageBox("Your digital signature has the same legal effect and consequences as a hand written signature.\n\nThe individual who signs this digital signature, has the sole authority to clear or delete this digital signature.");

form1.Page2.Individual_Counseled_Date.rawValue = util.printd("yyyymmdd", new Date());

	postSign
var getSigField1 = event.target.getField("form1[0].Page2[0].Signature_Counselor[0]");
var oState1 = getSigField1.signatureValidate();

if (oState1 == 0) {
	// If cancelling signature then delete the current field's signed state.
	form1.Page2.Counselor_Date.rawValue = "";
}

	change
try{
  var getSigField = event.target.getField("form1[0].Page2[0].Signature_Counselor[0]");
  var oState = getSigField.signatureValidate();
  // Get the current field's signed state.
  if (oState != 0) {
    //Get signature details
    var Info = event.target.getField("form1[0].Page2[0].Signature_Counselor[0]").signatureInfo();
  }
  else {
    form1.Page2.Counselor_Date.rawValue = "";//clear the date
  }
  xfa.host.setFocus(this);
  }
    catch(e) {app.alert(e)}
