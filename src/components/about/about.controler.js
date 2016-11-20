class AboutController {
  constructor(aboutService) {
    this.about = aboutService.getAboutInfo();
  }
}

export default AboutController;