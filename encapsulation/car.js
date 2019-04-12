class Car{
  constructor(model){
    this._model = model;

    var milesDriven = 0;

    this.drive = function(distance){
      milesDriven += distance;
    },

    this.getMilesDriven = function(){
      return milesDriven;
    }
  };

  get model(){
    return this._model;
  }
  set model(newModel){
    this._model = newModel;
  }
}

const tesla = new Car('Toyota');

tesla.milesDriven = -10;

console.log(tesla);
