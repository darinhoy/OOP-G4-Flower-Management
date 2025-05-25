import { Admin } from "./Admin";
import { Customer } from "./Customer";
import { Flower } from "./Flower";
import { Cart } from "./Cart";
import { Order } from "./Order";
import { Payment } from "./Payment";
import { PaymentType } from "./PaymentType";

// Create users
const admin = new Admin(1, "Admin1", "adminpass");
const customer = new Customer(2, "YaYa", "dar123", "371 Street");

// Login
admin.login();
customer.login();
customer.register();

// Admin adds flowers
const rose = new Flower(101, "Rose", "Red", 5);
const tulip = new Flower(102, "Tulip", "Yellow", 3);
admin.addFlower(rose);
admin.addFlower(tulip);

// Customer adds flowers to cart
const cart = new Cart();
cart.addItems(rose);
cart.addItems(tulip);

// Create order
const order = new Order(5001, customer, cart.getItems());
order.placeOrder();

// Make payment
const payment = new Payment(order, PaymentType.CreditCard);
payment.makePayment();
