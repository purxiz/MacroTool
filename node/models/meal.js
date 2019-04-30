var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mealSchema = new Schema({

    name: { type: String, required: [true, 'err-name-missing'], unique: true },
    description: { type: String },
    calories: { type: Number , required: [true, 'err-calories-missing' ] },
    macros: {
        protein: Number,
        fat: Number,
        carbohydrate: Number
    },
    ingredients: [{ type: Schema.Types.ObjectId, ref: 'ingredient' }]
},
{
    timestamps: true
}     
);

module.exports = mongoose.model('meal', mealSchema);
