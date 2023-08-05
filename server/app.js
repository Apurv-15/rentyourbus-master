const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "pvtbusbooking",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let teekeet;

// myprofile

// Backend route to store user data in the database
app.post("/api/users", (req, res) => {
  const { name, contactno, DOB, gender, useremail } = req.body;

  // Use an INSERT ... ON DUPLICATE KEY UPDATE statement to handle duplicate entries
  const sql = `INSERT INTO user (useremail, name, contactno, DOB, gender) VALUES (?, ?, ?, ?, ?)
               ON DUPLICATE KEY UPDATE name = VALUES(name), contactno = VALUES(contactno), DOB = VALUES(DOB), gender = VALUES(gender)`;
  db.query(sql, [useremail, name, contactno, DOB, gender], (err, result) => {
    if (err) {
      console.error("Error storing or updating data in the database: ", err);
      res.status(500).json({ error: "Error storing or updating data in the database" });
    } else {
      res.status(200).json({ message: "Data stored or updated successfully" });
    }
  });
});

// Backend route to retrieve user data based on the email (unique key)
app.get("/api/users/:email", (req, res) => {
  const email = req.params.email;

  // Assuming the "user" table has columns: useremail, name, contactno, DOB, gender
  const sql = `SELECT name, contactno, DOB, gender FROM user WHERE useremail = ?`;
  db.query(sql, [email], (err, result) => {
    if (err) {
      console.error("Error retrieving data from the database: ", err);
      res.status(500).json({ error: "Error retrieving data from the database" });
    } else {
      if (result.length === 0) {
        // User with the provided email not found in the database
        res.status(404).json({ message: "User not found" });
      } else {
        const userData = result[0];
        res.status(200).json(userData);
      }
    }
  });
});

// my bookings
app.get("/pastBookings/:email", (req, res) => {
  const email = req.params.email;
  db.query(
    `SELECT * FROM tempbooking WHERE email = ? AND status = 'completed'`,
    [email],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Error fetching past bookings" });
      } else {
        res.status(200).json(result);
      }
    }
  );
});

//homepage

app.post("/storeuserdata", (req, res) => {
  const { ticketid, from, to, date, journeytype, email } = req.body;
  teekeet = ticketid
  console.log(teekeet)

  const checkEmailQuery = `SELECT COUNT(*) AS count FROM user WHERE useremail = '${email}'`;
  const insertQuery = `INSERT INTO user (useremail) SELECT '${email}' WHERE NOT EXISTS (SELECT 1 FROM user WHERE useremail = '${email}')`;
  const values = [ticketid, from, to, date, journeytype];

  db.query(checkEmailQuery, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error checking email existence in the database");
      return;
    }

    const count = result[0].count;

    if (count === 0) {
      // Email doesn't exist, perform the insert operation to add email to user table
      db.query(insertQuery, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error inserting email into the database");
          return;
        }

        // Insert user details into temp table
        const query =
          "INSERT INTO tempbooking (ticketid, `from`, `to`, `date`, journeytype, email) VALUES (?, ?, ?, ?, ?, ?)";
        const valuesWithUserEmail = [...values, email];

        db.query(query, valuesWithUserEmail, (error, results) => {
          if (error) {
            console.error("Error executing MySQL query: ", error);
            res.status(500).send("Error inserting data into the database");
            return;
          }

          console.log("Data inserted successfully!");
          res.sendStatus(200);
        });
      });
    } else {
      // Email already exists, insert user details into temp table
      const query =
        "INSERT INTO tempbooking (ticketid, `from`, `to`, `date`, journeytype, email) VALUES (?, ?, ?, ?, ?, ?)";
      const valuesWithUserEmail = [...values, email];

      db.query(query, valuesWithUserEmail, (error, results) => {
        if (error) {
          console.error("Error executing MySQL query: ", error);
          res.status(500).send("Error inserting data into the database");
          return;
        }

        console.log("Data inserted successfully!");
        res.sendStatus(200);
      });
    }
  });
});

//bustype

// Assume you have an endpoint to handle updating the tempbooking table
app.post("/api/tempbooking", (req, res) => {
  const { bussize, bustype, ac } = req.body;

  // Update the record in the tempbooking table based on the ticketid
  db.query(
    "UPDATE tempbooking SET bussize = ?, bustype = ?, ac = ?, status='pending' WHERE ticketid = ?",
    [bussize, bustype, ac, teekeet],
    (err, result) => {
      if (err) {
        console.error("Error updating booking details: ", err);
        res.status(500).json({ message: "Failed to update booking details." });
      } else {
        console.log("Booking details updated successfully.");
        res.status(200).json({ message: "Booking details updated successfully." });
      }
    }
  );
});

//ordersum

app.get("/ticket", (req, res) => {
  const sql = "SELECT * FROM tempbooking WHERE ticketid = ?";
  db.query(sql, [teekeet], (err, result) => {
    if (err) {
      console.error("Error fetching ticket data: ", err);
      res.status(500).json({ message: "Failed to fetch ticket data" });
    } else {
      if (result.length === 0) {
        console.error("No ticket data found");
        res.status(404).json({ message: "Ticket data not found" });
      } else {
        const ticketData = result[0];
        res.status(200).json(ticketData);
      }
    }
  });
});

// to get the details of new user as soon as he signs up 

app.post("/sendemail", (req, res) => {
  const { email, name } = req.body;
  let checkEmailQuery = `SELECT COUNT(*) AS count FROM user WHERE useremail = '${email}'`;
  let insertQuery = `INSERT INTO user (useremail, name) SELECT '${email}', '${name}' WHERE NOT EXISTS (SELECT 1 FROM user WHERE useremail = '${email}')`;

  db.query(checkEmailQuery, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error checking email existence in the database");
      return;
    }

    const count = result[0].count;

    if (count > 0) {
      // Email already exists
      res.send("Email already exists in the table");
    } else {
      // Email doesn't exist, perform the insert operation
      db.query(insertQuery, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error inserting data into the database");
          return;
        }
        console.log(result);
        res.send("Data inserted successfully");
      });
    }
    });
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});