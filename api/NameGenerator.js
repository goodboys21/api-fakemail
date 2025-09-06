class NameGenerator {
  constructor(glue = ' ') {
    this._first = ["sarah", "aaliyah", "anna", "arianna", "ellie", "steven", "mary"];
    this._last = ["@gmail.com", "@yahoo.com", "@outlook.com", "@hotmail.com", "@cogood.com"];
    this._glue = glue;
  }

  gen_mail() {
    const user = this._first[Math.floor(Math.random() * this._first.length)];
    const domain = this._last[Math.floor(Math.random() * this._last.length)];
    const number = Math.floor(Math.random() * 1000);
    return `${user}${number}${domain}`;
  }

  gen_pass() {
    const pass_user = this._first[Math.floor(Math.random() * this._first.length)];
    const number = Math.floor(Math.random() * 10000);
    return `${pass_user}${number}`;
  }

  gen_ip() {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
  }
}

module.exports = NameGenerator;
