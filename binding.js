class Student {
  constructor(fullName, address, phone, course) {
    this._fullName = fullName;
    this.address = address;
    this.phone = phone;
    this.course = course;
  }

  // checking fullname validity:

  validateName(val) {
    var invChar = /^[A-Za-z0-9 ]+$/;

    //Validate TextBox value against the invChar.
    var isValid = invChar.test(val);
    if (!isValid) {
      $("#prikazi").html(this._fullName);
    } else {
      $("#prikazi").html(this._fullName + "Contains Special Characters.");
    }
  }

  checkName(text) {
    text = text.trim();
    if (text === "") {
      throw new Error("The name can not be empty");
    }
    this._fullName = text;
  }
  studentName(val) {
    this.validateName(val);
    this.checkName(val);
  }
  getInfo() {
    return `Name: ${this._fullName} <br> Address: ${this.address}<br> Phone: ${this.phone}<br>  Course: ${this.course}`;
  }
}

let fullName = $("#fullName");
let address1 = $("#inputAddress");
let address2 = $("#inputAddress2");
let inputCity = $("#inputCity");
let inputZip = $("#inputZip");
let phone = $("#phoneNumber");
let prikaziPodatke = $("#prikazi");
let course = $("#course");

$("#signInBtn").on("click", (e) => {
  e.preventDefault();
  let address = `${address1.val()} ${address2.val()} ${inputCity.val()} ${inputZip.val()}`;
  let student1 = new Student(
    fullName.val(),
    address,
    phone.val(),
    course.val()
  );

  prikaziPodatke.html(student1.getInfo());
});
