const {z} = require("zod");

const sendSchema = z.object({
    username: z.string({required_error: "Name is required"}).trim().min(3, {message: "Name must be at least of 3 characters"})
    .max(20, {message: "Name must not be greater than 20 characters"}),

    email: z.string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3, {message: "Email must be at least of 3 characters"})
    .max(50, {message: "Email` must not be greater than 50 characters"}),

    message: z.string({required_error: "Message is required"})
    .trim()
    .max(50, {message: " must not be greater than 500 characters"}),
});

module.exports = sendSchema;