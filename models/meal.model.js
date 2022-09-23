import { Schema, model } from "mongoose";

const mealSchema = new Schema({
    name: { type: String, required: true, minLength: 3 },
    calories: { type: Number, required: true },
    ingredients: { type: String, required: true },
    description: { type: String, required: true, minLength: 10 },
    servings: { type: String, required: true },
    category: { type: String, required: true, enum: ["Entrada", "Prato principal", "Sobremesa", "Bebida"] },
    img: { type: String, default: "https://static.vecteezy.com/system/resources/previews/007/516/169/original/illustration-of-serving-icons-cooks-restaurants-dessert-bowls-free-vector.jpg" }
});

const MealModel = model("Meal", mealSchema);

export { MealModel };
