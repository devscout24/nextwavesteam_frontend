import { type RouteConfig, index, layout, route } from "@react-router/dev/routes"

export default [
  layout("./layouts/root-layout.tsx", [
    index("./routes/home.tsx"), 

    // player routes
    route( "/players" , "./routes/players.tsx"),
    route( "/players/:id" , "./routes/player-profile.tsx"),
    route( "/player/me" , "./routes/player-owner.tsx"),
    route( "/message" , "./routes/message.tsx"),
    route( "/carts" , "./routes/cart.tsx"),
    route( "/checkout" , "./routes/checkout.tsx"),
    route( "/order-confirmation" , "./routes/order-confirmation.tsx"),

    route( "/notifications" , "./routes/notifications.tsx"),
    route( "/products" , "./routes/products.tsx"),

    // user routes
    route( "/user/me" , "./routes/user-profile.tsx"),
  ]),
  route("/auth" , "./layouts/auth-layout.tsx", [
    index("./routes/login.tsx"),
    route( "signup" , "./routes/signup.tsx"),
    route( "reset-password" , "./routes/reset-password.tsx"),
  ]),
] satisfies RouteConfig
