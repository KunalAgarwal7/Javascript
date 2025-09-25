let a = "CPP";

switch (a) {
  case "HR":
    function hr() {
      console.log("HR is for taking interview.");
    }
    hr();
    break;

  case "Manager":
    function manager() {
      console.log("Manager is for managing tasks and team.");
    }
    manager();
    break;

  case "Intern":
    let internf = function () {
      console.log("Intern is for learning and doing work.");
    };
    internf();
    break;

  case "Developer":
    let develop = () => {
      console.log("Developer is for developing websites.");
    };
    develop();
    break;

  default:
    console.log("Please enter Valid Role.");
    break;
}
