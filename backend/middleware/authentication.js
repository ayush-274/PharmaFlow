import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1]; // Extract the token from the header

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Token is not valid" });
      }

      req.user = user; // Attach user data to the request object
      next(); // Move to the next middleware
    });
  } else {
    res.status(401).json({ message: "Authorization token required" });
  }
};
 
export default verifyToken ;
