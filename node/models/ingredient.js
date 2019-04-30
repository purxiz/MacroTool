var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ingredientSchema = new Schema({
        
    name: { type: String, required: [true, 'err-name-missing'], unique: true },
        description: { type: String },
        calories: { type: Number , required: [true, 'err-calories-missing' ] },
        macros: {
                    protein: Number,
                    fat: Number,
                    carbohydrate: Number
        },
        unit: { type: String, required: [true, 'err-unit-missing'] },
        quantity: {type: Number, required: [true, 'err-quantity-missing'] }
},
    {
            timestamps: true
    }   
);

module.exports = mongoose.model('ingredient', ingredientSchema);
