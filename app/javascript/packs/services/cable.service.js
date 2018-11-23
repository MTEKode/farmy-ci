class CableService {
  instance;
  constructor() {
    if (this.instance) return this.instance;
    this.cable = ActionCable.createConsumer('/cable');
    this.instance = this;
  }
}

export default CableService;