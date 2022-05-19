Signature Individual Counseled[0]
	preSign
xfa.host.messageBox("Your digital signature has the same legal effect and consequences as a hand written signature.\n\nThe individual who signs this digital signature, has the sole authority to clear or delete this digital signature.", "Electronic Signature N

form1.Page2.Individual Counseled Date.rawValue = util.printd("yyyymmdd", new Date()); /**Replace "DateField" with the hierarchy name of your date field**/

	postSign
var getSigField1 = event.target.getField("form1[0].Page2[0].Signature Individual Counseled[0]"); /**Make sure "Signature1" is the current signature hierarchy name**/
var oState1 = getSigField1.signatureValidate();

if (oState1 == 0) {
  // If cancelling signature then delete the current field's signed state.
  form1.Page2.Individual Counseled Date.rawValue = "";
}

	change
try{
  var getSigField = event.target.getField("form1[0].Page2[0].Signature Individual Counseled[0]");
  var oState =getSigField.signatureValidate();
  // Get the current field's signed state.
  if (oState != 0) {
    // Get signature details
    var Info = event.target.getField("form1[0].Page2[0].Signature Individual Counseled[0]").signatureInfo();
  }
  else {
    form1.Page2.Individual Counseled Date.rawValue = "";//Clear the Date
  }
  xfa.host.setFocus(this);
  }
    catch(e) {app.alert(e)}
