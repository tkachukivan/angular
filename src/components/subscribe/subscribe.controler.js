class SubscribeController {
  constructor(subscribeService, $timeout) {
    this.service = subscribeService;
    this.timeout = $timeout;
    this.user = {};
    this.userForm = {};
    this.error = '';
    this.ok = ''
  }

  submit() {
    this.service.sendInfo(this.user)
      .then((result) => {
        if (result.data.error == undefined) {
          this.success();
          return
        }
        this.errorForm(result.data.error);
        return
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  success () {
    this.userForm.$setPristine();
    this.user = {};
    this.error = '';
    this.ok = true;
    this.timeout(()=> {
      this.ok = '';
    }, 2000)
  }

  errorForm(error) {
    if (this.userForm.name.$error.name) {
      this.userForm.name.$setValidity(name, true);
    }

    if (error == 'name') {
      this.error = 'Name field is mandatory and must be more then 3 letters';
    }

    if (error == 'email') {
      this.error = 'This email was registered';
    }

    if (error == 'emailEmpty') {
      this.error = 'Email field is mandatory';
    }

    if (error == 'comment') {
      this.error = 'If you check "Help us" you must write comment';
    }
  }
}

export default SubscribeController;