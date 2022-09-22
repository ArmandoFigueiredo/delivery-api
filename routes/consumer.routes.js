import express from "express";
import { ConsumerModel } from "../models/consumer.model"

const consumerRouter = express.Router();

consumerRouter.post("/", async (req, res) => {
    try {
      const createdConsumer = await ConsumerModel.create(req.body);
  
      return res.status(200).json(createdConsumer);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  });

  consumerRouter.get("/:id", async (req, res) => {
    try {      
      const user = await ConsumerModel.findOne({ _id: req.params.id });
  
      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
});

consumerRouter.patch("/:id", async (req, res) => {
  try {      
    const user = await ConsumerModel.updateOne({ _id: req.params.id });

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

consumerRouter.delete("/:id", async (req, res) => {
  try {      
    const user = await ConsumerModel.findOne({ _id: req.params.id });

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

export { consumerRouter };

