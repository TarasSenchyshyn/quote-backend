const Quote = require('../models/Quote');

module.exports = {
  create: async (req, res) => {
    try {
      const { quote_text, author } = req.body;
      if (!quote_text?.trim() || !author?.trim()) {
        res.status(404).json({ message: 'Please fill all fields correctly' });
      } else {
        const quote = await new Quote({
          quote_text,
          author,
        }).save();

        res
          .status(200)
          .json({ message: 'Quote was created successfully!', quote: quote });
      }
    } catch (e) {
      console.log('Create Error', e);
    }
  },

  getAll: async (req, res) => {
    try {
      let quotes = await Quote.find({});
      res.status(200).json(quotes);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  updateQuote: async (req, res) => {
    try {
      const { id } = req.params;
      const { quote_text, author } = req.body;
      let quote = await Quote.findByIdAndUpdate(id, {
        quote_text,
        author,
      });
      res
        .status(200)
        .json({ message: 'Quote updated successfully!', quote: quote });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await Quote.findByIdAndDelete(id);
      res.status(200).json({ message: 'Quote deleted successfully!' });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
};
