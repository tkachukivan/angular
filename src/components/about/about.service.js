class AboutService {
  constructor() {
    this.about = [
      'When we launched MEGA early 2013, global mass surveillance by rogue governments under the pretext of fighting ' +
      'terrorism was still a wild conjecture and its proponents were often touted as conspiracy theorists. Edward ' +
      'Snowden\'s revelations 137 days later fundamentally changed public attitudes and it became excruciatingly clear ' +
      'that security by policy ("we have access to your data, but we promise to keep it confidential and not misuse it") ' +
      'had not been good enough. Anything short of security by design ("we cannot gain access to your data without you ' +
      'being able to find out"), for which strong end-to-end encryption is an essential prerequisite, ' +
      'now seems grossly insufficient.'
      ,
      'MEGA was architected around the simple fact that cryptography, for it to be accepted and used, must not interfere' +
      ' with usability. MEGA is fully accessible without prior software installs and remains the only cloud storage ' +
      'provider with browser-based high-performance end-to-end encryption. The only visible signs of the crypto layer ' +
      'operating under MEGA\'s hood are the entropy collection during signup, the lack of a password reset feature and ' +
      'the novel (and browser-specific) ways file transfers are conducted. Today, millions of business and personal users ' +
      'rely on MEGA to securely and reliably store and serve petabytes of data and we believe that this success is the' +
      ' result of MEGA\'s low barrier to entry to a more secure cloud.'
    ]
  }

  getAboutInfo() {
    return this.about
  }
};

export default AboutService;